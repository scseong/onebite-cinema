import ReviewItemDeleteButton from "./review-item-delete-button";
import { ReviewData } from "@/types/types";
import style from "./review-item.module.scss";

export default function ReviewItem({
  id,
  content,
  author,
  createdAt,
  movieId,
}: ReviewData) {
  return (
    <li className={style.container}>
      <div className={style.top}>
        <p>{author}</p>
      </div>
      <div className={style.mid}>
        <time dateTime={createdAt}>
          {new Date(createdAt).toLocaleString("ko-KR")}
        </time>
      </div>
      <div className={style.bottom}>
        <p>{content}</p>
        <div className={style.delete_wrap}>
          <ReviewItemDeleteButton
            reviewId={id.toString()}
            movieId={movieId.toString()}
          />
        </div>
      </div>
    </li>
  );
}
