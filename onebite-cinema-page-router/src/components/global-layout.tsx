import Link from "next/link";
import type { PropsWithChildren } from "react";
import style from "./global-layout.module.scss";

export default function GlobalLayout({ children }: PropsWithChildren) {
  return (
    <div className={style.container}>
      <header>
        <h1>
          <Link href="/">ONEBITE CINEMA</Link>
        </h1>
      </header>
      <main>{children}</main>
      <footer>© 2025 ONEBITE CINEMA. All rights reserved.</footer>
    </div>
  );
}
