import { useRoutes } from "react-router-dom";
import TestPage from "../pages/TestPage";

function Router() {
  return useRoutes([
    {
      path: "/",
      children: [
        {
          path: "/test",
          element: <TestPage />,
        },
      ],
    },
  ]);
}

export default Router;
