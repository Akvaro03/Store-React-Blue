import React from 'react';
import { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Footer from './components/footer';
import ProgressCircle from './components/progressCircle';
// import MiniNavbar from './components/miniNavbar';
// import Navbar from './components/navbar/Navbar';
import { store } from './store/store'
const ProductOnly = lazy(() => import('./pages/productUi'));
const Home = lazy(() => import('./pages/home/home'));
const ProductsUi = lazy(() => import('./pages/AllproductsUi'));


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/products",
    element: <ProductsUi />,
  },
  {
    path: "/:id",
    element: <ProductOnly />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Suspense fallback={<ProgressCircle />}>
      <Provider store={store}>
        <RouterProvider router={router} fallbackElement={<p>asdas</p>} />
      </Provider>
      <Footer />
    </Suspense>
  </React.StrictMode>
);