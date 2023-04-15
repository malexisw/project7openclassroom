import React from "react";

export const Tag = ({ tagLabel }) => {
  return (
    <button type="button" className="tag-container bgMain">
      <p className="tag-text">{tagLabel}</p>
    </button>
  );
};
