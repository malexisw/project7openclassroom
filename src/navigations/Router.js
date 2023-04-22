import React from "react";
import { Home } from "../screens/home/Home";
import { About } from "../screens/about/About";
import { Error } from "../screens/error/Error";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Housing } from "../screens/housing/Housing";
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
      path: "/housing/:id",
      element: (
        <RouteWrapper>
          <Housing />
        </RouteWrapper>
      ),
    },
    {
      path: "*",
      element: (
        <RouteWrapper>
          <Error />
        </RouteWrapper>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
};
