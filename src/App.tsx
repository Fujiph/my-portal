import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import GlobalTextStyle from './styles/fontStyles';
import GlobalStyles from './styles/globalStyles';

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
      <GlobalTextStyle />
      <GlobalStyles />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
