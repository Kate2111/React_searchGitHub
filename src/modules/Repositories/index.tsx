import ListRepositories from "@components/ListRepositories";
import MySpiner from "@components/UI/MySpiner";
import gitStore from "@store/gitStore";
import { observer } from "mobx-react-lite";
import { FC } from "react";

const Repositories: FC = observer(() => {
  const { isLoading, repositories } = gitStore;

  return (
    <>
      {isLoading ? (
        <MySpiner />
      ) : (
        <ListRepositories repsList={repositories} title="Список репозиториев" />
      )}
    </>
  );
});

export default Repositories;
