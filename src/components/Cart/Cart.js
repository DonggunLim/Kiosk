import { saveDataToStorage } from "../../utilities/storage";
import Modal from "../Modal/Modal";
import CartItem from "./CartItem";
import styles from "./Cart.module.css";
import MultiStepForm from "../MultiStepForm/MultiStepForm";
import FirstStepComponent from "../MultiStepForm/FirstStepComponent";
import SecondStepComponent from "../MultiStepForm/SecondStepComponent";
import ThirdStepComponent from "../MultiStepForm/ThirdStepComponent";

export default function Cart({ $target, router }) {
  this.state = {
    orderList: [],
  };

  this.$element = document.createElement("div");
  this.$element.classList.add(styles.cart_container);
  this.$element.innerHTML = `
    <div class=${styles.order_list}>
    </div>
    <div class=${styles.btn_container}>
        <p class=${styles.totalPrice}>0원</p>
        <button class=${styles.order_btn}>주문하기</button>
    </div>
  `;

  $target.appendChild(this.$element);

  const handleSubmit = () => {
    if (this.state.orderList.length) {
      saveDataToStorage(this.state.orderList);
      const modal = new Modal({
        router,
        path: "/",
      });
      modal.open(() => {
        new MultiStepForm({
          $target: modal.$ModalInner,
          steps: [FirstStepComponent, SecondStepComponent, ThirdStepComponent],
          data: this.state.orderList,
          router,
        });
      });
    }
  };

  this.setState = (orders) => {
    this.state.orderList = [...orders];
    this.render();
  };

  this.render = () => {
    const $target = document.querySelector(`.${styles.order_list}`);
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
    this.$element.querySelector(
      `.${styles.totalPrice}`
    ).innerText = `${totalPrice}원`;
  };

  this.setEvent = () => {
    this.$element
      .querySelector(`.${styles.order_btn}`)
      .addEventListener("click", handleSubmit);
  };

  this.setEvent();
}
