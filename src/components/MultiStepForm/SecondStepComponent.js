import styles from "./SecondStepComponent.module.css";
import Product from "../Product/Product";

const SIDEDISH = [
  { name: "만두", price: 3500, img: "mando.jpg" },
  { name: "새우튀김", price: 3500, img: "shrimp.jpg" },
  { name: "계란프라이", price: 2000, img: "friedEgg.jpg" },
];

export default function SecondStepComponent({
  $target,
  onNext,
  onPrev,
  orderList,
  onUpdateOrderList,
}) {
  this.$element = document.createElement("div");
  this.$element.classList.add(styles.firstStep_component);
  this.$element.innerHTML = `
          <p>함께 먹으면 좋은 메뉴</p>
          <div class=${styles.product_container}>
          </div>
          <div class=${styles.orderList_container}>
          </div>
          <div class=${styles.btn_container}>
            <button class=${styles.prev_btn}>돌아가기</button>
            <button class=${styles.next_btn}>계산하기</button>
          </div>
    `;
  $target.appendChild(this.$element);

  this.render = () => {
    const $procutConiainer = this.$element.querySelector(
      `.${styles.product_container}`
    );
    const $orderlistContainer = this.$element.querySelector(
      `.${styles.orderList_container}`
    );

    SIDEDISH.map(
      (product) =>
        new Product({
          $target: $procutConiainer,
          product,
          onClick: (order) => onUpdateOrderList(order),
        })
    );
    new OrderListInFirstStep({
      $target: $orderlistContainer,
      orderList,
    });
  };

  this.$element.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target && e.target.classList.contains(styles.next_btn)) {
      onNext();
    } else if (e.target && e.target.classList.contains(styles.prev_btn)) {
      onPrev();
    }
  });

  this.render();
}

function OrderListInFirstStep({ $target, orderList }) {
  this.state = { orderList };
  this.$element = document.createElement("div");
  this.$element.classList.add(styles.orderList);
  $target.appendChild(this.$element);

  this.setState = (order) => {
    this.state.orderList = [...this.state.orderList, order];
    this.render();
  };

  this.render = () => {
    const totalPrice = this.state.orderList.reduce((acc, order) => {
      return acc + order.price * order.count;
    }, 0);

    this.$element.innerHTML = `
    ${this.state.orderList
      .map(
        ({ name, price, count }) =>
          `<p class=${styles.orderList_item}>${name} ${price}x${count}</p>`
      )
      .join("")}

      
    <div class=${styles.totalPrice}>
      총 결제금액 : ${totalPrice}원
    </div>
    `;
  };

  this.render();
}
