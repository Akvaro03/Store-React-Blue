import {
  createBrowserRouter,
} from "react-router-dom";

import Home from "../pages/home/home";
import ProductsUi from "../pages/productsUi";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/products",
    element: <ProductsUi />,

  }
]);
