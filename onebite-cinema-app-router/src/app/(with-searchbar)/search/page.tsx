import MovieItem from "../_components/movie-item";
import { fetchMoviesWithQuery } from "@/apis";
import delay from "@/utils/delay";
import { MovieData } from "@/types/types";
import style from "./page.module.scss";

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
  await delay(1500);
  const movies = await fetchMoviesWithQuery(q);

  if (!movies)
    return (
      <section className={style.search}>
        <h2>검색 결과가 없습니다.</h2>
      </section>
    );

  return <SearchView movies={movies} query={q} />;
}
