import React from "react";
import { Home } from "../screens/Home";
import { About } from "../screens/About";
import { Error } from "../screens/Error";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Housing } from "../screens/Housing";
import { RouteWrapper } from "./RouteWrapper";

export const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <RouteWrapper>
          <Home />
        </RouteWrapper>
      ),
    },
    {
      path: "/about",
      element: (
        <RouteWrapper>
          <About />
        </RouteWrapper>
      ),
    },
    {
      path: "/housing",
      element: (
        <RouteWrapper>
          <Housing />
        </RouteWrapper>
      ),
    },
    {
      path: "*",
      element: <Error />,
    },
  ]);

  return <RouterProvider router={router} />;
};
