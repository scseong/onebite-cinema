import { Movie } from "@/types/movie";

export default async function fetchMovies(q?: string): Promise<Movie[]> {
  let url = `${process.env.NEXT_PUBLIC_SERVER_URL}/movie`;

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
