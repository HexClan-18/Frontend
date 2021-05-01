import React, { useState } from "react";
import GuestSidebar from "../GuestSidebar/GuestSidebar";
import "./GProfile.css";
import {
  updateUsername,
  updateBio,
  updateLocation,
  updatePicture,
  updatePassword,
} from "../../../api/profile";
// import { useSelector, useDispatch } from "react-redux";

//import isEmpty from "validator/lib/isEmpty";
// import { showErrorMsg, showSuccessMsg } from "../../../helpers/message";
// redux
//import { clearMessages } from "../../../redux/actions/messageActions";
//import { createProduct } from "../redux/actions/productActions";

//import * as yup from "yup";

/**
 * @author
 * @function GProfile
 **/

const GProfile = () => {
  /****************************
   * REDUX GLOBAL STATE PROPERTIES
   ***************************/
  // const { loading } = useSelector((state) => state.loading);
  // const { successMsg, errorMsg } = useSelector((state) => state.messages);

  // const dispatch = useDispatch();

  // // to update Profile data
  // const [profile, setProfile] = useState({
  //   firstName: "",
  //   lastName: "",
  //   bio: "",
  //   city: "",
  //   profilePic: null,
  // });

  // const { firstName, lastName, bio, city, profilePic } = profile;

  // to update Name
  const [username, setUsername] = useState({
    firstName: "",
    lastName: "",
  });

  const { firstName, lastName } = username;

  //to update Bio
  const [userbio, setUserbio] = useState({
    bio: "",
  });

  const { bio } = userbio;

  //to update Location
  const [userlocation, setUserlocation] = useState({
    city: "",
  });

  const { city } = userlocation;

  //to update Profile photo
  const [userdp, setUserdp] = useState({
    profilePic: null,
  });

  const { profilePic } = userdp;

  //to update password
  const [updatePassword, setUpdatePassword] = useState({
    newpassword: "",
    confirmpassword: "",
    // errorMsg: false,
  });

  const { newpassword, confirmpassword } = updatePassword;

  /****************************
   * EVENT HANDLERS
   ***************************/

  // const handleMessages = (evt) => {
  //   dispatch(clearMessages());
  //   setClientSideError("");
  // };
  //*********************************** */

  // const handleProfileChange = (evt) => {
  //   // dispatch(clearMessages());
  //   setProfile(evt.target.value);
  // };

  // to handle Name
  const handleNameChange = (evt) => {
    //console.log(evt);
    setUsername({
      ...username,
      [evt.target.name]: evt.target.value,
    });
  };

  // to handle Bio
  const handleBioChange = (evt) => {
    //console.log(evt);
    setUserbio({
      ...userbio,
      [evt.target.name]: evt.target.value,
    });
  };

  // to handle Location
  const handleLocationChange = (evt) => {
    //console.log(evt);
    setUserlocation({
      ...userlocation,
      [evt.target.name]: evt.target.value,
    });
  };

  // to handle Profile photo
  const handleDpChange = (evt) => {
    //console.log(evt);
    setUserdp({
      ...userdp,
      [evt.target.name]: evt.target.files[0],
    });
  };

  // to handle Password
  const handlePasswordChange = (evt) => {
    //console.log(evt);
    setUpdatePassword({
      ...updatePassword,
      [evt.target.name]: evt.target.value,
    });
  };

  // const handleImageChange = (evt) => {
  //   console.log(evt.target.files[0]);
  //   setProfile({
  //     ...profile,
  //     [evt.target.name]: evt.target.files[0],
  //   });
  // };

  // const handleProfileChange = (evt) => {
  //   //console.log(evt);
  //   setProfile({
  //     ...profile,
  //     [evt.target.name]: evt.target.value,
  //   });
  // };

  //Username
  const UsernameUpdate = (evt) => {
    evt.preventDefault();

    let formData = new FormData();

    formData.append("firstName", firstName);
    formData.append("lastName", lastName);

    updateUsername(formData)
      .then((response) => {
        setUsername({
          firstName: "",
          lastName: "",
        });
      })
      .catch((err) => {
        console.log("hey", err);
      });

    console.log(evt);
  };

  //Bio
  const bioUpdate = (evt) => {
    evt.preventDefault();

    let formData = new FormData();

    formData.append("bio", bio);

    updateBio(formData)
      .then((response) => {
        setUserbio({
          bio: "",
        });
      })
      .catch((err) => {
        console.log(err);
      });

    console.log(evt);
  };

  //Location
  const locationUpdate = (evt) => {
    evt.preventDefault();

    let formData = new FormData();

    formData.append("city", city);

    updateLocation(formData)
      .then((response) => {
        setUserlocation({
          city: "",
        });
      })
      .catch((err) => {
        console.log(err);
      });

    console.log(evt);
  };

  //Profile Picture
  const dpUpdate = (evt) => {
    evt.preventDefault();

    let formData = new FormData();

    formData.append("profilePic", profilePic);

    updatePicture(formData)
      .then((response) => {
        setUserdp({
          profilePic: null,
        });
      })
      .catch((err) => {
        console.log(err);
      });

    console.log(evt);
  };

  // const profileUpdate = (evt) => {
  //   evt.preventDefault();

  //   let formData = new FormData();

  //   formData.append("firstName", firstName);
  //   formData.append("lastName", lastName);
  //   formData.append("bio", bio);
  //   formData.append("city", city);
  //   formData.append("profilePic", profilePic);

  //   createProfile(formData)
  //     .then((response) => {
  //       setProfile({
  //         firstName: "",
  //         lastName: "",
  //         bio: "",
  //         city: "",
  //         profilePic: null,
  //       });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });

  //   // setProfileData({
  //   //   firstName: null,
  //   //   lastName: "",
  //   //   bio: "",
  //   //   city: "",
  //   //   profilePic: "",
  //   // });

  //   console.log(evt);
  // };

  /***** */
  //checking file type and size
  // const schema = yup.object().shape({
  //   profilePic: yup
  //     .mixed()
  //     .required("You need to provide a file")
  //     .test("fileSize", "The file is too large", (value) => {
  //       return value && value[0].size <= 2000000;
  //     })
  //     .test("type", "We only support jpeg", (value) => {
  //       return value && value[0].type === "image/jpeg";
  //     }),
  // });

  const passwordUpdate = (evt) => {
    evt.preventDefault();

    // if (isEmpty(newpassword) || isEmpty(confirmpassword)) {
    //   setUpdatePassword({
    //     ...updatePassword,
    //     errorMsg: "All fields are required",
    //   });
    //   console.log(evt);
    // }
  };

  /****************************
   * VIEWS
   ***************************/

  const showForm = () => {
    return (
      <div className="profile-form">
        <div className="row">
          <div className="col-md-8">
            <div className="p-3 py-2 ">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h4 className="h4">Profile Settings</h4>
              </div>

              {/* Username */}
              <div className="form-username">
                <form
                  className="username-form"
                  onSubmit={UsernameUpdate}
                  noValidate
                >
                  <div className="row mt-2">
                    <div className="col-md-6">
                      <label className="labels">First Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="first name"
                        name="firstName"
                        value={firstName}
                        onChange={handleNameChange}
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="labels">Last Name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="last name"
                        name="lastName"
                        value={lastName}
                        onChange={handleNameChange}
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
                    <button
                      type="button"
                      className="btn btn-secondary"
                      type="cancel"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>

              {/* Bio */}
              <div className="form-bio">
                <form className="bio-form" onSubmit={bioUpdate} noValidate>
                  <div className="row mt-3">
                    <div className="col-md-12">
                      <label className="labels">Bio</label>
                      <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                        cols="50"
                        placeholder="write a short bio to help owners get to know you..."
                        name="bio"
                        value={bio}
                        onChange={handleBioChange}
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
                    <button
                      type="button"
                      className="btn btn-secondary"
                      type="cancel"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>

              {/* Location */}
              <div className="form-location">
                <form
                  className="location-form"
                  onSubmit={locationUpdate}
                  noValidate
                >
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label className="labels">Your Location</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="city"
                        name="city"
                        value={city}
                        onChange={handleLocationChange}
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
                    <button
                      type="button"
                      className="btn btn-secondary"
                      type="cancel"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Profile picture*/}
          <div className="form-dp">
            <form className="dp-form" onSubmit={dpUpdate} noValidate>
              <div className="col-md-4 margin-auto text-center">
                <div className="d-flex flex-column  ">
                  <div className="d-flex ">
                    <h4 className="h4">Update Picture</h4>
                  </div>
                  <div className="pl-5">
                    <img
                      className="rounded-circle mt-2"
                      width="184px"
                      alt="dp"
                      src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                    />
                  </div>
                  <div>
                    <span className="font-weight-bold pl-5">Guest Name</span>
                    <span>
                      {" "}
                      <div className="dp-update pt-4">
                        {" "}
                        <div className="custom-file mb-2">
                          <input
                            type="file"
                            className="custom-file-input"
                            name="profilePic"
                            onChange={handleDpChange}
                          />
                          <label className="custom-file-label">
                            Choose File
                          </label>
                        </div>
                      </div>
                      <div className="mt-5 pb-4 text-right">
                        <button
                          className="btn btn-primary profile-button mr-4"
                          type="submit"
                        >
                          Save Changes
                        </button>
                        <button
                          type="button"
                          className="btn btn-secondary"
                          type="cancel"
                        >
                          Cancel
                        </button>
                      </div>
                    </span>
                    {/* <span>
                  <div className="text-left">
                    <button
                      className="btn btn-primary profile-button"
                      type="submit"
                    >
                      Update
                    </button>{" "}
                    <button className="btn btn-danger">Remove</button>{" "}
                  </div>
                </span> */}
                  </div>
                </div>
              </div>
            </form>
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
                  onSubmit={passwordUpdate}
                  noValidate
                >
                  <div className="row mt-2">
                    <div className="col-md-8 mb-4">
                      <label className="labels">Reset Password</label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="new password"
                        name="newpassword"
                        value={newpassword}
                        onChange={handlePasswordChange}
                      />
                    </div>
                    <div className="col-md-8">
                      <label className="labels">Re-Type Password</label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="confirm password"
                        name="confirmpassword"
                        value={confirmpassword}
                        onChange={handlePasswordChange}
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
                    <button
                      type="button"
                      className="btn btn-secondary"
                      type="cancel"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
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
