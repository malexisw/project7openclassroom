import React, { useState } from "react";
import chevronGallery from "../../assets/svg/chevron-gallery.svg";

export const Gallery = ({ pictures }) => {
  const [slide, setSlide] = useState(0);

  const slideLeft = () => {
    //If it's not the first slide
    if (slide > 0) {
      setSlide(slide - 1);
    } else {
      setSlide(pictures.length - 1);
    }
  };

  const slideRight = () => {
    //If it's not the last slide
    if (slide < pictures.length - 1) {
      setSlide(slide + 1);
    } else {
      setSlide(0);
    }
  };
 
  return (
    <div className="gallery">
      <ul
        className="gallery-container"
        style={{ width: pictures.length + "00%" }}
      >
        {pictures.length > 1 && (
          <img
            className="gallery-chevron left"
            src={chevronGallery}
            alt="Logo Kasa"
            onClick={() => slideLeft()}
          />
        )}
        {pictures.length > 1 && (
          <img
            className="gallery-chevron right"
            src={chevronGallery}
            alt="Logo Kasa"
            onClick={() => slideRight()}
          />
        )}
        {pictures.map((picture, index) => (
          <li
            className="gallery-slide"
            key={index}
            style={{
              backgroundImage: "url(" + picture + ")",
              transform: "translateX(" + -slide * 100 + "%)",
            }}
          ></li>
        ))}
        <p className="gallery-slideNumber">{slide+1}/{pictures.length}</p>
      </ul>
    </div>
  );
};
