import Link from "next/link";
import { MovieData } from "@/types/types";
import style from "./movie-item.module.scss";

export default function MovieItem({
  id,
  title,
  genres,
  posterImgUrl,
}: MovieData) {
  return (
    <li className={style.container}>
      <Link href={`/movie/${id}`} scroll={false}>
        <div className={style.poster}>
          <img src={posterImgUrl} alt={title} />
        </div>
        <div className={style.info}>
          <h3 title={title}>{title}</h3>
          <ul>
            {genres.map((genre) => (
              <li key={genre}>{genre}</li>
            ))}
          </ul>
        </div>
      </Link>
    </li>
  );
}
