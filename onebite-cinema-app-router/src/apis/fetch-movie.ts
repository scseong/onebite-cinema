import { MovieData } from "@/types/types";

export default async function fetchMovie(movieId: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/movie/${movieId}`,
    { next: { revalidate: 60 * 60 * 24 } }
  );

  if (!response.ok) {
    return null;
  }

  const movie: MovieData = await response.json();
  return movie;
}
