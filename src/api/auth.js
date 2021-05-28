//api requests
import axios from "axios";

/************************************
 *SIGNUP APIs
 ************************************/

export const ownersignup = async (data) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = await axios.post("/api/auth/ownersignup", data, config);

  return response;
};

export const guestsignup = async (data) => {
  const config = {
    //sending header for the api request
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = await axios.post("/api/auth/guestsignup", data, config);

  return response;
};

/************************************
 *LOGIN APIs
 ************************************/

export const ownerlogin = async (data) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = await axios.post("/api/auth/ownerlogin", data, config);

  return response;
};

export const guestlogin = async (data) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = await axios.post("/api/auth/guestlogin", data, config);

  return response;
};
