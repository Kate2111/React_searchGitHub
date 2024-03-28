import CartRepository from "@components/CartRepository";
import { Repository } from "@type/api";
import { FC } from "react";
import style from "./index.module.scss";
import MyTitle from "@components/UI/MyTitle";
import { observer } from "mobx-react-lite";

interface ListRepositoriesProps {
  repsList: Repository[];
  title: string;
}
const ListRepositories: FC<ListRepositoriesProps> = observer(
  ({ repsList, title }) => {
    return (
      <div>
        {repsList.length > 0 && <MyTitle title={title} />}
        <ul className={style.list}>
          {repsList.map((rep) => (
            <CartRepository key={rep.id} rep={rep} />
          ))}
        </ul>
      </div>
    );
  }
);

export default ListRepositories;
