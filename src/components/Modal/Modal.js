import styles from "./Modal.module.css";

export default function Modal({ innerText, router, path }) {
  const $app = document.querySelector(".app");
  this.$element = document.createElement("section");
  this.$element.classList.add(styles.modal_container);
  this.$element.innerHTML = `
    <div class=${styles.modal_outer}>
        <div class=${styles.modal_inner}>
            ${innerText}
        </div>
    </div>
`;

  $app.appendChild(this.$element);

  this.$element.addEventListener("click", (e) => {
    if (e.target && e.target.classList.contains(styles.modal_outer)) {
      this.close();
    }
  });

  this.open = () => this.$element.classList.add(styles.open);
  this.close = () => {
    this.$element.classList.remove(styles.open);
    router.navigate(path);
  };
}
