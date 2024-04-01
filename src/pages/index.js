import HomePage from "./HomePage.js";
import OrderPage from "./OrderPage.js";

export default function PageIndex(router) {
  const homepage = ($target) => new HomePage({ $target, router });
  const orderpage = ($target) => new OrderPage({ $target, router });

  return {
    homepage,
    orderpage,
  };
}
