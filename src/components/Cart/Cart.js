import { saveDataToStorage } from "../../utilities/storage";
import Modal from "../Modal/Modal";
import CartItem from "./CartItem";
import "./style.css";

export default function Cart({ $target, router }) {
  this.state = {
    orderList: [],
  };

  this.$element = document.createElement("div");
  this.$element.classList.add("cart_container");
  this.$element.innerHTML = `
    <div class='order_list'>
    </div>
    <div class='btn_container'>
        <p class="total_price">0원</p>
        <button class="order_btn">주문하기</button>
    </div>
  `;

  $target.appendChild(this.$element);

  const handleSubmit = () => {
    if (this.state.orderList.length) {
      saveDataToStorage(this.state.orderList);
      modal.open();
    }
  };

  this.setState = (orders) => {
    this.state.orderList = [...orders];
    this.render();
  };

  this.render = () => {
    const $target = document.querySelector(".order_list");
    $target.innerHTML = ``;

    this.state.orderList.map(
      (order) =>
        new CartItem({
          $target,
          order,
          handleClickArrow: (order) => {
            const newOrders = [...this.state.orderList];

            const orderIndex = newOrders.findIndex(
              (o) => o.name === order.name
            );

            if (orderIndex !== -1) {
              newOrders[orderIndex] = order;
            } else {
              newOrders.push(order);
            }

            this.setState(newOrders);
          },
          handleDelete: (order) => {
            const newOrders = this.state.orderList.filter(
              (o) => o.name !== order.name
            );
            this.setState(newOrders);
          },
        })
    );

    const totalPrice = this.state.orderList.reduce((acc, order) => {
      return acc + order.price * order.count;
    }, 0);
    this.$element.querySelector(".total_price").innerText = `${totalPrice}원`;
  };

  this.setEvent = () => {
    this.$element
      .querySelector(".order_btn")
      .addEventListener("click", handleSubmit);
  };

  this.setEvent();

  const modal = new Modal({
    innerText: "주문이 완료되었습니다.",
    router,
    path: "/",
  });
}
