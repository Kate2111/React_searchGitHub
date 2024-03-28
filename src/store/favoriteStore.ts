import { Repository } from "@type/api";
import { makeAutoObservable } from "mobx";

class Favorite {
  favorite: Repository[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  addFavoriteRep = (rep: Repository) => {
    console.log(rep);
    this.favorite.push(rep);
  };
}

const favoriteStore = new Favorite();
export default favoriteStore;
