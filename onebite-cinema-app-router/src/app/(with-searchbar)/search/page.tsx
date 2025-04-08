export default async function Search({ searchParams }: NextPage) {
  const { q } = await searchParams;

  return (
    <section>
      <h2>검색 결과: {q}</h2>
    </section>
  );
}
