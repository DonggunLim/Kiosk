export default function Product({
  $target,
  product: { name, price, img, tag },
  onClick: handleOrder,
}) {
  this.$element = document.createElement("li");
  this.$element.classList.add("product_item", `${name}`);
  this.$element.innerHTML = `
    <div class="product_card">
      <img class="product_img" src='/public/images/${img}' />
      <p>${name}</p>
      <p>${price}</p>
      <button class="product_order_btn">담기</button>
    </div>
  `;

  this.render = () => $target.appendChild(this.$element);

  const handleClick = (e) => {
    if (e.target.classList.contains("product_order_btn")) {
      handleOrder({ name, price, count: 1 });
    }
  };

  this.setEvent = () => {
    this.$element.addEventListener("click", handleClick);
  };
  this.render();
  this.setEvent();
}
