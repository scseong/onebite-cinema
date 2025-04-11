import MovieItem from "./movie-item";
import { MovieData } from "@/types/types";

export default function MovieList({ movies }: { movies: MovieData[] }) {
  return (
    <ul>
      {movies.map((movie) => (
        <MovieItem key={movie.id} {...movie} />
      ))}
    </ul>
  );
}
