import { FC } from "react";
import style from "./index.module.scss";

const MySpiner: FC = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.ring}></div>
      <div className={style.ring}></div>
      <div className={style.ring}></div>
      <div className={style.loading}>Loading...</div>
    </div>
  );
};

export default MySpiner;
