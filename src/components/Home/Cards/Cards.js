import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
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
          <i class="fa fa-snowflake-o" aria-hidden="true"></i>
          <ul className="cards__items">
            <CardItem
              src="Media/Anuradhapura.jpg"
              text="Find places from Anuradhapura, the "
              label="Anuradhapura"
              path="#"
            />
            <CardItem
              src="Media/Badulla.jpeg"
              text="Find places from Badulla, the hillsides"
              label="Badulla"
              path="#"
            />
            <CardItem
              src="Media/Colombo.jpg"
              text="Explore around Colombo, the Commercial Capital"
              label="Colombo"
              path="#"
            />
            <CardItem
              src="Media/Galle.jpg"
              text="Explore in Galle, the fortified city"
              label="Galle"
              path="#"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="Media/Jaffna.jpg"
              text="Explore in Jaffna, the city"
              label="Jaffna"
              path="#"
            />
            <CardItem
              src="Media/Kalutara.jpg"
              text="Make stay near Kalutara, the administrative capital"
              label="Kalutara"
              path="#"
            />
            <CardItem
              src="Media/Kandy.jpg"
              text="Find stays from Kandy, the most sacred city"
              label="Kandy"
              path="#"
            />

            <CardItem
              src="Media/NuwaraEliya.jpg"
              text="Explore in NuwaraEliya, the mesmerizing city"
              label="NuwaraEliya"
              path="#"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
