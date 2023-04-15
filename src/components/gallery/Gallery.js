import React, { createRef, useState } from "react";
import chevronGallery from "../../assets/svg/chevron-gallery.svg";

export const Gallery = ({ pictures }) => {
  const galleryRef = createRef();
  const [x, setX] = useState(0);

  const slideLeft = () => {
    const sizeImg = galleryRef.current.offsetWidth / pictures.length;

    if (x !== 0) {
      setX(x + sizeImg);
    } else {
      setX(-sizeImg * (pictures.length - 1));
    }
  };

  const slideRight = () => {
    const sizeImg = galleryRef.current.offsetWidth / pictures.length;

    if (x >= -sizeImg * (pictures.length - 2)) {
      setX(x - sizeImg);
    } else {
      setX(0);
    }
  };

  return (
    <div className="gallery">
      <div
        className="flexRow gallery-banner"
        style={{ width: pictures.length + "00%" }}
      >
        {pictures.length > 0 && (
          <img
            className="gallery-chevron left"
            src={chevronGallery}
            alt="Logo Kasa"
            onClick={() => slideLeft()}
          />
        )}
        <div
          className="flexRow gallery-content"
          ref={galleryRef}
          style={{ transform: `translateX(${x}px)` }}
        >
          {pictures.map((picture, index) => (
            <img
              src={picture}
              key={index}
              className="gallery-pic"
              alt="Gallery picture"
            />
          ))}
        </div>
        {pictures.length > 0 && (
          <img
            className="gallery-chevron right"
            src={chevronGallery}
            alt="Logo Kasa"
            onClick={() => slideRight()}
          />
        )}
      </div>
    </div>
  );
};
