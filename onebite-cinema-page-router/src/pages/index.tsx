import { InferGetStaticPropsType } from "next";
import SearchableLayout from "@/components/searchable-layout";
import MovieItem from "@/components/movie-item";
import { fetchMovies, fetchRandomMovies } from "@/lib";
import style from "./index.module.scss";

export const getStaticProps = async () => {
  const [allMovies, recoMovies] = await Promise.all([
    fetchMovies(),
    fetchRandomMovies(),
  ]);

  return {
    props: {
      allMovies,
      recoMovies,
    },
    revalidate: 3600,
  };
};

export default function Home({
  allMovies,
  recoMovies,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className={style.container}>
      <section className={style.recommend}>
        <h2>지금 가장 추천하는 영화</h2>
        <hr />
        <ul>
          {recoMovies.map((movie) => (
            <MovieItem key={movie.id} {...movie} />
          ))}
        </ul>
      </section>
      <section className={style.all}>
        <h2>등록된 모든 영화</h2>
        <hr />
        <ul>
          {allMovies.map((movie) => (
            <MovieItem key={movie.id} {...movie} />
          ))}
        </ul>
      </section>
    </div>
  );
}

Home.getLayout = (page: React.ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
