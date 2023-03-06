import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import Home from "../pages/home/home";
import Navbar from "../components/navbar/Navbar";

export  const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar />} >
      <Route path="/store-react-blue" element={<Home />} />
      <Route path="/store-react-blue/navbar" element={<Navbar />} />
    </Route>
  ),{basename: "/store-react-blue"}
);

