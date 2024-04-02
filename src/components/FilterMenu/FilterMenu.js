import styles from "./FilterMenu.module.css";
const FILTER_ITEM = ["밥", "면", "기타"];

export default function FilterMenu({ $target, onChangeMenu: handleFilter }) {
  this.$element = document.createElement("div");
  this.$element.classList.add(styles.filter_container);
  this.$element.innerHTML = `
    <ul class=${styles.filter_list}>
    ${FILTER_ITEM.map((filter, index) => {
      return `<li class="${styles.filter_item} ${
        index === 0 && styles.active
      }" data-tag="${filter}">${filter}</li>`;
    }).join("")}
    </ul>
  `;

  $target.appendChild(this.$element);
  const handleClick = (e) => {
    if (e.target && e.target.classList.contains(styles.filter_item)) {
      this.$element.querySelectorAll("LI").forEach(($li) => {
        $li.classList.remove(styles.active);
      });
      e.target.classList.add(styles.active);
      handleFilter(e.target.dataset.tag);
    }
  };

  this.setEvent = () => this.$element.addEventListener("click", handleClick);

  this.setEvent();
}
