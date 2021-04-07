import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Home from "./Home/Home";
import GuestSignup from "./Guest/GuestSignup";
import OwnerSignup from "./Owner/OwnerSignup";
import OwnerLogin from "./Owner/OwnerLogin";
import GuestLogin from "./Guest/GuestLogin";
import GuestDashboard from "./Guest/GuestDashboard";
import OwnerDashboard from "./Owner/OwnerDashboard";
import AdminDashboard from "./Admin/AdminDashboard";
import AdminRoute from "./Admin/AdminRoute";
import GuestRoute from "./Guest/GuestRoute";
import OwnerRoute from "./Owner/OwnerRoute";
// import GuestProfile from "./Guest/GuestProfile/GuestProfile";
import GProfile from "./Guest/GuestProfile/GProfile";
import NotFound from "./NotFound";
import "./App.css";

const App = () => (
  <BrowserRouter>
    <Header />
    <main>
      <Switch>
        {/* switch executes the first child of the match */}
        <Route exact path="/" component={Home} />
        <Route exact path="/guestsignup" component={GuestSignup} />
        <Route exact path="/ownersignup" component={OwnerSignup} />
        <Route exact path="/guestlogin" component={GuestLogin} />
        <Route exact path="/ownerlogin" component={OwnerLogin} />
        <GuestRoute exact path="/guest/dashboard" component={GuestDashboard} />
        <OwnerRoute exact path="/owner/dashboard" component={OwnerDashboard} />
        <AdminRoute exact path="/admin/dashboard" component={AdminDashboard} />
        {/* <GuestRoute exact path="/guest/profile" component={GuestProfile} /> */}
        <GuestRoute exact path="/guest/profile" component={GProfile} />

        {/* default fallback */}
        <Route component={NotFound} />
      </Switch>
    </main>
  </BrowserRouter>
);

export default App;
