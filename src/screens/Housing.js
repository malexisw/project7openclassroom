import React from "react";
import { useLocation } from "react-router-dom";
import { TagList } from "../components/tags/TagList";
import { ListInputOption } from "../components/inputs/ListInputOption";
import { TextInputOption } from "../components/inputs/TextInputOption";
import starOrange from "../assets/svg/stars/star_rate_orange.svg";
import starGray from "../assets/svg/stars/star_rate_gray.svg";
import { Gallery } from "../components/gallery/Gallery";

export const Housing = () => {
  const location = useLocation();
  const housing = location.state.from;

  const starRender = () => {
    let result = [];
    for (let i = 0; i < 5; i++) {
      if (housing.rating <= i) {
        result.push(
          <img
            className="star-pic"
            key={i}
            src={starGray}
            alt="Star gray rate logo"
          />
        );
      } else {
        result.push(
          <img
            className="star-pic"
            key={i}
            src={starOrange}
            alt="Star orange rate logo"
          />
        );
      }
    }
    return result;
  };

  return (
    <section>
      <Gallery pictures={housing.pictures} />
      <div className="housing-info">
        <div>
          <div>
            <h1 className="housing-title textColoured">{housing.title}</h1>
            <h3 className="housing-location textColoured">
              {housing.location}
            </h3>
          </div>
          <div className="housing-tagList">
            <TagList textArray={housing.tags} />
          </div>
        </div>

        <div className="housing-tags-note">
          <div className="flexRow flexCenteredAlign host-info">
            <h3 className="textColoured host-name">{housing.host.name}</h3>
            <img
              className="host-pic"
              src={housing.host.picture}
              alt="Host picture"
            />
          </div>
          <div className="star-container">{starRender()}</div>
        </div>
      </div>

      <div className="inline-inputs">
        <div className="housing-input">
          <TextInputOption title="Description" text={housing.description} />
        </div>
        <div className="housing-input">
          <ListInputOption
            title="Équipements"
            listOption={housing.equipments}
          />
        </div>
      </div>
    </section>
  );
};
