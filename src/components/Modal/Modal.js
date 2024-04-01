import "./style.css";

export default function Modal({ innerText, router, path }) {
  const $app = document.querySelector(".app");
  this.$element = document.createElement("section");
  this.$element.classList.add("modal_container");
  this.$element.innerHTML = `
    <div class="modal_outer">
        <div class="modal_inner">
            ${innerText}
        </div>
    </div>
`;

  $app.appendChild(this.$element);

  this.$element.addEventListener("click", (e) => {
    if (e.target && e.target.classList.contains("modal_outer")) {
      this.close();
    }
  });

  this.open = () => this.$element.classList.add("open");
  this.close = () => {
    this.$element.classList.remove("open");
    router.navigate(path);
  };
}
