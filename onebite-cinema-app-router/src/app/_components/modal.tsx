"use client";

import { useRouter } from "next/navigation";
import { PropsWithChildren, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import useScrollLock from "@/hooks/useScrollLock";
import style from "./modal.module.scss";

export default function Modal({ children }: PropsWithChildren) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const router = useRouter();

  useScrollLock();

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
      dialogRef.current?.scrollTo({
        top: 0,
      });
    }
  }, []);

  return createPortal(
    <dialog
      className={style.modal}
      ref={dialogRef}
      onClose={() => router.back()}
      onClick={(e) => {
        if ((e.target as any).nodeName === "DIALOG") {
          router.back();
        }
      }}
    >
      {children}
    </dialog>,
    document.getElementById("modal-root") as HTMLElement
  );
}
