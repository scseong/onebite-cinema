import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import SearchableLayout from "@/components/searchable-layout";
import MovieItem from "@/components/movie-item";
import { fetchMovies } from "@/lib";
import type { Movie } from "@/types/movie";
import style from "./index.module.scss";

export default function Search() {
  const [movies, setMovies] = useState<Movie[]>([]);

  const router = useRouter();
  const q = router.query.q as string;

  const fetchSearchResult = async () => {
    const data = await fetchMovies(q);
    setMovies(data);
  };

  useEffect(() => {
    if (q) fetchSearchResult();
  }, [q]);

  return (
    <section className={style.search}>
      <Head>
        <title>한입 씨네마 - 검색 결과: {q}</title>
        <meta property="og:image" content="/thumbnail.png" />
        <meta property="og:title" content="한입 씨네마" />
        <meta
          property="og:description"
          content="모든 영화 정보를 한 곳에서! 한입 씨네마"
        />
      </Head>
      <h2>검색 결과: {q}</h2>
      <hr />
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

Search.getLayout = (page: React.ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
