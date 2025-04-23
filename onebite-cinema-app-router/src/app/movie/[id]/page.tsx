import { fetchAllMovies, fetchMovie } from "@/apis";
import { createReviewAction } from "@/actions/create-review.action";
import { MovieData } from "@/types/types";
import style from "./page.module.scss";

export const dynamicParams = false;

export async function generateStaticParams() {
  const allMovies = (await fetchAllMovies()) ?? [];
  const ids = allMovies.map((movie) => ({
    id: movie.id.toString() ?? "0",
  }));

  return ids;
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

function ReviewEditor({ movieId }: { movieId: string }) {
  return (
    <section>
      <form action={createReviewAction}>
        <input name="content" type="text" placeholder="리뷰 내용" required />
        <input name="author" type="text" placeholder="작성자" required />
        <input name="movieId" type="text" value={movieId} hidden readOnly />
        <button type="submit">작성하기</button>
      </form>
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

  return (
    <>
      <MovieView {...movie} />
      <ReviewEditor movieId={id} />
    </>
  );
}
