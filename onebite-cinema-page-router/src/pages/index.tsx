import { InferGetStaticPropsType } from "next";
import Head from "next/head";
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
    <>
      <Head>
        <title>한입 씨네마</title>
        <meta property="og:image" content="/thumbnail.png" />
        <meta property="og:title" content="한입 씨네마" />
        <meta
          property="og:description"
          content="취향에 맞는 추천 영화 목록과 모든 영화 정보를 한 곳에서! 한입 씨네마"
        />
      </Head>
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
    </>
  );
}

Home.getLayout = (page: React.ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
