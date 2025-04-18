import { MovieData } from "@/types/types";

export default async function fetchAllMovies() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/movie`,
    { next: { revalidate: 60 * 10 } }
  );

  if (!response.ok) {
    return null;
  }

  const allMovies: MovieData[] = await response.json();
  return allMovies;
}
