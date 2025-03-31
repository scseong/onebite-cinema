import SearchableLayout from "@/components/searchable-layout";

export default function Home() {
  return (
    <div>
      <h1>ONEBITE CINEMA</h1>
    </div>
  );
}

Home.getLayout = (page: React.ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
