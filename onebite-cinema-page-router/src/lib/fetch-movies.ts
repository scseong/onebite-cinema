import { Movie } from "@/types/movie";

export default async function fetchMovies(q?: string): Promise<Movie[]> {
  let url = "http://localhost:12345/movie";

  if (q) url += `/search?q=${q}`;

  try {
    const res = await fetch(url);

    if (!res.ok) throw new Error();

    return await res.json();
  } catch (err) {
    console.error(err);
    return [];
  }
}
