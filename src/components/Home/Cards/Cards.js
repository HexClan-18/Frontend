// import React from "react";
import React from "react";

import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <>
      <div className="cards">
        <h1>Choose your category</h1>
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              <CardItem
                src="Media/Single.jpg"
                text="Seperate spaces with amenities"
                label="Single Rooms"
                path="#"
              />
              <CardItem
                src="Media/Shared.jpg"
                text="Spaces with shared amenities"
                label="Shared Rooms"
                path="#"
              />
              <CardItem
                src="Media/House.jpeg"
                text="Houses, anexes and apartments with multiple amenities"
                label="Houses/ Apartments"
                path="#"
              />
            </ul>
            <h1>Choose your destination</h1>
            <i className="fa fa-snowflake-o" aria-hidden="true"></i>
            <ul className="cards__items">
              {/* <CardItem
                src="Media/Anuradhapura.jpg"
                text="12 Places "
                label="Anuradhapura"
                path="#"
              /> */}
              <CardItem
                src="Media/Kalutara.jpg"
                text="12 Places"
                label="Kalutara"
                path="#"
              />
              <CardItem
                src="Media/Colombo.jpg"
                text="12 Places"
                label="Colombo"
                path="#"
              />
              <CardItem
                src="Media/Galle.jpg"
                text="12 Places"
                label="Galle"
                path="#"
              />
              <CardItem
                src="Media/Kandy.jpg"
                text="12 Places"
                label="Kandy"
                path="#"
              />
            </ul>
            {/* <ul className="cards__items">
              <CardItem
                src="Media/Jaffna.jpg"
                text="12 Places"
                label="Jaffna"
                path="#"
              />
              <CardItem
                src="Media/NuwaraEliya.jpg"
                text="12 Places"
                label="NuwaraEliya"
                path="#"
              />
            </ul> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
