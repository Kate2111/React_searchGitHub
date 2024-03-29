import MyButton from "@components/UI/MyButton";
import { AppRoutes } from "@router/routes";
import { Repository } from "@type/api";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import style from "./index.module.scss";
import favoriteStore from "@store/favoriteStore";
import { toJS } from "mobx";
import gitStore from "@store/gitStore";
import Avatar from "@components/UI/Avatar";

interface CartRepositoryProps {
  rep: Repository;
}

const CartRepository: FC<CartRepositoryProps> = ({ rep }) => {
  const { addFavoriteRep } = favoriteStore;
  const { setAcriveRep } = gitStore;
  const navigate = useNavigate();

  const showMore = () => {
    setAcriveRep(toJS(rep));
    navigate(AppRoutes.details);
  };

  const addFavorite = () => {
    addFavoriteRep(toJS(rep));
  };

  return (
    <li className={style.cart} onClick={addFavorite}>
      <div className={style.wrapper}>
        <Avatar href={rep.owner.avatar_url} title={rep.name} />

        <div className={style.wrapperInfo}>
          <span>
            Link:{" "}
            <a
              href={rep.clone_url}
              target="_blank"
              rel="noopener noreferrer"
              className={style.link}
            >
              {rep.full_name}
            </a>
          </span>
          <span>Stars: {rep.stargazers_count}</span>
          <span>Forks: {rep.forks_count}</span>
        </div>
      </div>

      <MyButton onClick={showMore}>Подробнее</MyButton>
    </li>
  );
};

export default CartRepository;
