import ReviewItem from "@/app/(with-searchbar)/search/_components/review-item";
import fetchReviews from "@/apis/fetch-reviews";

export default async function ReviewList({ movieId }: { movieId: string }) {
  const reviews = await fetchReviews(movieId);

  return (
    <section style={{ marginTop: "56px" }}>
      <ul>
        {reviews.map((review) => (
          <ReviewItem key={`revie-item-${review.id}`} {...review} />
        ))}
      </ul>
    </section>
  );
}
