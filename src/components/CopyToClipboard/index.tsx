import { FC, useState } from "react";
import clipboardCopy from "clipboard-copy";
import MyButton from "@components/UI/MyButton";

interface CopyToClipboardProps {
  text: string;
}
const CopyToClipboard: FC<CopyToClipboardProps> = ({ text }) => {
  const [buttonText, setButtonText] = useState("Copy");

  const handleCopy = () => {
    clipboardCopy(text).then(() => {
      setButtonText("Copied");
      setTimeout(() => setButtonText("Copy"), 2000);
    });
  };

  return <MyButton onClick={handleCopy}>{buttonText}</MyButton>;
};

export default CopyToClipboard;
