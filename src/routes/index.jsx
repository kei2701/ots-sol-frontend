import { useRoutes } from "react-router-dom";
import MyExamsPage from "../pages/MyExamsPage";
import UserLayout from "../layouts/UserLayout";
import HomePage from "../pages/HomePage";
import HistoryPage from "../pages/HistoryPage";
import RankingPage from "../pages/RankingPage";

function Router() {
  return useRoutes([
    {
      path: "/",
      element: <UserLayout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "/my-exams",
          element: <MyExamsPage />,
        },
        {
          path: "/home",
          element: <HomePage />,
        },
        {
          path: "/history",
          element: <HistoryPage />,
        },
        {
          path: "/ranking",
          element: <RankingPage />,
        },
      ],
    },
  ]);
}

export default Router;
