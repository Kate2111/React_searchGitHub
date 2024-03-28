import { ResponseGitHub } from "@type/api";
import axios from "axios";

export const getRepositoriesGitHub = async (
  searchQuery: string
): Promise<ResponseGitHub> =>
  (
    await axios.get<ResponseGitHub>(
      `https://api.github.com/search/repositories?q=${searchQuery}`
    )
  ).data;
