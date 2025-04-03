import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";
import { fetchMovies, fetchOneMovie } from "@/lib";
import style from "./[id].module.scss";

export const getStaticPaths = async () => {
  const allMovies = await fetchMovies();
  const paths = allMovies.map((movie) => ({
    params: { id: movie.id.toString() },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const movieId = context.params!.id as string;
  const movie = await fetchOneMovie(movieId);

  if (!movie) {
    return {
      notFound: true,
    };
  }

  return {
    props: { movie },
  };
};

export default function Movie({
  movie,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const router = useRouter();

  if (router.isFallback) return "로딩중입니다 ...";
  if (!movie) return "문제가 발생했습니다. 다시 시도해주세요.";

  const {
    title,
    releaseDate,
    company,
    genres,
    subTitle,
    description,
    runtime,
    posterImgUrl,
  } = movie;

  return (
    <section className={style.movie}>
      <div
        style={{ backgroundImage: `url('${posterImgUrl})` }}
        className={style.cover_img_container}
      >
        <img src={posterImgUrl} alt={title} />
      </div>
      <h2>{title}</h2>
      <dl className={style.movie_details}>
        <div className={style.movie_info}>
          <dt className={style.hidden}>개봉일</dt>
          <dd aria-label={`개봉일: ${releaseDate}`}>
            <time dateTime={releaseDate}>{releaseDate}</time>
          </dd>

          <dt className={style.hidden}>장르</dt>
          <dd aria-label={`장르: ${genres.join(", ")}`}>{genres.join(", ")}</dd>

          <dt className={style.hidden}>상영 시간</dt>
          <dd aria-label={`상영 시간: ${runtime}분`}>{runtime}분</dd>
        </div>
        <dt className={style.hidden}>영화사</dt>
        <dd>{company}</dd>
      </dl>
      <h3>{subTitle}</h3>
      <p>{description}</p>
    </section>
  );
}
