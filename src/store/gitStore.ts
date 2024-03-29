import { getRepositoriesGitHub } from "@api/getRepositoriesGitHub";
import { Repository } from "@type/api";
import { makeAutoObservable, runInAction } from "mobx";

class GitStore {
  repositories: Repository[] = [];
  activeRepository: Repository | null = null;
  isLoading: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  setAcriveRep = (rep: Repository) => {
    this.activeRepository = rep;
  };

  fetchReps = async (searchQuery: string) => {
    try {
      this.isLoading = true;
      const { items } = await getRepositoriesGitHub(searchQuery);

      console.log(items);
      runInAction(() => {
        this.repositories = items;
        this.isLoading = false;
      });
    } catch (error) {
      console.error("Failed to fetch repositories", error);
      this.isLoading = false;
    }
  };
}

const gitStore = new GitStore();
export default gitStore;
