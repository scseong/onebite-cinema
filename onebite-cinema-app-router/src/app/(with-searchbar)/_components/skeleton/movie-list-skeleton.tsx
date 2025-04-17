import MovieItemSkeleton from "./movie-item-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function MovieListSkeleton({ count }: { count: number }) {
  return (
    <ul>
      {Array.from({ length: count }).map((_, i) => (
        <MovieItemSkeleton key={i} />
      ))}
    </ul>
  );
}
