import Dashboard from "./views/Dashboard";
import AdminDashboard from "./views/AdminDashboard";
import AdminInqList from "./views/AdminInqList";

import UserProfile from "./views/UserProfile";
import TableList from "./views/TableList";
import Typography from "./views/Typography";
import Icons from "./views/Icons";
import Maps from "./views/Maps";
import Notifications from "./views/Notifications";
// import Upgrade from "./views/Upgrade";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/admindashboard",
    name: "TPage Accommodation",
    icon: "nc-icon nc-alien-33",
    component: AdminDashboard,
    layout: "/admin",
  },
  {
    path: "/inquirylist",
    name: "User inquiries",
    icon: "nc-icon nc-chat-round",
    component: AdminInqList,
    layout: "/admin",
  },
  {
    path: "/user",
    name: "Users",
    icon: "nc-icon nc-circle-09",
    component: UserProfile,
    layout: "/admin",
  },
  {
    path: "/table",
    name: "Table List",
    icon: "nc-icon nc-notes",
    component: TableList,
    layout: "/admin",
  },
  {
    path: "/typography",
    name: "Typography",
    icon: "nc-icon nc-paper-2",
    component: Typography,
    layout: "/admin",
  },
  {
    path: "/icons",
    name: "Icons",
    icon: "nc-icon nc-atom",
    component: Icons,
    layout: "/admin",
  },
  {
    path: "/maps",
    name: "Maps",
    icon: "nc-icon nc-pin-3",
    component: Maps,
    layout: "/admin",
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "nc-icon nc-bell-55",
    component: Notifications,
    layout: "/admin",
  },
  // {
  //   upgrade: true,
  //   path: "/upgrade",
  //   name: "Upgrade to PRO",
  //   icon: "nc-icon nc-alien-33",
  //   component: Upgrade,
  //   layout: "/admin",
  // },
];

export default dashboardRoutes;
