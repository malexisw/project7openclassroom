import React from "react";
import logo from "../../assets/svg/logo/logo.svg";
import { Link, useLocation } from "react-router-dom";

export const Header = () => {
  const location = useLocation();

  return (
    <header className="flexRow">
      <img className="fit-picture" src={logo} alt="Logo Kasa" />
      <nav>
        <ul className="flexRow navLink textColoured">
          <li>
            <Link className={location.pathname === "/" ? "active" : "inactive"} to={"/"}>Accueil</Link>
          </li>
          <li>
            <Link className={location.pathname === "/about" ? "active" : "inactive"} to={"/about"}>A propos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
