import MovieItem from "../_components/movie-item";
import { ApiError, handleResponse } from "@/app/utils/api";
import { MovieData } from "@/types/types";
import style from "./page.module.scss";

async function fetchMovies(q: string) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_SERVER_URL}/movie/search?q=${q}`,
      { next: { revalidate: 60 } }
    );
    const movie = await handleResponse<MovieData[]>(response);
    return movie;
  } catch (e) {
    if (e instanceof ApiError)
      console.error("영화 검색 중 에러 발생:", e.message);
    return null;
  }
}

function SearchView({ movies, query }: { movies: MovieData[]; query: string }) {
  return (
    <section className={style.search}>
      <h2>
        검색 결과: {query} ({movies.length})
      </h2>
      <div>
        <ul>
          {movies.map((movie) => (
            <MovieItem key={movie.id} {...movie} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default async function SearchContainer({ searchParams }: NextPage) {
  const params = await searchParams;
  const q = params.q as string;
  const movies = await fetchMovies(q);

  if (!movies)
    return (
      <section className={style.search}>
        <h2>검색 결과가 없습니다.</h2>
      </section>
    );

  return <SearchView movies={movies} query={q} />;
}
