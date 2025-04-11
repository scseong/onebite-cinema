import { MovieData } from "@/types/types";
import style from "./page.module.scss";

async function fetchMovie(movieId: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/movie/${movieId}`,
    { next: { revalidate: 60 * 60 * 24 } }
  );

  if (!response.ok) {
    return null;
  }

  const movie: MovieData = await response.json();
  return movie;
}

function MovieView({
  title,
  releaseDate,
  company,
  genres,
  subTitle,
  description,
  runtime,
  posterImgUrl,
}: MovieData) {
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

export default async function MovieContainer({ params }: NextPage) {
  const { id } = await params;
  const movie = await fetchMovie(id);

  if (!movie)
    return (
      <section className={style.movie}>
        <h2>영화 정보를 찾을 수 없습니다.</h2>
      </section>
    );

  return <MovieView {...movie} />;
}
