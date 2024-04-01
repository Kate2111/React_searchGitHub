import MyInput from "@components/UI/MyInput";
import { FC, useEffect, useState } from "react";
import style from "./index.module.scss";
import { useDebounce } from "@hooks/useDebaunse";
import gitStore from "@store/gitStore";
import CopyToClipboard from "@components/CopyToClipboard";

const Search: FC = () => {
  const { fetchReps } = gitStore;
  const [value, setValue] = useState<string>("");
  const debouncedSearchTerm = useDebounce(value, 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      fetchReps(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm]);

  return (
    <div className={style.search}>
      <MyInput
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <CopyToClipboard text={debouncedSearchTerm} />
    </div>
  );
};

export default Search;
