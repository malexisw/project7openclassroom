import React from "react";
import { Link } from "react-router-dom";

export const Card = ({ housing }) => {
  return (
    <Link
      to={"/housing/" + housing.id}
      state={{ from: housing }}
      className="card-container bgMain"
      style={{ backgroundImage: "url(" + housing.cover + ")" }}
    >
      <h3 className="card-title">{housing.title}</h3>
    </Link>
  );
};
