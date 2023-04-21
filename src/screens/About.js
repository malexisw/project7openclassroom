import React from "react";
import { TextInputOption } from "../components/inputs/TextInputOption";

export const About = () => {
  const dataInput = [
    {
      title: "Fiabilité",
      text: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    },
    {
      title: "Respect",
      text: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    },
    {
      title: "Service",
      text: "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
    },
    {
      title: "Sécurité",
      text: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    },
  ];

  return (
    <div>
      <div className="about-banner banner flexCenteredAlign">
        <div className="filter"></div>
      </div>
      {dataInput.map((input, index) => (
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
