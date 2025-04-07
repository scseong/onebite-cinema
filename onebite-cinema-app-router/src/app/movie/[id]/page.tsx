export default async function MovieDetail({ params }: NextPage) {
  const { id } = await params;
  return (
    <section>
      <h2>ID: {id}</h2>
    </section>
  );
}
