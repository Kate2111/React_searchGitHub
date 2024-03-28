import { ChangeEvent, FC } from "react";
import style from "./MyInput.module.scss";

interface MyInputProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const MyInput: FC<MyInputProps> = ({ value, onChange, placeholder }) => {
  return (
    <input
      className={style.input}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default MyInput;
