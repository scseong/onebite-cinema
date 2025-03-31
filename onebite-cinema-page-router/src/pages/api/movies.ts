import type { NextApiRequest, NextApiResponse } from "next";
import movies from "@/mock/movies-dummy.json";
import { Movie } from "@/types/movie";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Movie[]>
) {
  return res.status(200).json(movies);
}
