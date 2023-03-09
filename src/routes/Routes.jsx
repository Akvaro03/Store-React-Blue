import {
  createBrowserRouter,
} from "react-router-dom";

import Home from "../pages/home/home";
import Products from "../pages/productsUi";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Products",
    element: <Products />,
  }
]);
