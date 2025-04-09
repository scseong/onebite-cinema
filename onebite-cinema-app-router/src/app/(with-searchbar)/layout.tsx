import { PropsWithChildren, Suspense } from "react";
import SearchBar from "./search/_components/searchbar";

export default function layout({ children }: PropsWithChildren) {
  return (
    <>
      <div>
        <Suspense>
          <SearchBar />
        </Suspense>
      </div>
      {children}
    </>
  );
}
