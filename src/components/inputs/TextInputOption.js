import React from "react";
import { InputOptionBase } from "./InputOptionBase";

export const TextInputOption = ({title, text, wide}) => {
  return (
    <InputOptionBase title={title} wide={wide}>
        <p className={wide ? "textColoured inputText wide-text" :"textColoured inputText" }>
          {text}
        </p>
    </InputOptionBase>
  );
};
