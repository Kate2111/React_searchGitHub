import ListRepositories from "@components/ListRepositories";
import favoriteStore from "@store/favoriteStore";
import { observer } from "mobx-react-lite";
import { FC } from "react";

const Favorite: FC = observer(() => {
  const { favorite } = favoriteStore;

  return (
    <>
      <ListRepositories
        repsList={favorite}
        title="Список с избранными репозиториями"
      />
    </>
  );
});

export default Favorite;
