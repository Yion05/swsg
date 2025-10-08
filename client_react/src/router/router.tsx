import { createBrowserRouter } from "react-router";
import Main from "../components/main";
import Home from "../pages/home";
import Service from "../pages/service";
import About from "../pages/about";
import Resources from "../pages/resources";
import Partnership from "../pages/partnership";
import Contact from "../pages/contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/service",
        element: <Service />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/resources",
        element: <Resources />,
      },
      {
        path: "/partnership",
        element: <Partnership />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

export default router;
