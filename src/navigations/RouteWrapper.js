import React from "react";
import { Footer } from "../components/footer/Footer";
import { Header } from "../components/header/Header";

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
