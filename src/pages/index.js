import HomePage from "./HomePage.js";
import OrderPage from "./OrderPage.js";
import AdminPage from "./AdminPage.js";

export default function PageIndex(router) {
  const homepage = ($target) => new HomePage({ $target, router });
  const orderpage = ($target) => new OrderPage({ $target, router });
  const adminpage = ($target) => new AdminPage({ $target, router });

  return {
    homepage,
    orderpage,
    adminpage,
  };
}
