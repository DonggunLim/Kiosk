import "./style.css";

const FILTER_ITEM = ["밥", "면", "기타"];

export default function FilterMenu({
  $target,
  selected,
  onClick: handleFilter,
}) {
  this.$element = document.createElement("div");
  this.$element.classList.add("filter_container");
  this.$element.innerHTML = `
    <ul class='filter_list'>
    ${FILTER_ITEM.map((filter) => {
      return `<li class="filter_item ${
        filter === selected && "active"
      }" data-tag="${filter}">${filter}</li>`;
    }).join("")}
    </ul>
  `;
  $target.appendChild(this.$element);

  const handleClick = (e) => {
    if (e.target && e.target.classList.contains("filter_item")) {
      this.$element.querySelectorAll(".filter_item").forEach(($li) => {
        $li.classList.remove("active");
      });
      e.target.classList.add("active");
    }

    handleFilter(e.target.dataset.tag);
  };

  this.setEvent = () => this.$element.addEventListener("click", handleClick);

  this.setEvent();
}
