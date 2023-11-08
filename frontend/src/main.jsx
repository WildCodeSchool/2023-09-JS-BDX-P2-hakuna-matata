import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Home from "./pages/Home";
import Continent from "./pages/Continent";
import Country from "./pages/Country";
import Meals from "./pages/Meals";
import { countries, countriesDetailed } from "./pages/helpers";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/continent/:continent",
        element: <Continent />,
        loader: ({ params }) => {
          return countriesDetailed.find(
            (ele) => ele.Continent.toLowerCase() === params.continent
          ).Countries;
        },
      },
      {
        path: "/country/:CountryApi",
        element: <Country />,
        loader: ({ params }) => {
          return countries.find((ele) => ele.CountryApi === params.CountryApi);
        },
      },
      {
        path: "/meals/:id",
        element: <Meals />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router} />);
