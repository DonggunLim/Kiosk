import Cart from "../components/Cart/Cart";
import ProductList from "../components/Product/ProductList";

export default function OrderPage({ $target, router }) {
  this.state = {};

  this.setState = (name, data) => {
    this.state = { ...this.state, [name]: data };
  };

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
