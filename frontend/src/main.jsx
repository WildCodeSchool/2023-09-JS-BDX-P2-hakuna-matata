import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import SearchDishes from "./components/SearchDishes";
import SingleDish from "./components/SingleDish";
import SearchByIngredients from "./components/SearchByIngredients";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/search",
    element: <SearchDishes />,
  },
  {
    path: "/dishes/:id",
    element: <SingleDish />,
  },
  {
    path: "/ingredients",
    element: <SearchByIngredients />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
