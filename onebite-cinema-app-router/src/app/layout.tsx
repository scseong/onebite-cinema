import Link from "next/link";
import { PropsWithChildren } from "react";
import "./globals.scss";
import style from "./layout.module.scss";

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <html lang="ko">
      <body>
        <div className={style.container}>
          <header>
            <h1>
              <Link href="/" aria-label="홈으로 이동">
                ONEBITE CINEMA
              </Link>
            </h1>
          </header>
          <main>{children}</main>
          <footer>© 2025 ONEBITE CINEMA. All rights reserved.</footer>
        </div>
        <div id="modal-root"></div>
      </body>
    </html>
  );
}
