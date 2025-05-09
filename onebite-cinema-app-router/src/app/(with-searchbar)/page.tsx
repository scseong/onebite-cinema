import { Metadata } from "next";
import { Suspense } from "react";
import MovieList from "./_components/movie-list";
import MovieListSkeleton from "./_components/skeleton/movie-list-skeleton";
import { fetchRecoMovies, fetchAllMovies } from "@/apis";
import { MovieData } from "@/types/types";
import style from "./page.module.scss";

export const metadata: Metadata = {
  title: "한입 씨네마",
  description:
    "취향에 맞는 추천 영화 목록과 모든 영화 정보를 한 곳에서! 한입 씨네마",
  openGraph: {
    title: "한입 씨네마",
    description:
      "취향에 맞는 추천 영화 목록과 모든 영화 정보를 한 곳에서! 한입 씨네마",
    images: ["/thumbnail.png"],
  },
};

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
          <Suspense fallback={<MovieListSkeleton count={3} />}>
            <MovieContainer fetchFn={fetchRecoMovies} />
          </Suspense>
        </section>
        <section className={style.all}>
          <h2>등록된 모든 영화</h2>
          <Suspense fallback={<MovieListSkeleton count={5} />}>
            <MovieContainer fetchFn={fetchAllMovies} />
          </Suspense>
        </section>
      </div>
    </>
  );
}
