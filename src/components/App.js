import React, { useEffect, createContext, useReducer, useContext } from "react";
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";

//SIDEBAR NEW
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/fontawesome.css";
import "./Admin/SidebarAdmin/assets/css/animate.min.css";
import "./Admin/SidebarAdmin/assets/scss/light-bootstrap-dashboard-react.scss?v=2.0.0";
import "./Admin/SidebarAdmin/assets/css/demo.css";

//NEW SIDEBAR
import AdminLayout from "./Admin/SidebarAdmin/layouts/Admin";
import GuestLayout from "./Guest/SidebarGuest/layouts/Guest";
import OwnerLayout from "./Owner/SidebarOwner/layouts/Owner";
import CreateProduct from "./mainpages/createProduct/CreateProduct";

//
import Home from "./Home/Home";
import NotFound from "./NotFound";
import "./App.css";

//SIGNUP & LOGIN
import GuestSignup from "./Guest/GuestSignup";
import OwnerSignup from "./Owner/OwnerSignup";
import OwnerLogin from "./Owner/OwnerLogin";
import GuestLogin from "./Guest/GuestLogin";

//SENDGRID
import GEmailVerify from "./Guest/GEmailVerify";
import OEmailVerify from "./Owner/OEmailVerify";
import GPwordReset from "./Guest/GPwordReset";
import GNewPword from "./Guest/GNewPword";
import OPwordReset from "./Owner/OPwordReset";
import ONewPword from "./Owner/ONewPword";

//REDUCER

//INQUIRY
import UserContext from "../context/userContext";


const Routing = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />

      {/* NEW SIDEBAR */}
      {/* ADMIN */}
      <Route
        path="/admin/dashboard"
        render={(props) => <AdminLayout {...props} />}
      />
      <Route
        path="/admin/user"
        render={(props) => <AdminLayout {...props} />}
      />
      <Route
        path="/admin/admindashboard"
        render={(props) => <AdminLayout {...props} />}
      />
      <Route
        path="/admin/products"
        render={(props) => <AdminLayout {...props} />}
      />
      <Route
        path="/admin/category"
        render={(props) => <AdminLayout {...props} />}
      />
      <Route
        path="/admin/detail/:id"
        render={(props) => <AdminLayout {...props} />}
      />
      <Route
        path="/admin/create_product"
        render={(props) => <AdminLayout {...props} />}
      />
      <Route
        path="/admin/edit_product/:id"
        render={(props) => <AdminLayout {...props} />}
      />
      <Route
        path="/admin/history"
        render={(props) => <AdminLayout {...props} />}
      />
      <Route
        path="/admin/history/:id"
        render={(props) => <AdminLayout {...props} />}
      />
      <Route
        path="/admin/chat"
        render={(props) => <AdminLayout {...props} />}
      />
      <Route
        path="/admin/payment"
        render={(props) => <AdminLayout {...props} />}
      />
      <Route
        path="/admin/comment"
        render={(props) => <AdminLayout {...props} />}
      />

      <Route
        path="/admin/inquirylist"
        render={(props) => <AdminLayout {...props} />}
      />
      <Route
        path="/admin/icons"
        render={(props) => <AdminLayout {...props} />}
      />
      {/* ********** */}

      {/* GUEST */}
      <Route
        exact
        path="/guest/dashboard"
        render={(props) => <GuestLayout {...props} />}
      />
      <Route
        exact
        path="/guest/profile"
        render={(props) => <GuestLayout {...props} />}
      />
      <Route
        exact
        path="/guest/inquiryform"
        render={(props) => <GuestLayout {...props} />}
      />
      <Route
        exact
        path="/guest/inquirylist"
        render={(props) => <GuestLayout {...props} />}
      />
      <Route
        path="/guest/detail/:id"
        render={(props) => <GuestLayout {...props} />}
      />

      <Route
        path="/guest/products"
        render={(props) => <GuestLayout {...props} />}
      />

      {/* ********** */}

      {/* OWNER */}
      <Route
        exact
        path="/owner/dashboard"
        render={(props) => <OwnerLayout {...props} />}
      />
      <Route
        exact
        path="/owner/profile"
        render={(props) => <OwnerLayout {...props} />}
      />
      <Route
        exact
        path="/owner/inquiryform"
        render={(props) => <OwnerLayout {...props} />}
      />
      <Route
        exact
        path="/owner/inquirylist"
        render={(props) => <OwnerLayout {...props} />}
      />
      <Route
        exact
        path="/owner/guestinquirylist"
        render={(props) => <OwnerLayout {...props} />}
      />

      <Route exact path="/owner/property" component={CreateProduct} />

      {/* ************* */}

      {/* SIGNUP & LOGIN */}
      <Route exact path="/guestsignup" component={GuestSignup} />
      <Route exact path="/ownersignup" component={OwnerSignup} />
      <Route exact path="/guestlogin" component={GuestLogin} />
      <Route exact path="/ownerlogin" component={OwnerLogin} />

      {/* SENDGRID */}
      <Route
        exact
        path="/guest/emailverify/:activation_token"
        component={GEmailVerify}
      />
      <Route
        exact
        path="/owner/oemailverify/:activation_token"
        component={OEmailVerify}
      />
      <Route exact path="/guest/pwreset" component={GPwordReset} />
      <Route exact path="/guest/pwreset/:token" component={GNewPword} />

      <Route exact path="/owner/pwreset" component={OPwordReset} />
      <Route exact path="/owner/pwreset/:token" component={ONewPword} />

      {/* default fallback */}
      <Route component={NotFound} />
    </Switch>
  );
};

function App() {

  return (
    <UserContext>
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </UserContext>
  );
}

export default App;
