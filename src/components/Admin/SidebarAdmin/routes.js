import Dashboard from "./views/AdminDashboard";
import AdminInqList from "./views/AdminInqList";
import ProductsPage from "../../mainpages/products/Products";

//Function Pages
// import Products from './mainpages/products/Products'
// import DetailProduct from './mainpages/detailProduct/DetailProduct'
// import OrderHistory from './mainpages/history/OrderHistory'
// import OrderDetails from './mainpages/history/OrderDetails'
// import Cart from './mainpages/cart/Cart'
// import Chat from './mainpages/chat/Chat'
// import Categories from './mainpages/categories/Categories'
// import CreateProduct from './mainpages/createProduct/CreateProduct'
// import Paymentmodal from './payment_module/PaymentModal'


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
  {
    path: "/products",
    name: "User inquiries",
    icon: "nc-icon nc-chat-round",
    component: ProductsPage,
    layout: "/admin",
  }
];

export default dashboardRoutes;
