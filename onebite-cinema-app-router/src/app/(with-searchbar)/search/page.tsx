import { Metadata } from "next";
import { Suspense } from "react";
import MovieList from "../_components/movie-list";
import MovieListSkeleton from "../_components/skeleton/movie-list-skeleton";
import { fetchMoviesWithQuery } from "@/apis";
import style from "./page.module.scss";
import Image from "next/image";

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;
  return {
    title: `검색결과: ${q} - 한입 씨네마`,
    description: `${q}의 검색 결과입니다`,
    openGraph: {
      title: `검색결과: ${q} - 한입 씨네마`,
      description: `${q}의 검색 결과입니다`,
      images: ["/thumbnail.png"],
    },
  };
}

async function SearchContainer({ query }: { query: string }) {
  const movies = await fetchMoviesWithQuery(query);

  if (!movies?.length)
    return (
      <div>
        <Image
          src="/no-result.png"
          alt="검색 결과 없음"
          width={654}
          height={654}
          style={{ width: "100%" }}
        />
      </div>
    );

  return <MovieList movies={movies} />;
}

export default async function Search({ searchParams }: NextPage) {
  const params = await searchParams;
  const q = (params.q as string) || "";

  return (
    <section className={style.search}>
      <h2>검색 결과: {q}</h2>
      <div>
        <Suspense key={q} fallback={<MovieListSkeleton count={3} />}>
          <SearchContainer query={q} />
        </Suspense>
      </div>
    </section>
  );
}
