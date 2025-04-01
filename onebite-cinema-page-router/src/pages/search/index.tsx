import { useRouter } from "next/router";
import SearchableLayout from "@/components/searchable-layout";
import MovieItem from "@/components/movie-item";
import movies from "@/mock/movies-dummy.json";
import style from "./index.module.scss";

export default function Search() {
  const router = useRouter();
  const { q } = router.query;

  return (
    <section className={style.search}>
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
