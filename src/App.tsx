import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: (
        <Home />
      )
    },
    {
      path: "not-found",
      element: (
        <NotFound />
      )
    }
  ]
)

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
