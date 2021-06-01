import Dashboard from "./views/Dashboard";
import OProfile from "./views/OProfile";
import inquiryForm from "./views/inquiryForm";
import inquiryList from "./views/inquiryList";
import CreateProduct from "./views/CreateProduct";
import admininqlist from "./views/AdminInqList";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
    layout: "/owner",
  },
  {
    path: "/profile",
    name: "My Profile",
    icon: "nc-icon nc-circle-09",
    component: OProfile,
    layout: "/owner",
  },
  {
    path: "/property",
    name: "Add My Property",
    icon: "nc-icon nc-chart-pie-35",
    component: CreateProduct,
    layout: "/owner",
  },
  {
    path: "/inquiryform",
    name: "Make Inquiry",
    icon: "nc-icon nc-chat-round",
    component: inquiryForm,
    layout: "/owner",
  },
  {
    path: "/inquirylist",
    name: "My inquiries",
    icon: "nc-icon nc-notes",
    component: inquiryList,
    layout: "/owner",
  },

  {
    path: "/guestinquirylist",
    name: "Guest inquiries",
    icon: "nc-icon nc-notes",
    component: admininqlist,
    layout: "/owner",
  },
];

export default dashboardRoutes;
