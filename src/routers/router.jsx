import { createBrowserRouter } from "react-router-dom";
import BaseLayout from "../components/BaseLayout";
import Home from "../pages/Home";
import About from "../pages/About";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <BaseLayout />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);


