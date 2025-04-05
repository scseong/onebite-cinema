import { Movie } from "@/types/movie";

export default async function fetchRandomMovies(): Promise<Movie[]> {
  const URL = `${process.env.NEXT_PUBLIC_SERVER_URL}/movie/random`;

  try {
    const res = await fetch(URL);

    if (!res.ok) throw new Error();

    return await res.json();
  } catch (err) {
    console.error(err);
    return [];
  }
}
