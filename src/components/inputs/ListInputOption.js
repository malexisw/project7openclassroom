import React from "react";
import { InputOptionBase } from "./InputOptionBase";

export const ListInputOption = ({ listOption, title }) => {
  return (
    <InputOptionBase title={title}>
      <ul className="textColoured inputText">
        {listOption.map((option, index) => (
          <li key={index}>{option}</li>
        ))}
      </ul>
    </InputOptionBase>
  );
};
