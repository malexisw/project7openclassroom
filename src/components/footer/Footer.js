import React from "react";
import logoF from "../assets/svg/logo/logo_f.svg";

export const Footer = () => {
  return (
    <footer className="flexColumn flexCenteredAlign" >
      <img className="fit-picture" src={logoF} alt="Logo Kasa" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
};
