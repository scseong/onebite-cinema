"use client";

import Form from "next/form";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import SearchButton from "./search-button";
import CancelIcon from "../../../../../public/cancel.svg";
import style from "./searchbar.module.scss";

export default function SearchBar() {
  const [search, setSearch] = useState("");
  const searchParams = useSearchParams();
  const q = searchParams.get("q") ?? "";

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleClearButtonClick = () => {
    setSearch("");
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
          {search && (
            <button
              type="button"
              className={style.clear_btn}
              onClick={handleClearButtonClick}
            >
              <CancelIcon role="image" aria-label="검색어 초기화" />
            </button>
          )}
        </div>
        <SearchButton />
      </Form>
    </div>
  );
}
