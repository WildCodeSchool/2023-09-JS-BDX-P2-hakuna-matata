import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Map from "./pages/Map";
import Continent from "./pages/Continent";
import Country from "./pages/Country";
import Meal from "./pages/Meal";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Map />,
      },
      {
        path: "/continent/:continent",
        element: <Continent />,
      },
      {
        path: "/country/:id",
        element: <Country />,
      },
      {
        path: "/meals/:id",
        element: <Meal />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router} />);
