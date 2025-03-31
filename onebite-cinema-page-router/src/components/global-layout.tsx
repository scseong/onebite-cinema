import Link from "next/link";
import type { PropsWithChildren } from "react";
import style from "./global-layout.module.scss";

export default function GlobalLayout({ children }: PropsWithChildren) {
  return (
    <div className={style.container}>
      <header>
        <Link href="/">ONEBITE CINEMA</Link>
      </header>
      <main>{children}</main>
      <footer>© 2025 ONEBITE CINEMA. All rights reserved.</footer>
    </div>
  );
}
