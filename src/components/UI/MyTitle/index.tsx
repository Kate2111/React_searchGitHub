import { FC } from "react";
import style from "./index.module.scss";

interface MyTitleProps {
  title: string;
}

const MyTitle: FC<MyTitleProps> = ({ title }) => {
  return <h2 className={style.title}>{title}</h2>;
};

export default MyTitle;
