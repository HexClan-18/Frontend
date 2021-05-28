import React, { useState, useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";
import { showErrorMsg } from "../../helpers/message";
import { showLoading } from "../../helpers/loading";
import { setAuthentication, isAuthenticated } from "../../helpers/auth";
import isEmpty from "validator/lib/isEmpty";
import isEmail from "validator/lib/isEmail";
import { guestlogin } from "../../api/auth";
import { Link } from "react-router-dom";
import { UserContext } from "../App";
import Header from "../Header";

/**
 * @author
 * @function GuestLogin
 **/

const GuestLogin = () => {
  const { state, dispatch } = useContext(UserContext);

  //useHistory instance
  let history = useHistory();

  //inquiry
  // const { loginHandler } = React.useContext(UserContext);

  //this useEffect will run each time when there is a new url value
  useEffect(() => {
    if (isAuthenticated() && isAuthenticated().role === 1) {
      history.push("/admin/dashboard");
    } else if (isAuthenticated() && isAuthenticated().role === 3) {
      history.push("/guest/dashboard");
    }
  }, [history]);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    errorMsg: false,
    loading: false,
  });

  const { email, password, errorMsg, loading } = formData;

  /****************************
   * EVENT HANDLERS
   ***************************/
  const handleChange = (evt) => {
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value,
      errorMsg: "",
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    /****************************
     * client-side validation
     ***************************/
    if (isEmpty(email) || isEmpty(password)) {
      setFormData({
        ...formData,
        errorMsg: "All fields are required",
      });
    } else if (!isEmail(email)) {
      setFormData({
        ...formData,
        errorMsg: "Invalid email",
      });
    } else {
      const { email, password } = formData;
      const data = { email, password };

      setFormData({ ...formData, loading: true });

      guestlogin(data)
        .then((response) => {
          //setting token and user in browser
          setAuthentication(response.data.token, response.data.user);
          //inquiry
          // loginHandler(
          //   response.data.user.firstname,
          //   response.data.user._id,
          //   response.data.user.role
          // );
          dispatch({ type: "USER", payload: data.user });

          if (isAuthenticated() && isAuthenticated().role === 1) {
            console.log("Redirecting to admin dashboard");
            history.push("/admin/dashboard");
          } else if (isAuthenticated() && isAuthenticated().role === 3) {
            console.log("Redirecting to Guest dashboard");
            history.push("/guest/dashboard");
          }
        })
        .catch((err) => {
          console.log("login api function error: ", err);
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
  const showLoginForm = () => (
    <form className="login-form" onSubmit={handleSubmit} noValidate>
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
          placeholder="Email"
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
          placeholder="Password"
          type="password"
          onChange={handleChange}
        />
      </div>
      {/* login button */}
      <div className="form-group">
        <button
          type="submit"
          className="btn btn-primary profile-button btn-block"
        >
          Login
        </button>
      </div>
      {/* forgot password */}
      <p className="text-center text-white">
        <Link to="/guest/pwreset">Forgot Password?</Link>
      </p>
      {/* already have account */}
      <p className="text-center text-white">
        Don't have a Guest account? <Link to="/guestsignup">Register here</Link>
      </p>
    </form>
  );

  /****************************
   * RENDERER
   ***************************/
  return (
    <>
      <Header />
      <div className="login-container">
        <div className="row px-3 vh-100">
          <div className="col-md-5 mx-auto align-self-center">
            {errorMsg && showErrorMsg(errorMsg)}
            {loading && <div className="text-center pb-4">{showLoading()}</div>}
            {showLoginForm()}
          </div>
        </div>
      </div>
    </>
  );
};

export default GuestLogin;
