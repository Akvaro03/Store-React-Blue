import React from 'react';
import { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProgressCircle from './components/progressCircle';
// import MiniNavbar from './components/miniNavbar';
// import Navbar from './components/navbar/Navbar';
import { store } from './store/store'
const Home = lazy(() => import('./pages/home/home'));
const ProductsUi = lazy(() => import('./pages/productsUi'));


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/products",
    element: <ProductsUi />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Suspense fallback={<ProgressCircle />}>
      <Provider store={store}>
        <RouterProvider router={router} fallbackElement={<p>asdas</p>} />
      </Provider>
    </Suspense>
  </React.StrictMode>
);