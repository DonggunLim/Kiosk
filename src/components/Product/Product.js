export default function Product({
  $target,
  product: { name, price, img, tag },
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

  this.render();
}
