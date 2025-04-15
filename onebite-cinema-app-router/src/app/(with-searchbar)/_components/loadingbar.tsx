import style from "./loadingbar.module.scss";

export default function LoadingBar() {
  return (
    <div className={style.wrap}>
      <div className={style.loader}></div>
    </div>
  );
}
