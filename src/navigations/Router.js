import React from "react";
import { Home } from "../screens/Home";
import { About } from "../screens/About";
import { Error } from "../screens/Error";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Housing } from "../screens/Housing";

export const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/housing",
      element: <Housing />,
    },
    {
      path: "*",
      element: <Error />,
    },
  ]);

  return <RouterProvider router={router} />;
};
