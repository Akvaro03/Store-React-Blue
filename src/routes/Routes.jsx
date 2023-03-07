import {
  createBrowserRouter,
} from "react-router-dom";

import Home from "../pages/home/home";
import Navbar from "../components/navbar/Navbar";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/nose",
    element: <Navbar />,
  }
],{basename: "/store-react-blue"});
