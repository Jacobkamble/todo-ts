import { createBrowserRouter, RouteObject } from "react-router-dom";
import Applayout from "./layout/applayout";
import Home from "./pages/home";

const routes: RouteObject[] = [
  {
    element: <Applayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
