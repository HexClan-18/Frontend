import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import swal from "sweetalert";
import { showSuccessMsg, showErrorMsg } from "../../helpers/message";
import "../Guest/GEmailVerify.css";

const NewPword = () => {
  const history = useHistory();
  const [password, setPasword] = useState("");
  const { token } = useParams();
  const [success, setSuccess] = useState("");
  const [err, setErr] = useState("");

  console.log(token);

  const PostData = () => {
    fetch("/new-password", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password,
        token,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.error) {
          setErr(data.error);
          swal(data.error);
        } else {
          setSuccess(data.message);
          swal(data.message);
          history.push("/guestlogin");
        }
      })
      .catch((err) => {
        console.log(err);
        setErr(err);
      });
  };
  return (
    <>
      <div className="newpword-container">
        <div className="row px-5 vh-100">
          <div className="mx-auto align-self-center">
            <div className="box-container-newpword">
              {err && showErrorMsg(err)}
              {success && showSuccessMsg(success)}
              <div className="mt-4 pb-3 text-center">
                <br />
                <i className="fa fa-lock fa-3x" aria-hidden="true"></i>
                <br />
                <h3>Forgot Password</h3>
                <p>Please enter a new password</p>
                <div className="col-md-12 text-center">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="enter a new password"
                    value={password}
                    onChange={(e) => setPasword(e.target.value)}
                  />
                </div>
                <br />
                <button
                  className="btn btn-primary profile-button "
                  onClick={() => PostData()}
                >
                  Update Password
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewPword;
