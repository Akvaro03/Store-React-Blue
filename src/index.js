import React from 'react';
import { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {store} from './store/store'
import { collection, onSnapshot } from "firebase/firestore";
import { db } from './hooks/db';
import { getStorage, ref } from "firebase/storage";

const Home = lazy(() => import('./pages/home/home'));
const ProductsUi = lazy(() => import('./pages/productsUi'));
// import { router } from './routes/Routes';

// Get a reference to the storage service, which is used to create references in your storage bucket
const storage = getStorage();

// Create a storage reference from our storage service
const storageRef = ref(storage, "imgProducts");
const spaceRef = ref(storageRef, "productDoll.png");

console.log(spaceRef)
console.log("first")


const unsub = onSnapshot(collection(db, "products"), (doc) => {
  doc.forEach(doc => console.log(doc.data()))
});

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
    <Suspense fallback={<h3>We are loading magic</h3>}>
      <Provider store={store}>
        <RouterProvider router={router} fallbackElement={<p>asdas</p>}/>
      </Provider>
    </Suspense>
  </React.StrictMode>
);

