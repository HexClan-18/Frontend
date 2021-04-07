import { setCookie, getCookie, deleteCookie } from "./cookies";
import {
  setLocalStorage,
  getLocalStorage,
  deleteLocalStorage,
} from "./localStorage";

//fuction for creating the local storage and the cookie
export const setAuthentication = (token, user) => {
  setCookie("token", token);
  setLocalStorage("user", user);
};

//if the cookie is having the token and localStorage is having the user object that object is returned
export const isAuthenticated = () => {
  if (getCookie("token") && getLocalStorage("user")) {
    return getLocalStorage("user");
  } else {
    return false;
  }
};

//deleting both the cookie and localStorage data
export const logout = (next) => {
  deleteCookie("token");
  deleteLocalStorage("user");

  next();
};
