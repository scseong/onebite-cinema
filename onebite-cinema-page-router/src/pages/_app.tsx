import { NextPage } from "next";
import type { AppProps } from "next/app";
import { ReactNode } from "react";
import GlobalLayout from "@/components/global-layout";
import "@/styles/globals.scss";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactNode) => ReactNode;
};

export default function App({
  Component,
  pageProps,
}: AppProps & { Component: NextPageWithLayout }) {
  const getLayout = Component.getLayout ?? ((page: React.ReactNode) => page);

  return <GlobalLayout>{getLayout(<Component {...pageProps} />)}</GlobalLayout>;
}
