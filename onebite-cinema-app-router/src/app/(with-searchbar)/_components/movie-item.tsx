import Link from "next/link";
import Image from "next/image";
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
          <Image src={posterImgUrl} width={240} height={344} alt={title} />
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
