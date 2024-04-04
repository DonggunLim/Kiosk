import styles from "./ThirdStepComponent.module.css";

export default function ThirdStepComponent({
  $target,
  orderList,
  selection,
  goHome,
}) {
  this.$element = document.createElement("div");
  this.$element.classList.add(styles.thirdStep_component);

  this.$element.innerHTML = `
  <div class="${styles.card_icon_container}">
    <img src='/public/images/insertcard.svg' class="${styles.card_icon}"/>
  </div>
`;

  $target.appendChild(this.$element);

  this.render = () => {
    let totalPrice = 0;

    const orderItemsHtml = orderList
      .map((order) => {
        const itemTotal = order.price * order.count;
        totalPrice += itemTotal;
        return `<li>${order.name}: ${order.price}원 x ${order.count} = ${itemTotal}원</li>`;
      })
      .join("");

    this.$element.innerHTML = `
    <div class="${styles.receipt_container}">
      <h2>[ 주문 영수증 ]</h2>
      <ul>${orderItemsHtml}</ul>
      <p>주문 유형: ${selection === "togo" ? "포장" : "매장"}</p>
      <p>총액: ${totalPrice}원</p>
    </div>
    <button class="${styles.complite_btn}">완료</button>
    `;
  };

  this.$element.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target && e.target.classList.contains(styles.complite_btn)) {
      goHome();
    }
  });

  setTimeout(() => {
    this.render();
  }, 3000);
}
