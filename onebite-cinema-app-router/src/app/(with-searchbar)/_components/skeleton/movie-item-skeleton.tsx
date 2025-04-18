import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import style from "./movie-item-skeleton.module.scss";

export default function MovieItemSkeleton() {
  return (
    <SkeletonTheme baseColor="#202020">
      <div className={style.container}>
        <Skeleton className={style.poster} />
        <div className={style.info}>
          <Skeleton className={style.title} />
          <Skeleton className={style.genre} />
        </div>
      </div>
    </SkeletonTheme>
  );
}
