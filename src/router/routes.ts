import DetailPage from "@pages/DetailPage";
import MainPage from "@pages/MainPage";

export const AppRoutes = {
  root: "/React_searchGitHub",
  details: "/React_searchGitHub/detail",
};
interface RouteObject {
  path: string;
  element: React.ComponentType;
}

export const routes: RouteObject[] = [
  {
    path: AppRoutes.root,
    element: MainPage,
  },
  {
    path: AppRoutes.details,
    element: DetailPage,
  },
];
