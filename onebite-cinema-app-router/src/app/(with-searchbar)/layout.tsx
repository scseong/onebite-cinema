import { PropsWithChildren } from "react";
import SearchBar from "./search/_components/searchbar";

export default function layout({ children }: PropsWithChildren) {
  return (
    <>
      <div>
        <SearchBar />
      </div>
      {children}
    </>
  );
}
