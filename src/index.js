import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import MiniNavbar from './components/miniNavbar';
import Navbar from './components/navbar/Navbar';
import { router } from './routes/Routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <MiniNavbar />
    <RouterProvider router={router} />
  </React.StrictMode>
);

