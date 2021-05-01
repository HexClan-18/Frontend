import React from "react";
import "./Home.css";
import { Button } from "./Button";
import "./UpperSection.css";

function UpperSection() {
  return (
    <div className="upper-container">
      <h1>WELCOME TO BOARD-ME-IN</h1>
      <p> Searching for a place OR hoping to rent-out your place?</p>
      <div className="upper-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED HERE
        </Button>
        {/* <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          onClick={console.log("hey")}
        >
          WATCH TRAILER <i className="far fa-play-circle" />
        </Button> */}
      </div>
    </div>
  );
}

export default UpperSection;
