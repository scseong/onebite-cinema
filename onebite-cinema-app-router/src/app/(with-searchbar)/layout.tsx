import { PropsWithChildren } from "react";

export default function layout({ children }: PropsWithChildren) {
  return (
    <section>
      <div>서치바 레이아웃</div>
      {children}
    </section>
  );
}
