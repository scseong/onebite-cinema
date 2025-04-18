import { MovieData } from "@/types/types";

export default async function fetchMoviesWithQuery(q: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/movie/search?q=${q}`,
    { next: { revalidate: 60 } }
  );

  if (!response.ok) {
    return null;
  }

  const movie: MovieData[] = await response.json();
  return movie;
}
