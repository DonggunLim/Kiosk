export default function CartItem({
  $target,
  order,
  handleClickArrow,
  handleDelete,
}) {
  this.$element = document.createElement("li");
  this.$element.classList.add("order_item");
  this.$element.innerHTML = `
        <p>${order.name}</p>
        <p>${order.price}</p>
        <div class="count_container">
          <button>
            <img src="/public/images/leftIcon.svg"/ class="left icon">
          </button>
          <p>${order.count}</p>
          <button>
            <img src="/public/images/rightIcon.svg" class="right icon"/>
          </button>
        </div>
        <div>
          <button>
            <img src="/public/images/deleteIcon.svg" class="delete icon"/>
          </button>
        </div>
  `;

  $target.appendChild(this.$element);

  const handleClick = (e) => {
    if (e.target && e.target.classList.contains("right")) {
      handleClickArrow({ ...order, count: order.count + 1 });
    } else if (e.target && e.target.classList.contains("left")) {
      const newCount = order.count === 0 ? 0 : order.count - 1;
      handleClickArrow({ ...order, count: newCount });
    } else if (e.target && e.target.classList.contains("delete")) {
      handleDelete(order);
    }
  };

  this.setEvent = () => {
    this.$element.addEventListener("click", handleClick);
  };

  this.setEvent();
}
