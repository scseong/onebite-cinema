import { PropsWithChildren, Suspense } from "react";
import SearchBar from "./search/_components/searchbar";
import SearchbarFallback from "./search/_components/searchbar-fallback";

export default function layout({ children }: PropsWithChildren) {
  return (
    <>
      <div>
        <Suspense fallback={<SearchbarFallback />}>
          <SearchBar />
        </Suspense>
      </div>
      {children}
    </>
  );
}
