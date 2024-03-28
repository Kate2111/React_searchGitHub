import { FC } from "react";
import { observer } from "mobx-react-lite";
import Repositories from "@modules/Repositories";
import Search from "@modules/Search";
import Favorite from "@modules/Favorite";

const MainPage: FC = observer(() => {
  return (
    <main>
      <Search />

      <div className="wrapper">
        <Repositories />
        <Favorite />
      </div>
    </main>
  );
});

export default MainPage;
