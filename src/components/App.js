// import React from "react";
import React, { useEffect, createContext, useReducer, useContext } from "react";

// import { BrowserRouter, Route, Switch } from "react-router-dom";
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";

import Header from "./Header";
import Home from "./Home/Home";
//SIGNUP & LOGIN
import GuestSignup from "./Guest/GuestSignup";
import OwnerSignup from "./Owner/OwnerSignup";
import OwnerLogin from "./Owner/OwnerLogin";
import GuestLogin from "./Guest/GuestLogin";

// DASHBOARDS
import GDashboard from "./Guest/GuestDashboard/GDashboard";
import OwnerDashboard from "./Owner/OwnerDashboard";
import AdminDashboard from "./Admin/AdminDashboard";

// PROTECTED ROUTES
import AdminRoute from "./Admin/AdminRoute";
import GuestRoute from "./Guest/GuestRoute";
import OwnerRoute from "./Owner/OwnerRoute";

//PROFILES
import GProfile from "./Guest/GuestProfile/GProfile";

//INQUIRIES
import inquiryForm from "./Inquiry/inquiryForm";
import inquiryList from "./Inquiry/inquiryList";

import NotFound from "./NotFound";
import "./App.css";

import { reducer, initialState } from "../reducers/userReducer";

export const UserContext = createContext();

const App = () => (
  <BrowserRouter>
    <Header />
    <main>
      <Switch>
        {/* switch executes the first child of the match */}
        <Route exact path="/" component={Home} />

        {/* SIGNUP & LOGIN */}
        <Route exact path="/guestsignup" component={GuestSignup} />
        <Route exact path="/ownersignup" component={OwnerSignup} />
        <Route exact path="/guestlogin" component={GuestLogin} />
        <Route exact path="/ownerlogin" component={OwnerLogin} />
 
        {/* DASHBOARDS */}
        <GuestRoute exact path="/guest/dashboard" component={GDashboard} />
        <OwnerRoute exact path="/owner/dashboard" component={OwnerDashboard} />
        <AdminRoute exact path="/admin/dashboard" component={AdminDashboard} />

        {/* PROFILES */}
        <GuestRoute exact path="/guest/profile" component={GProfile} />
        {/* <GuestRoute exact path="/guest/profile/:userId" component={GProfile} /> */}

        {/* INQUIRIES */}
        <GuestRoute exact path="/guest/inquiryform" component={inquiryForm} />
        <GuestRoute exact path="/guest/inquirylist" component={inquiryList} />

        {/* default fallback */}
        <Route component={NotFound} />
      </Switch>
    </main>
  </BrowserRouter>
);

export default App;
