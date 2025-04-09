import MovieItem from "./_components/movie-item";
import movies from "@/mock/movies-dummy.json";
import style from "./page.module.scss";

export default function Home() {
  return (
    <>
      <div className={style.container}>
        <section className={style.recommend}>
          <h2>지금 가장 추천하는 영화</h2>
          <ul>
            {movies.slice(0, 3).map((movie) => (
              <MovieItem key={movie.id} {...movie} />
            ))}
          </ul>
        </section>
        <section className={style.all}>
          <h2>등록된 모든 영화</h2>
          <ul>
            {movies.map((movie) => (
              <MovieItem key={movie.id} {...movie} />
            ))}
          </ul>
        </section>
      </div>
    </>
  );
}
