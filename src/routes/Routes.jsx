import {
  createHashRouter,
} from "react-router-dom";

import Home from "../pages/home/home";
import Navbar from "../components/navbar/Navbar";

export const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "team",
        element: <Navbar />,
      },
    ],
  },
],{basename: "/store-react-blue"});
