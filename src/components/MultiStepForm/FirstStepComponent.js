import styles from "./FirstStepComponent.module.css";

export default function FirstStepComponent({
  $target,
  onNext,
  onSaveSelection,
}) {
  this.$element = document.createElement("div");
  this.$element.classList.add(styles.firstStep);
  this.$element.innerHTML = `
          <div class=${styles.container}>
            <button class=${styles.here}>먹고가기</button>
            <button class=${styles.togo}>포장하기</button>
          </div>
      `;

  $target.appendChild(this.$element);

  this.$element.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target && e.target.classList.contains(styles.here)) {
      onSaveSelection("here");
      onNext();
    } else if (e.target && e.target.classList.contains(styles.togo)) {
      onSaveSelection("togo");
      onNext();
    }
  });
}
