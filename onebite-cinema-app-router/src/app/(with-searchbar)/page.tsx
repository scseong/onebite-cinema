import MovieItem from "./_components/movie-item";
import { MovieData } from "@/types/types";
import style from "./page.module.scss";

async function AllMovies() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/movie`,
    { next: { revalidate: 60 * 10 } }
  );

  if (!response.ok) {
    return <div>오류가 발생했습니다 ...</div>;
  }

  const allMovies: MovieData[] = await response.json();

  return (
    <ul>
      {allMovies.map((movie) => (
        <MovieItem key={movie.id} {...movie} />
      ))}
    </ul>
  );
}

async function RecoMovies() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/movie/random`,
    { next: { revalidate: 60 * 60 } }
  );

  if (!response.ok) {
    return <div>오류가 발생했습니다 ...</div>;
  }

  const recoMovies: MovieData[] = await response.json();

  return (
    <ul>
      {recoMovies.map((movie) => (
        <MovieItem key={movie.id} {...movie} />
      ))}
    </ul>
  );
}

export default function Home() {
  return (
    <>
      <div className={style.container}>
        <section className={style.recommend}>
          <h2>지금 가장 추천하는 영화</h2>
          <RecoMovies />
        </section>
        <section className={style.all}>
          <h2>등록된 모든 영화</h2>
          <AllMovies />
        </section>
      </div>
    </>
  );
}
