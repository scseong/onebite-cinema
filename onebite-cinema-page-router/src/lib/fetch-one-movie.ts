import { Movie } from "@/types/movie";

export default async function fetchOneMovie(
  movieId: string
): Promise<Movie | null> {
  const url = `http://localhost:12345/movie/${movieId}`;

  try {
    const res = await fetch(url);

    if (!res.ok) throw new Error();

    return res.json();
  } catch (err) {
    console.error(err);
    return null;
  }
}
