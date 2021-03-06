import "react-app-polyfill/ie11"; // For IE 11 support
import "react-app-polyfill/stable";
import "core-js";
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./store";
import Axios from 'axios'
import './index.css'

Axios.defaults.baseURL = "http://localhost:5000"
Axios.defaults.headers.common = { 'Authorization': `Bearer ${localStorage.getItem("jwt")}` }


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
