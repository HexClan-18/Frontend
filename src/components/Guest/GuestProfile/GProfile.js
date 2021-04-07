import React from "react";
import GuestSidebar from "../GuestSidebar/GuestSidebar";
import "./GProfile.css";

/**
 * @author
 * @function GProfile
 **/

const GProfile = () => {
  const showForm = () => (
    <div className="  bg-white ">
      <div className="row">
        <div className="col-md-3 border-right">
          <div className="d-flex flex-column align-items-center text-center ">
            <img
              className="rounded-circle mt-5"
              width="150px"
              src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
            />
            <span className="font-weight-bold">UserName</span>
            <span className="text-black-50">user@mail.com</span>
            <span>
              {" "}
              <div className="dp-update pt-3">
                {" "}
                <button className="btn btn-primary mr-2">Update</button>{" "}
                <button className="btn btn-danger">Remove</button>{" "}
              </div>
            </span>
          </div>
        </div>
        <div className="col-md-5 border-right">
          <div className="p-3 py-5">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4 className="text-right">Profile Settings</h4>
            </div>
            <div className="row mt-2">
              <div className="col-md-6">
                <label className="labels">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="first name"
                  value=""
                />
              </div>
              <div className="col-md-6">
                <label className="labels">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  value=""
                  placeholder="last name"
                />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-12">
                <label className="labels"> About</label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  cols="50"
                  placeholder="About"
                ></textarea>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-6">
                <label className="labels">City</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="city"
                  value=""
                />
              </div>
              <div className="col-md-6">
                <label className="labels"> Street </label>
                <input
                  type="text"
                  className="form-control"
                  value=""
                  placeholder="street"
                />
              </div>
            </div>
            <div className="mt-5 text-center">
              <button
                className="btn btn-primary profile-button mr-4"
                type="button"
              >
                Save Changes
              </button>
              <button type="button" className="btn btn-secondary" type="button">
                Cancel
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="p-3 py-5">
            <div className="d-flex justify-content-between align-items-center experience">
              <h4 className="text-right">Reset Password</h4>
            </div>
            <br />
            <div className="col-md-12">
              <label className="labels">New Password</label>
              <input
                type="text"
                className="form-control"
                placeholder="new password"
                value=""
              />
            </div>{" "}
            <br />
            <div className="col-md-12">
              <label className="labels">Re-Type Password</label>
              <input
                type="text"
                className="form-control"
                placeholder="confirm password"
                value=""
              />
              <div className="mt-5 text-center">
                <button
                  className="btn btn-primary profile-button"
                  type="button"
                >
                  Save Password
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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

export default GProfile;
