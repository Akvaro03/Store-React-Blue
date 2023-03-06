import {
  createBrowserRouter,
} from "react-router-dom";
import Home from "../pages/home/home";

export const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);
