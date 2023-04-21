import React from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

export const RouteWrapper = ({children}) => {
  return (
    <div>
      <div className="app-padding">
        <Header />
        {children}
      </div>
      <Footer />
    </div>
  );
};
