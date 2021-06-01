import Dashboard from "./views/AdminDashboard";
import AdminInqList from "./views/AdminInqList";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/inquirylist",
    name: "User inquiries",
    icon: "nc-icon nc-chat-round",
    component: AdminInqList,
    layout: "/admin",
  },
];

export default dashboardRoutes;
