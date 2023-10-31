import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Map from "./pages/Map";
import Nav from "./pages/Nav";
import Footer from "./pages/Footer";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Map />,
      },
      {
        path: "/about",
        element: <Nav />,
      },
      {
        path: "/footer",
        element: <Footer />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router} />);
