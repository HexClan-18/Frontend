import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import { showSuccessMsg, showErrorMsg } from "../../helpers/message";
import * as FaIcons from "react-icons/fa";

import "./GEmailVerify.css";

/**
 * @author
 * @function GEmailVerify
 **/

function GEmailVerify() {
  const { activation_token } = useParams();
  const [err, setErr] = useState("");
  const [success, setSuccess] = useState("");

  const history = useHistory();

  const loginRoute = () => {
    let path = `/guestlogin`;
    history.push(path);
  };

  // const signupRoute = () => {
  //   let path = `/guestsignup`;
  //   history.push(path);
  // };

  const showSuccess = () => {
    return (
      <div className="mt-4 pb-3 text-center">
        <i class="fas fa-check-circle fa-3x"></i> <br />
        <br />
        Account is Verified! <br /> <br />
        <br />
        <button
          className="btn btn-primary profile-button mr-4"
          onClick={loginRoute}
        >
          Login Now <FaIcons.FaArrowRight />
        </button>
      </div>
    );
  };

  const showError = () => {
    return (
      <div className="mt-4 pb-3 text-center">
        <i class="fas fa-times-circle fa-3x"></i> <br />
        <br />
        Please login using your credentials! <br />
        <br />
        <button className="btn btn-danger mr-4" onClick={loginRoute}>
          <FaIcons.FaArrowLeft />
          Return to Signup
        </button>
      </div>
    );
  };

  useEffect(() => {
    if (activation_token) {
      const GEmailVerify = async () => {
        try {
          const res = await axios.post("/emailverify", { activation_token });
          setSuccess(res.data.successMessage);
        } catch (err) {
          err.response.data.errorMessage &&
            setErr(err.response.data.errorMessage);
        }
      };
      GEmailVerify();
    }
  }, [activation_token]);

  return (
    <div className="verifyemail-container">
      <div className="row px-5 vh-100">
        <div className="mx-auto align-self-center">
          <div className="box-container">
            {" "}
            {err && showErrorMsg(err)}
            {success && showSuccessMsg(success)}
            {err && showError()}
            {success && showSuccess()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GEmailVerify;
