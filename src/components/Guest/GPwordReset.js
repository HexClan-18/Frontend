import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { showSuccessMsg, showErrorMsg } from "../../helpers/message";
import swal from "sweetalert";
import "../Guest/GEmailVerify.css";
import * as FaIcons from "react-icons/fa";

const Reset = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState("");
  const [err, setErr] = useState("");
  const history = useHistory();

  const loginRoute = () => {
    let path = `/guestlogin`;
    history.push(path);
  };

  const PostData = () => {
    fetch("/reset-password", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          setErr(data.error);
          swal(data.error);
        } else {
          setSuccess(data.message);
          swal(data.message);
        }
      })
      .catch((err) => {
        console.log(err);
        setErr(err);
      });
  };
  return (
    <>
      <div className="pwordreset-container">
        <div className="row px-5 vh-100">
          <div className="mx-auto align-self-center">
            <div className="box-container-pwreset">
              {err && showErrorMsg(err)}
              {success && showSuccessMsg(success)}
              <div className="mt-4 pb-3 text-center">
                <br />
                <i className="fa fa-lock fa-3x" aria-hidden="true"></i>
                <br />
                <h3>Forgot Password</h3>
                <p>
                  Please type in the email you registered to Board-Me-In and
                  we'll <br /> send you a link to reset your password.
                </p>
                <div className="col-md-12 text-center">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <br />
                <button
                  className="btn btn-primary profile-button "
                  onClick={() => PostData()}
                >
                  Reset Password
                </button>

                <div className="text-left pl-3">
                  <br />
                  <button
                    className="btn btn-secondary profile-button-clear "
                    onClick={() => loginRoute()}
                  >
                    <FaIcons.FaArrowLeft />
                    Back to Login
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reset;
