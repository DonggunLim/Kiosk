import styles from "./ProductList.module.css";
import Product from "./Product";
import { getProducts } from "../../utilities/fetcher";

export default function ProductList({ $target, onClick }) {
  this.state = { selected: "밥" };
  this.$element = document.createElement("div");
  this.$element.classList.add(styles.product_list);
  $target.appendChild(this.$element);

  this.init = () => {
    getProducts() //
      .then((data) => {
        this.setState("products", data);
      });
  };

  this.setState = (name, data) => {
    this.state = { ...this.state, [name]: data };
    this.render();
  };

  this.render = () => {
    this.$element.innerHTML = ``;
    this.state.products?.filter(
      (product) =>
        product.tag === this.state.selected &&
        new Product({ $target: this.$element, product, onClick })
    );
  };

  this.init();
}
