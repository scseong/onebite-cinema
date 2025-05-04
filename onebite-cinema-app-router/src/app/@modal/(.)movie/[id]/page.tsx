import Modal from "@/app/_components/modal";
import MoviePage from "@/app/movie/[id]/page";

export default function Page(props: any) {
  return (
    <Modal>
      <MoviePage {...props} />
    </Modal>
  );
}
