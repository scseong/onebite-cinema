import type { AppProps } from "next/app";
import GlobalLayout from "@/components/global-layout";
import "@/styles/globals.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GlobalLayout>
      <Component {...pageProps} />
    </GlobalLayout>
  );
}
