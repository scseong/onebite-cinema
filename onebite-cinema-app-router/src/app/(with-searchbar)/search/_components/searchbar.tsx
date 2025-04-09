"use client";

import Form from "next/form";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import SearchButton from "./search-button";
import style from "./searchbar.module.scss";

export default function SearchBar() {
  const [search, setSearch] = useState("");
  const searchParams = useSearchParams();
  const q = searchParams.get("q") ?? "";

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    setSearch(q);

    return () => setSearch("");
  }, [q]);

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
