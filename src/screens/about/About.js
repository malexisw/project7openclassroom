import React, { useState, useEffect } from "react";
import { TextInputOption } from "../../components/inputs/TextInputOption";

export const About = () => {
  const [aboutData, setAboutData] = useState([]);

  useEffect(() => {
    //Set the datas from the API files
    const data = require("../../api/about.json");
    setAboutData(data);
  }, [setAboutData]);

  return (
    <div>
      <div className="about-banner banner flexCenteredAlign">
        <div className="filter"></div>
      </div>
      {aboutData.map((input, index) => (
        <div className="spaceAroundInput" key={index}>
          <TextInputOption
            title={input.title}
            text={input.text}
            key={index}
            wide
          />
        </div>
      ))}
    </div>
  );
};
