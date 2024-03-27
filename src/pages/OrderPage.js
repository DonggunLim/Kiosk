export default function OrderPage({ $target }) {
  this.$container = document.createElement("div");
  this.$container.innerHTML = `<p>OrderPage</p>`;
  $target.appendChild(this.$container);
}
