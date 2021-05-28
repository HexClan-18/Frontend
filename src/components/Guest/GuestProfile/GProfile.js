import React, { useState, useEffect, useContext } from "react";
import GuestSidebar from "../GuestSidebar/GuestSidebar";
import "./GProfile.css";
import { UserContext } from "../../App";
import swal from "sweetalert";

/**
 * @author
 * @function GProfile
 **/

const GProfile = () => {
  const [data, setData] = useState([]);
  const { state, dispatch } = useContext(UserContext);
  const [image, setImage] = useState("");

  useEffect(() => {
    fetch("/profile", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setData(result.user);
      });
  }, []);

  /****************************
   * PROFILE PIC
   ***************************/
  useEffect(() => {
    if (image) {
      const data = new FormData();
      data.append("file", image);
      data.append("upload_preset", "board-me-in");
      data.append("cloud_name", "board-me-in");
      fetch(" https://api.cloudinary.com/v1_1/board-me-in/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          fetch("/updatepic", {
            method: "put",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + localStorage.getItem("jwt"),
            },
            body: JSON.stringify({
              pic: data.url,
            }),
          })
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              // localStorage.setItem(
              //   "user",
              //   JSON.stringify({ ...state, pic: result.pic })
              // );
              // dispatch({ type: "UPDATEPIC", payload: result.pic });
              window.location.reload();
              console.log("State:", state);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [image]);
  const updatePhoto = (file) => {
    setImage(file);
  };

  // const deletePic = (picid) => {
  //   fetch(`/deletepic/${picid}`, {
  //     method: "delete",
  //     headers: {
  //       Authorization: "Bearer " + localStorage.getItem("jwt"),
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((result) => {
  //       console.log(result);
  //       const newData = data.filter((item) => {
  //         return item._id !== result._id;
  //       });
  //       setData(newData);
  //     });
  // };

  /****************************
   * USERNAME
   ***************************/
  const UsernameUpdate = (firstname, lastname) => {
    fetch("/username", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
      body: JSON.stringify({
        firstname,
        lastname,
      }),
    })
      .then((res) => res.json(swal("Please Provide a Name!")))
      .then((result) => {
        swal("Successfully Updated!");

        console.log(result);
        const newData = data.map((item) => {
          if (item._id === result._id) {
            return result;
          } else {
            return item;
          }
        });
        setData(newData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  /****************************
   * BIO
   ***************************/
  const bioUpdate = (bio) => {
    fetch("/bio", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
      body: JSON.stringify({
        bio,
      }),
    })
      .then((res) => res.json(swal("Please Provide a Bio!")))
      .then((result) => {
        swal("Successfully Updated!");

        console.log(result);
        const newData = data.map((item) => {
          if (item._id === result._id) {
            return result;
          } else {
            return item;
          }
        });
        setData(newData);
      })
      .catch((err) => {
        // swal("Could not Updated!");
        console.log(err);
      });
  };

  /****************************
   * LOCATION
   ***************************/
  const locationUpdate = (location) => {
    fetch("/location", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
      body: JSON.stringify({
        location,
      }),
    })
      .then((res) => res.json(swal("Please Provide a Location!")))
      .then((result) => {
        swal("Successfully Updated!");
        console.log(result);
        const newData = data.map((item) => {
          if (item._id === result._id) {
            return result;
          } else {
            return item;
          }
        });
        setData(newData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  /****************************
   * PASSWORD
   ***************************/
  const passwordUpdate = (password, password2) => {
    fetch("/password", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
      body: JSON.stringify({
        password,
        password2,
      }),
    })
      .then((res) => res.json(swal("Passwords do not match!")))
      .then((result) => {
        swal("Successfully Updated!");
        console.log(result);
        const newData = data.map((item) => {
          if (item._id === result._id) {
            return result;
          } else {
            return item;
          }
        });
        setData(newData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  /****************************
   * VIEWS
   ***************************/
  const showForm = () => {
    return (
      <div className="profile">
        return{}
        {data.map((item) => {
          return (
            <div className="profile-form" key={item._id}>
              <div className="row">
                <div className="col-md-8">
                  <div className="p-3 py-2 ">
                    <div className="d-flex justify-content-between align-items-right mb-3">
                      <h4 className="h4">Profile Settings</h4>
                    </div>

                    {/* Profile picture*/}
                    <div className="form-dp">
                      <div className="col-md-7 ">
                        <div className="d-flex flex-column  ">
                          <div className="d-flex ">
                            <h4 className="h4">Update Picture</h4>
                          </div>
                          <div className="pl-5">
                            <img
                              className="rounded-circle mt-2"
                              width="184px"
                              alt="dp"
                              src={item.pic}

                              // src={state ? state.pic : "loading"}
                            />
                          </div>
                          <div>
                            <span className="font-weight-bold pl-5">
                              {item.firstname}&nbsp;
                              {item.lastname}
                            </span>

                            <span>
                              {" "}
                              <div className="dp-update pt-4">
                                {" "}
                                <div className="custom-file mb-2">
                                  <input
                                    type="file"
                                    className="custom-file-input"
                                    name="profilePic"
                                    onChange={(e) =>
                                      updatePhoto(e.target.files[0])
                                    }
                                  />
                                  <label className="custom-file-label">
                                    Choose File
                                  </label>
                                </div>
                                {/* <button
                                  className="btn btn-danger ml-4"
                                  onClick={() => deletePic(item._id)}
                                >
                                  delete
                                </button> */}
                              </div>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Username */}
                    <div className="form-username">
                      <form
                        className="username-form"
                        onSubmit={(e) => {
                          e.preventDefault();
                          UsernameUpdate(
                            e.target[0].value,
                            e.target[1].value,
                            item._id
                          );
                        }}
                        noValidate
                      >
                        <div className="row mt-2">
                          <div className="col-md-6">
                            <label className="labels">First Name</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder={item.firstname}
                              name="firstName"
                            />
                          </div>
                          <div className="col-md-6">
                            <label className="labels">Last Name</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder={item.lastname}
                              name="lastName"
                            />
                          </div>
                        </div>
                        <div className="mt-4 pb-3 text-right">
                          <button
                            className="btn btn-primary profile-button mr-4"
                            type="submit"
                          >
                            Save
                          </button>
                          <button className="btn btn-secondary" type="reset">
                            Clear
                          </button>
                        </div>
                      </form>
                    </div>

                    {/* Bio */}
                    <div className="form-bio">
                      <form
                        className="bio-form"
                        onSubmit={(e) => {
                          e.preventDefault();
                          bioUpdate(e.target[0].value, item._id);
                        }}
                        noValidate
                      >
                        <div className="row mt-3">
                          <div className="col-md-12">
                            <label className="labels">Bio</label>
                            <textarea
                              className="form-control"
                              id="exampleFormControlTextarea1"
                              rows="3"
                              cols="50"
                              placeholder={item.bio}
                              name="bio"
                            ></textarea>
                          </div>
                        </div>
                        <div className="mt-4 pb-3 text-right">
                          <button
                            className="btn btn-primary profile-button mr-4"
                            type="submit"
                          >
                            Save
                          </button>
                          <button className="btn btn-secondary" type="reset">
                            Clear
                          </button>
                        </div>
                      </form>
                    </div>

                    {/* Location */}
                    <div className="form-location">
                      <form
                        className="location-form"
                        onSubmit={(e) => {
                          e.preventDefault();
                          locationUpdate(e.target[0].value, item._id);
                        }}
                        noValidate
                      >
                        <div className="row mt-3">
                          <div className="col-md-6">
                            <label className="labels">Your Location</label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder={item.location}
                              name="city"
                            />
                          </div>
                        </div>
                        <div className="mt-4 pb-3 text-right">
                          <button
                            className="btn btn-primary profile-button mr-4"
                            type="submit"
                          >
                            Save
                          </button>
                          <button className="btn btn-secondary" type="reset">
                            Clear
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-10">
                  <div className="border-top pt-3">
                    <div className="d-flex justify-content-between align-items-center pt-3 mb-3 ">
                      <h4 className="h4">Reset Password</h4>
                    </div>

                    {/* password */}
                    <div className="form-password">
                      <form
                        className="password-form"
                        onSubmit={(e) => {
                          e.preventDefault();
                          passwordUpdate(
                            e.target[0].value,
                            e.target[1].value,
                            item._id
                          );
                        }}
                        noValidate
                      >
                        <div className="row mt-2">
                          <div className="col-md-8 mb-4">
                            <label className="labels">Reset Password</label>
                            <input
                              type="password"
                              className="form-control"
                              placeholder="new password"
                              name="password"
                            />
                          </div>
                          <div className="col-md-8">
                            <label className="labels">Re-Type Password</label>
                            <input
                              type="password"
                              className="form-control"
                              placeholder="confirm password"
                              name="password2"
                            />
                          </div>
                        </div>
                        <div className="mt-5 text-right">
                          <button
                            className="btn btn-primary profile-button mr-4"
                            type="submit"
                          >
                            Save Changes
                          </button>
                          <button className="btn btn-secondary" type="reset">
                            Clear
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  /****************************
   * RENDERER
   ***************************/
  return (
    <div>
      <GuestSidebar />
      {/* <GSidebar /> */}
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
