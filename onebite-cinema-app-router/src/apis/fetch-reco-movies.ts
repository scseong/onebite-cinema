import { MovieData } from "@/types/types";

export default async function fetchRecoMovies() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/movie/random`,
    { next: { revalidate: 60 * 60 } }
  );

  if (!response.ok) {
    return null;
  }

  const recoMovies = await response.json();
  return recoMovies as MovieData[];
}
