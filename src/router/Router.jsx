import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import ErrorPage from "../components/Error/ErrorPage";
import Root from "../components/Home/Root";
import ExploreUs from "../components/Others/ExploreUs/ExploreUs";
import ITStrategy from "../components/Others/Solutions/IT/ITStrategy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Root />,
      },
      {
        path: "/explore",
        element: <ExploreUs />,
      },
      {
        path: "/IT-Strategy",
        element: <ITStrategy></ITStrategy>,
      },
    ],
  },
]);

export default router;
