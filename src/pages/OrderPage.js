import ProductList from "../components/Product/ProductList";

export default function OrderPage({ $target }) {
  const productList = new ProductList({
    $target,
  });
}
