import MovieItem from "../_components/movie-item";
import movies from "@/mock/movies-dummy.json";
import style from "./page.module.scss";

export default async function Search({ searchParams }: NextPage) {
  const { q } = await searchParams;

  return (
    <section className={style.search}>
      <h2>검색 결과: {q}</h2>
      <div>
        <ul>
          {movies.slice(0, 6).map((movie) => (
            <MovieItem key={movie.id} {...movie} />
          ))}
        </ul>
      </div>
    </section>
  );
}
