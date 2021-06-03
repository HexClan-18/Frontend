import Dashboard from "./views/Dashboard";
import GProfile from "./views/GProfile";
import inquiryForm from "./views/inquiryForm";
import inquiryList from "./views/inquiryList";
import ProductsPage from "../../mainpages/products/Products";
import CreateProduct from '../../mainpages/createProduct/CreateProduct'
import DetailProduct from '../../mainpages/detailProduct/DetailProduct'

const dashboardRoutes = [
  {
    path: "/products",
    name: "Accomodations",
    icon: "nc-icon nc-chat-round",
    component: ProductsPage,
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
  {
    path: "/detail/:id",
    name: "View Details",
    icon: "nc-icon nc-chat-round",
    component: DetailProduct,
    layout: "/guest",
  }
];

export default dashboardRoutes;
