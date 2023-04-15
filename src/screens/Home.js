import React, { useState, useEffect } from "react";
import { Header } from "../components/Header";
import { Card } from "../components/card/Card";

export const Home = () => {
  const [housings, setHousings] = useState([]);

  useEffect(() => {
    const data = require("../api/logements.json");
    setHousings(data);
    console.log(data);
  }, [setHousings]);

  return (
    <div>
      <Header />
      <div className="home-banner flexCenteredAlign banner ">
        <div className="filter"></div>
        <p>Chez vous, partout et ailleurs</p>
      </div>

      <div className="flexRow flexCenteredAlign card-section">
        {housings.map((housing) => (
          <Card housing={housing} key={housing.id} />
        ))}
      </div>
    </div>
  );
};
