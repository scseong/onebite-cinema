import { ApiError, handleResponse } from "@/utils/api";
import { MovieData } from "@/types/types";

export default async function fetchAllMovies() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_SERVER_URL}/movie`,
      { next: { revalidate: 60 * 10 } }
    );
    const allMovies = await handleResponse<MovieData[]>(response);
    return allMovies;
  } catch (e) {
    if (e instanceof ApiError)
      console.error("영화 조회 중 에러 발생:", e.message);
    return null;
  }
}
