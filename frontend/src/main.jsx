import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Home from "./pages/Home";
import Continent from "./pages/Continent";
import Country from "./pages/Country";
import Meals from "./pages/Meals";
import {
  countries,
  countriesDetailed,
  fetchByArea,
  fetchById,
} from "./pages/helpers";

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
        loader: async ({ params }) => {
          const dishes = await fetchByArea(params.CountryApi);
          const dishesDetailed = await Promise.all(
            dishes.map((ele) => {
              return fetchById(ele.idMeal);
            })
          );
          dishesDetailed.forEach((ele, i) => {
            dishes[i].strCategory = ele.strCategory;
          });
          return {
            country: countries.find(
              (ele) => ele.CountryApi === params.CountryApi
            ),
            countryDishes: dishes,
          };
        },
      },
      {
        path: "/meals/:id",
        element: <Meals />,
        loader: async ({ params }) => fetchById(params.id),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router} />);
