import "./product.css";
import Product from "./Product";
import getProducts from "../../utilities/fetch";

export default function ProductList({ $target }) {
  this.state = {};
  this.$element = document.createElement("ul");
  this.$element.classList.add("product_list");
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
    this.state.products?.map(
      (product) => new Product({ $target: this.$element, product })
    );
  };

  this.init();
}
