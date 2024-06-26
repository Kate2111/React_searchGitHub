import { Repository } from "@type/api";
import { makeAutoObservable } from "mobx";

class Favorite {
  favorite: Repository[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  addFavoriteRep = (rep: Repository) => {
    const isExist = this.favorite.some(
      (favoriteRep) => favoriteRep.id === rep.id
    );

    if (!isExist) {
      this.favorite.push(rep);
    }
  };
}

const favoriteStore = new Favorite();
export default favoriteStore;
