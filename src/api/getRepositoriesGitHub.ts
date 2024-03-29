import { ResponseGitHub } from "@type/api";
import axios, { CancelTokenSource } from "axios";
let cancelToken: CancelTokenSource;

export const getRepositoriesGitHub = async (
  searchQuery: string
): Promise<ResponseGitHub> => {
  if (typeof cancelToken != typeof undefined) {
    cancelToken.cancel("Операция отменена из-за нового запроса.");
  }

  cancelToken = axios.CancelToken.source();

  return (
    await axios.get<ResponseGitHub>(
      `https://api.github.com/search/repositories?q=${searchQuery}`
    )
  ).data;
};
