import MovieList from "./_components/movie-list";
import { MovieData } from "@/types/types";
import style from "./page.module.scss";
import { fetchRecoMovies, fetchAllMovies } from "@/apis";

async function MovieContainer({
  fetchFn,
}: {
  fetchFn: () => Promise<MovieData[] | null>;
}) {
  const movies = await fetchFn();

  if (!movies?.length) return <div>영화 목록이 없습니다.</div>;
  return <MovieList movies={movies} />;
}

export default function Home() {
  return (
    <>
      <div className={style.container}>
        <section className={style.recommend}>
          <h2>지금 가장 추천하는 영화</h2>
          <MovieContainer fetchFn={fetchRecoMovies} />
        </section>
        <section className={style.all}>
          <h2>등록된 모든 영화</h2>
          <MovieContainer fetchFn={fetchAllMovies} />
        </section>
      </div>
    </>
  );
}
