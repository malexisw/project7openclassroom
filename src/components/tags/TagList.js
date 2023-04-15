import React from "react";
import { Tag } from "./Tag";

export const TagList = ({ textArray }) => {
  return (
    <ul className="flexRow">
      {textArray.map((text, index) => (
        <li className="tag-list" key={index}>
          <Tag tagLabel={text} />
        </li>
      ))}
    </ul>
  );
};
