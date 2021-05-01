import React from "react";
import GuestSidebar from "../GuestSidebar/GuestSidebar";
import "../../Home/Home.css";
import { Button } from "../../Home/Button";
import "./GDashboard.css";

/**
 * @author
 * @function GDashboard
 **/

const GDashboard = () => {
  /****************************
   * EVENT HANDLERS
   ***************************/

  /****************************
   * RENDERER
   ***************************/
  return (
    <>
      <GuestSidebar />

      {}
      {/* <div className="info"> */}
      <div className="pl-10px">
        <div className="guest-upper-container">
          <h1>MY DASHBOARD</h1>

          <div className="guest-upper-btns">
            <Button
              className="btns"
              buttonStyle="btn--outline"
              buttonSize="btn--large"
            >
              SEARCH FOR PLACES
            </Button>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};
export default GDashboard;
