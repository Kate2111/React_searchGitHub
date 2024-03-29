import { FC, ReactNode } from "react";
import classes from "./index.module.scss";

interface MyButtonProps {
  children: ReactNode;
  onClick?: () => void;
}
const MyButton: FC<MyButtonProps> = ({ children, onClick, ...props }) => {
  return (
    <button className={classes.button} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default MyButton;
