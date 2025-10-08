import { createBrowserRouter } from "react-router";
import Main from "../components/main";
import Home from "../pages/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export default router;
