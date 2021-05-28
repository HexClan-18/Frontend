import Dashboard from "./views/Dashboard";
import GProfile from "./views/GProfile";
import inquiryForm from "./views/inquiryForm";
import inquiryList from "./views/inquiryList";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
    layout: "/guest",
  },
  {
    path: "/profile",
    name: "My Profile",
    icon: "nc-icon nc-circle-09",
    component: GProfile,
    layout: "/guest",
  },
  {
    path: "/inquiryform",
    name: "Make Inquiry",
    icon: "nc-icon nc-chat-round",
    component: inquiryForm,
    layout: "/guest",
  },
  {
    path: "/inquirylist",
    name: "My Inquiries",
    icon: "nc-icon nc-notes",
    component: inquiryList,
    layout: "/guest",
  },
];

export default dashboardRoutes;
