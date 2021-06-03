import Dashboard from "./views/AdminDashboard";
import AdminInqList from "./views/AdminInqList";
import ProductsPage from "../../mainpages/products/Products";
import CreateProduct from '../../mainpages/createProduct/CreateProduct'
import DetailProduct from '../../mainpages/detailProduct/DetailProduct'

//Function Pages
// import Products from './mainpages/products/Products'
// import DetailProduct from './mainpages/detailProduct/DetailProduct'
// import OrderHistory from './mainpages/history/OrderHistory'
// import OrderDetails from './mainpages/history/OrderDetails'
// import Cart from './mainpages/cart/Cart'
// import Chat from './mainpages/chat/Chat'
// import Categories from './mainpages/categories/Categories'
// import Paymentmodal from './payment_module/PaymentModal'


const dashboardRoutes = [
  {
    path: "/products",
    name: "Accomodations",
    icon: "nc-icon nc-chat-round",
    component: ProductsPage,
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
    path: "/edit_product/:id",
    name: "Create Product",
    icon: "nc-icon nc-chat-round",
    component: CreateProduct,
    layout: "/admin",
  },
  {
    path: "/detail/:id",
    name: "View Details",
    icon: "nc-icon nc-chat-round",
    component: DetailProduct,
    layout: "/admin",
  }
];

export default dashboardRoutes;
