import { PropsWithChildren } from "react";

export default function SearchableLayout({ children }: PropsWithChildren) {
  return (
    <div>
      <div>
        <input type="search" placeholder="검색어를 입력하세요 ..." />
        <button>검색</button>
      </div>
      {children}
    </div>
  );
}
