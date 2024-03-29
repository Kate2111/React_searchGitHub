import { FC } from "react";
import style from "./index.module.scss";

interface AvatarProps {
  href: string;
  title: string;
}

const Avatar: FC<AvatarProps> = ({ href, title }) => {
  return <img src={href} alt={title} className={style.logo} />;
};

export default Avatar;
