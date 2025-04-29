import { ReviewData } from "@/types/types";
import style from "./review-item.module.scss";

export default function ReviewItem({ content, author, createdAt }: ReviewData) {
  return (
    <li className={style.container}>
      <div className={style.top}>{author}</div>
      <div className={style.mid}>
        {new Date(createdAt).toLocaleString("ko-KR")}
      </div>
      <div className={style.bottom}>{content}</div>
    </li>
  );
}
