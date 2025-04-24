import { createReviewAction } from "@/actions/create-review.action";
import style from "./review-editor.module.scss";

export function ReviewEditor({ movieId }: { movieId: string }) {
  return (
    <section className={style.form}>
      <form action={createReviewAction}>
        <textarea name="content" placeholder="리뷰 내용" required />
        <input name="movieId" type="text" value={movieId} hidden readOnly />
        <div className={style.submit_container}>
          <input name="author" type="text" placeholder="작성자" required />
          <button type="submit">작성하기</button>
        </div>
      </form>
    </section>
  );
}
