import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import SearchableLayout from "@/components/searchable-layout";
import MovieItem from "@/components/movie-item";
import { fetchMovies } from "@/lib";
import style from "./index.module.scss";

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const q = context.query.q;
  const movies = await fetchMovies(q as string);

  return {
    props: { movies, q },
  };
};

export default function Search({
  movies,
  q,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
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
