import "./style.css";

export default function OrderButton({ $target, onClick }) {
  this.$element = document.createElement("div");
  this.$element.className = "order_btn_container";
  this.$element.innerHTML = `<button class="order_btn">주문하기</button>`;

  this.render = () => $target.appendChild(this.$element);
  this.handleClick = (e) => e.target.className === "order_btn" && onClick();

  this.setEvent = () => {
    this.$element.addEventListener("click", this.handleClick);
  };

  this.render();
  this.setEvent();
}
