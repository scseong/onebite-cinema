"use client";

import { PropsWithChildren, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import style from "./modal.module.scss";

export default function Modal({ children }: PropsWithChildren) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
      dialogRef.current?.scrollTo({
        top: 0,
      });
    }
  }, []);

  return createPortal(
    <dialog ref={dialogRef}>{children}</dialog>,
    document.getElementById("modal-root") as HTMLElement
  );
}
