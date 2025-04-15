import { ApiError, handleResponse } from "@/utils/api";
import { MovieData } from "@/types/types";

export default async function fetchRecoMovies() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_SERVER_URL}/movie/random`,
      { next: { revalidate: 60 * 60 } }
    );
    const recoMovies = await handleResponse<MovieData[]>(response);
    return recoMovies;
  } catch (e) {
    if (e instanceof ApiError)
      console.error("추천 영화 조회 중 에러 발생:", e.message);
    return null;
  }
}
