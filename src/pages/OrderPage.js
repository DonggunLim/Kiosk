import Cart from "../components/Cart/Cart";
import ProductList from "../components/Product/ProductList";
import FilterMenu from "../components/FilterMenu/FilterMenu";

export default function OrderPage({ $target, router }) {
  const filterMenu = new FilterMenu({
    $target,
    onChangeMenu: (tag) => productList.setState("selected", tag),
  });

  const productList = new ProductList({
    $target,
    onClick: (data) => {
      const checkduplication = cart.state.orderList.find(
        (o) => o.name === data.name
      );
      if (!checkduplication) {
        const orders = [...cart.state.orderList, data];
        cart.setState(orders);
      }
    },
  });

  const cart = new Cart({ $target, router });
}
