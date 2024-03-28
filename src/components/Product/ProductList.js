import "./product.css";
import Product from "./Product";
import getProducts from "../../utilities/fetch";
import FilterMenu from "../FilterMenu/FilterMenu";

export default function ProductList({ $target }) {
  this.state = { selected: "밥" };

  const filterMenu = new FilterMenu({
    $target,
    selected: this.state.selected,
    onClick: (tag) => {
      this.setState("selected", tag);
    },
  });

  this.$element = document.createElement("div");
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
    this.$element.innerHTML = ``;
    this.state.products?.filter(
      (product) =>
        product.tag === this.state.selected &&
        new Product({ $target: this.$element, product })
    );
  };

  this.init();
}
