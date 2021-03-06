import React, { useState, useEffect } from "react";
import isEmpty from "validator/lib/isEmpty";
import isEmail from "validator/lib/isEmail";
import equals from "validator/lib/equals";
import { showErrorMsg, showSuccessMsg } from "../../helpers/message";
import { showLoading } from "../../helpers/loading";
import { isAuthenticated } from "../../helpers/auth";
import { Link, useHistory } from "react-router-dom";
import { guestsignup } from "../../api/auth";
import Header from "../Header";

/**
 * @author
 * @function GuestSignup
 **/

const GuestSignup = () => {
  let history = useHistory();

  useEffect(() => {
    if (isAuthenticated() && isAuthenticated().role === 1) {
      history.push("/admin/dashboard");
    } else if (isAuthenticated() && isAuthenticated().role === 3) {
      history.push("/guest/dashboard");
    }
  }, [history]);

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    password2: "",
    successMsg: false,
    errorMsg: false,
    loading: false,
  });

  const {
    firstname,
    lastname,
    email,
    password,
    password2,
    successMsg,
    errorMsg,
    loading,
  } = formData;

  const handleChange = (evt) => {
    // console.log(evt);
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value,
      // resetting messages
      successMsg: "",
      errorMsg: "",
    });
  };

  /************************************
   *EVENT HANDLERS
   ************************************/

  const handleSubmit = (evt) => {
    evt.preventDefault();

    /************************************
     *CLIENT-SIDE VALIDATION*
     ************************************/

    if (
      isEmpty(firstname) ||
      isEmpty(lastname) ||
      isEmpty(email) ||
      isEmpty(password) ||
      isEmpty(password2)
    ) {
      setFormData({
        ...formData,
        errorMsg: "All fields are required",
      });
    } else if (!isEmail(email)) {
      setFormData({
        ...formData,
        errorMsg: "Invalid email",
      });
    } else if (!equals(password, password2)) {
      setFormData({
        ...formData,
        errorMsg: "Passwords do not match",
      });
    } else {
      // the data inside formdata which needs to be passed to the backend
      const { firstname, lastname, email, password } = formData;
      //above object is stored in the following data constant
      const data = { firstname, lastname, email, password };

      setFormData({ ...formData, loading: true });

      guestsignup(data)
        //the response returned by the server is displayed here
        .then((response) => {
          console.log("Axios signup success: ", response);
          //setting fields back to empty
          setFormData({
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            password2: "",
            loading: false,
            //the registration success message
            successMsg: response.data.successMessage,
          });
        })
        .catch((err) => {
          console.log("Axios signup error: ", err);
          setFormData({
            ...formData,
            loading: false,
            errorMsg: err.response.data.errorMessage,
          });
        });
    }
  };

  /****************************
   * VIEWS
   ***************************/

  const showSignupForm = () => {
    return (
      <form className="signup-form" onSubmit={handleSubmit} noValidate>
        <p align="center"> Signup as a Guest to book a property </p>
        {/* firstname */}
        <div className="form-group input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">
              <i className="fa fa-user"></i>
            </span>
          </div>
          <input
            name="firstname"
            value={firstname}
            className="form-control"
            placeholder="First Name"
            type="text"
            onChange={handleChange}
          />
        </div>
        {/* lastname */}
        <div className="form-group input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">
              <i className="fa fa-user"></i>
            </span>
          </div>
          <input
            name="lastname"
            value={lastname}
            className="form-control"
            placeholder="Last Name"
            type="text"
            onChange={handleChange}
          />
        </div>
        {/* email */}
        <div className="form-group input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">
              <i className="fa fa-envelope"></i>
            </span>
          </div>
          <input
            name="email"
            value={email}
            className="form-control"
            placeholder="Email address"
            type="email"
            onChange={handleChange}
          />
        </div>
        {/* password */}
        <div className="form-group input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">
              <i className="fa fa-lock"></i>
            </span>
          </div>
          <input
            name="password"
            value={password}
            className="form-control"
            placeholder="Create password"
            type="password"
            onChange={handleChange}
          />
        </div>
        {/* password2 */}
        <div className="form-group input-group">
          <div className="input-group-prepend">
            <span className="input-group-text">
              <i className="fa fa-lock"></i>
            </span>
          </div>
          <input
            name="password2"
            value={password2}
            className="form-control"
            placeholder="Confirm password"
            type="password"
            onChange={handleChange}
          />
        </div>
        {/* signup button */}
        <div className="form-group">
          <button
            type="submit"
            className="btn btn-primary profile-button btn-block"
          >
            Signup
          </button>
        </div>
        {/* already have account */}
        <p className="text-center text-white">
          Already a Guest? <Link to="/guestlogin">Login</Link>
        </p>
      </form>
    );
  };

  /****************************
   * RENDERER
   ***************************/
  return (
    <>
      <Header />
      <div className="signup-container">
        <div className="row vh-100">
          <div className="col-md-5 mx-auto align-self-center">
            {successMsg && showSuccessMsg(successMsg)}
            {errorMsg && showErrorMsg(errorMsg)}
            {loading && <div className="text-center pb-4">{showLoading()}</div>}
            {showSignupForm()}
          </div>
        </div>
      </div>
    </>
  );
};
export default GuestSignup;
