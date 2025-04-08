"use client";

import Form from "next/form";
import { useSearchParams } from "next/navigation";
import SearchButton from "./search-button";

export default function SearchBar() {
  const searchParams = useSearchParams();
  const q = searchParams.get("q") ?? "";

  return (
    <Form action="/search" role="search">
      <input
        id="search-input"
        defaultValue={q}
        name="q"
        placeholder="검색어를 입력하세요 ..."
        required
      />
      <SearchButton />
    </Form>
  );
}
