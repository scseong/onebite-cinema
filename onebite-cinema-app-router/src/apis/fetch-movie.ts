import { ApiError, handleResponse } from "@/app/utils/api";
import { MovieData } from "@/types/types";

export default async function fetchMovie(movieId: string) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_SERVER_URL}/movie/${movieId}`,
      { next: { revalidate: 60 * 60 * 24 } }
    );
    const movie = await handleResponse<MovieData>(response);
    return movie;
  } catch (e) {
    if (e instanceof ApiError)
      console.error("영화 상세 조회 중 에러 발생:", e.message);
    return null;
  }
}
