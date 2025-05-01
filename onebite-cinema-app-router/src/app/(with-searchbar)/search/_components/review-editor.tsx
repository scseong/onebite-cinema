"use client";

import { useActionState, useEffect } from "react";
import { createReviewAction } from "@/actions/create-review.action";
import style from "./review-editor.module.scss";

export function ReviewEditor({ movieId }: { movieId: string }) {
  const [state, formAction, isPending] = useActionState(
    createReviewAction,
    null
  );

  useEffect(() => {
    if (state && !state.status) {
      alert(state.error);
    }
  }, [state]);

  return (
    <section className={style.form}>
      <form action={formAction}>
        <textarea
          name="content"
          placeholder="리뷰 내용"
          disabled={isPending}
          required
        />
        <input name="movieId" type="text" value={movieId} hidden readOnly />
        <div className={style.submit_container}>
          <input
            name="author"
            type="text"
            placeholder="작성자"
            disabled={isPending}
            required
          />
          <button type="submit" disabled={isPending}>
            {isPending ? "..." : "작성하기"}
          </button>
        </div>
      </form>
    </section>
  );
}
