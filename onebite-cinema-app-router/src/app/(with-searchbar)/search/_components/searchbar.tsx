"use client";

import Form from "next/form";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import SearchButton from "./search-button";
import style from "./searchbar.module.scss";

function useInput(query: string) {
  const [search, setSearch] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    setSearch(query);
    return () => setSearch("");
  }, [query]);

  return { search, handleInputChange };
}

export function SearchInputForm({
  search,
  handleInputChange,
}: {
  search: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div>
      <Form action="/search" role="search" className={style.form}>
        <div className={style.searchbox_container}>
          <input
            id="search-input"
            value={search}
            onChange={handleInputChange}
            name="q"
            type="search"
            placeholder="검색어를 입력하세요 ..."
            required
          />
        </div>
        <SearchButton />
      </Form>
    </div>
  );
}

export default function SearchBarContainer() {
  const searchParams = useSearchParams();
  const q = searchParams.get("q") ?? "";
  const { search, handleInputChange } = useInput(q);

  return (
    <SearchInputForm search={search} handleInputChange={handleInputChange} />
  );
}
