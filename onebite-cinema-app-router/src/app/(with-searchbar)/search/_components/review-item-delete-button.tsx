"use client";

import { useActionState } from "react";
import deleteReviewAction from "@/actions/delete-review.action";

export default function ReviewItemDeleteButton({
  reviewId,
  movieId,
}: {
  reviewId: string;
  movieId: string;
}) {
  const [state, formAction, isPending] = useActionState(
    deleteReviewAction,
    null
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const confirmed = confirm("정말로 삭제하시겠습니까?");
    if (confirmed) e.currentTarget.requestSubmit();
    else e.preventDefault();
  };

  return (
    <form action={formAction} onSubmit={handleSubmit}>
      <input type="text" name="reviewId" value={reviewId} hidden readOnly />
      <input type="text" name="movieId" value={movieId} hidden readOnly />
      <button type="submit" disabled={isPending}>
        삭제하기
      </button>
    </form>
  );
}
