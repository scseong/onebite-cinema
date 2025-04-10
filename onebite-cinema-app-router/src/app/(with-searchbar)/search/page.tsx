import MovieItem from "../_components/movie-item";
import { MovieData } from "@/types/types";
import style from "./page.module.scss";

export default async function Search({ searchParams }: NextPage) {
  const { q } = await searchParams;

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/movie/search?q=${q}`,
    { next: { revalidate: 60 } }
  );

  if (!response.ok) {
    return <div>오류가 발생했습니다...</div>;
  }

  const movies: MovieData[] = await response.json();

  return (
    <section className={style.search}>
      <h2>
        검색 결과: {q} ({movies.length})
      </h2>
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
