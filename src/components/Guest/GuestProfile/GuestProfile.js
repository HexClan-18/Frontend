import React from "react";
import GuestSidebar from "../GuestSidebar/GuestSidebar";
import "./GuestProfile.css";

/**
 * @author
 * @function GuestProfile
 **/

const GuestProfile = () => {
  const showForm = () => (
    <form>
      <div className="form-group row">
        <label for="firstName" className="col-sm-2 col-form-label">
          Profile Picture
        </label>
      </div>
      <div className="form-group row pt-3">
        {/* <div className="col-sm-2"> */}
        <img
          className="user-dp-profile"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRerBR3bfynBVdF2gjoii3i_8yI4KOdK5_cxw&usqp=CAU"
          alt="dp"
        />{" "}
      </div>
      <label class="button btn btn-info" for="my-file-selector">
        <input id="my-file-selector" type="file" class="d-none" />
        Update Picture
      </label>
      <div className="form-group row mt-3">
        <h1 style={{ display: "inline" }}>
          {" "}
          <i>
            {" "}
            <b> Name </b>{" "}
          </i>{" "}
        </h1>
      </div>

      <div className="form-group row pt-3">
        <label for="firstName" className="col-sm-2 col-form-label">
          First Name
        </label>
        <div className="col-sm-10">
          <input
            type="firstName"
            className="form-control "
            id="firstName"
            placeholder="First Name"
          />
        </div>
      </div>
      <div className="wrapper">
        <div className="divider div-transparent"></div>
      </div>
      <div className="form-group row pt-3">
        <label for="lastName" className="col-sm-2 col-form-label">
          Last Name
        </label>
        <div className="col-sm-10">
          <input
            type="lastName"
            className="form-control"
            id="lastName"
            placeholder="Last Name"
          />
        </div>
      </div>
      <div className="wrapper">
        <div className="divider div-transparent"></div>
      </div>
      <div className="form-group row pt-3">
        <label for="firstName" className="col-sm-2 col-form-label">
          About
        </label>
        <div className="col-sm-10">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            cols="50"
            placeholder="About"
          ></textarea>
        </div>
      </div>
      <div className="wrapper">
        <div className="divider div-transparent"></div>
      </div>
      {/* <label for="inputEmail3" className="col-sm-2 col-form-label">
          Email
        </label>
        <div className="col-sm-10">
          <input
            type="email"
            className="form-control"
            id="inputEmail3"
            placeholder="Email"
          />
        </div> */}
      {/* </div> */}
      {/* <div className="form-group row">
        <label for="inputPassword3" className="col-sm-2 col-form-label">
          Password
        </label>
        <div className="col-sm-10">
          <input
            type="password"
            className="form-control"
            id="inputPassword3"
            placeholder="Password"
          />
        </div>
      </div> */}
      <fieldset className="form-group pt-3">
        <div className="row">
          <legend className="col-form-label col-sm-2 pt-0">Gender</legend>
          <div className="col-sm-10">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="gridRadios"
                id="gridRadios1"
                value="option1"
                checked
              />
              <label className="form-check-label" for="gridRadios1">
                Male
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="gridRadios"
                id="gridRadios2"
                value="option2"
              />
              <label className="form-check-label" for="gridRadios2">
                Female
              </label>
            </div>
          </div>
        </div>
      </fieldset>
      <div className="wrapper">
        <div className="divider div-transparent"></div>
      </div>
      <div className="form-group row">
        <div className="col"></div>
        <div className="">
          <div className="col">
            <button type="button" className="btn btn-outline-primary ">
              Cancel
            </button>
            <button type="button" className="btn btn-outline-success ml-5">
              Save
            </button>
          </div>
        </div>
      </div>
    </form>
  );

  return (
    <div>
      <GuestSidebar />
      <div className="guestProfile-container">
        <div className="float-center ">
          <div className=" mx-5 pt-5">
            <div className="">{showForm()}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuestProfile;
