import styles from "./Product.module.css";

export default function Product({
  $target,
  product: { name, price, img },
  onClick: handleOrder,
}) {
  this.$element = document.createElement("li");
  this.$element.classList.add(styles.product_item, `${name}`);
  this.$element.innerHTML = `
    <div class=${styles.product_card}>
      <img class="product_img" src='/public/images/${img}' />
      <p>${name}</p>
      <p>${price}</p>
      <button class=${styles.product_order_btn}>담기</button>
    </div>
  `;

  this.render = () => $target.appendChild(this.$element);

  const handleClick = (e) => {
    if (e.target.classList.contains(styles.product_order_btn)) {
      handleOrder({ name, price, count: 1 });
    }
  };

  this.setEvent = () => {
    this.$element.addEventListener("click", handleClick);
  };
  this.render();
  this.setEvent();
}
