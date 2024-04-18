import styles from "./CartItem.module.css";

export default function CartItem({ $target, order }) {
  this.$element = document.createElement("li");
  this.$element.classList.add(styles.order_item, "order_item");
  this.$element.innerHTML = `
        <p>${order.name}</p>
        <p>${order.price}</p>
        <div class=${styles.count_container}>
          <button class="left">
            <img src="/public/images/leftIcon.svg"/ class="${styles.icon}">
          </button>
          <p>${order.count}</p>
          <button class="right">
            <img src="/public/images/rightIcon.svg" class="${styles.icon}"/>
          </button>
        </div>
        <div>
          <button class="delete">
            <img src="/public/images/deleteIcon.svg" class="${styles.delete} ${styles.icon}"/>
          </button>
        </div>
  `;

  $target.appendChild(this.$element);
}
