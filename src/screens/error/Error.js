import React from "react";
import { Link } from "react-router-dom";

export const Error = () => {
  return (
    <section className="error-container">
      <div className="flexCenteredAlign flexColumn error-content">
        <div className="flexCenteredAlign flexColumn">
          <h1 className="textColoured error-title">404</h1>
          <h3 className="textColoured error-text">
            Oups! La page que vous demandez n'existe pas.
          </h3>
        </div>
        <p className="textColoured active error-link">
          <Link to={"/"}>Retourner sur la page d’accueil</Link>
        </p>
      </div>
    </section>
  );
};
