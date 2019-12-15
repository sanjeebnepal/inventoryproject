import Home from "./views/Home";
import Order from "./views/Order";

export default [
  {
    path: "/",
    component: Home,
    exact: true
  },
  {
    path: "/order",
    component: Order
  }
];
