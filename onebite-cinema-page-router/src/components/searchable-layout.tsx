import { useRouter } from "next/router";
import { useState, useEffect, useRef, PropsWithChildren } from "react";
import CancelIcon from "../../public/cancel.svg";
import style from "./searchable-layout.module.scss";

export default function SearchableLayout({ children }: PropsWithChildren) {
  const [search, setSearch] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);
  const router = useRouter();
  const q = router.query.q as string;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleClearButtonClick = () => {
    setSearch("");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!search) {
      window.alert("검색어를 입력해주세요.");
      inputRef.current?.focus();
      return;
    }

    router.push(`/search?q=${search}`);
  };

  useEffect(() => {
    setSearch(q || "");
  }, [q]);

  return (
    <>
      <div>
        <form onSubmit={handleSubmit} role="search" className={style.form}>
          <div className={style.searchbox_container}>
            <input
              type="search"
              name="query"
              placeholder="검색어를 입력하세요 ..."
              aria-label="영화 제목으로 검색"
              value={search}
              onChange={handleInputChange}
              ref={inputRef}
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
          <button>검색</button>
        </form>
      </div>
      {children}
    </>
  );
}
