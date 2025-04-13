import MovieList from "./_components/movie-list";
import { ApiError, handleResponse } from "../utils/api";
import { MovieData } from "@/types/types";
import style from "./page.module.scss";

async function fetchRecoMovies() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_SERVER_URL}/movie/random`,
      { next: { revalidate: 60 * 60 } }
    );
    const recoMovies = await handleResponse<MovieData[]>(response);
    return recoMovies;
  } catch (e) {
    if (e instanceof ApiError)
      console.error("영화 검색 중 에러 발생:", e.message);
    return null;
  }
}

async function fetchAllMovies() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/movie`,
    { next: { revalidate: 60 * 10 } }
  );
  const allMovies = await handleResponse<MovieData[]>(response);
  return allMovies;
}

async function MovieContainer({
  fetchFn,
  emptyMessage = "데이터가 없습니다",
}: {
  fetchFn: () => Promise<MovieData[] | null>;
  emptyMessage?: string;
}) {
  const movies = await fetchFn();

  if (!movies?.length) return <div>{emptyMessage}</div>;
  return <MovieList movies={movies} />;
}

export default function Home() {
  return (
    <>
      <div className={style.container}>
        <section className={style.recommend}>
          <h2>지금 가장 추천하는 영화</h2>
          <MovieContainer
            fetchFn={fetchRecoMovies}
            emptyMessage="추천 영화가 없습니다"
          />
        </section>
        <section className={style.all}>
          <h2>등록된 모든 영화</h2>
          <MovieContainer
            fetchFn={fetchAllMovies}
            emptyMessage="영화가 없습니다"
          />
        </section>
      </div>
    </>
  );
}
