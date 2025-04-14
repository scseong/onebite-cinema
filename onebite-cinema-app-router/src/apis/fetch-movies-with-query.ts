import { ApiError, handleResponse } from "@/app/utils/api";
import { MovieData } from "@/types/types";

export default async function fetchMoviesWithQuery(q: string) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_SERVER_URL}/movie/search?q=${q}`,
      { next: { revalidate: 60 } }
    );
    const movie = await handleResponse<MovieData[]>(response);
    return movie;
  } catch (e) {
    if (e instanceof ApiError)
      console.error("영화 검색 중 에러 발생:", e.message);
    return null;
  }
}
