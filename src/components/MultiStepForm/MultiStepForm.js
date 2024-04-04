import styles from "./MultiStepForm.module.css";

export default function MultiStepForm({ $target, steps, data, router }) {
  this.state = { currentStep: 0, orderList: data };
  this.$element = document.createElement("form");
  this.$element.classList.add(styles.form);
  $target.appendChild(this.$element);

  this.setState = (name, data) => {
    this.state = { ...this.state, [name]: data };
    this.render();
  };

  this.nextStep = () => {
    if (this.state.currentStep < steps.length - 1) {
      this.setState("currentStep", this.state.currentStep + 1);
    }
  };

  this.prevStep = () => {
    if (this.state.currentStep > 0) {
      this.setState("currentStep", this.state.currentStep - 1);
    }
  };

  this.saveSelection = (selection) => {
    this.setState("selection", selection);
  };

  this.updateOrderList = (newOrder) => {
    this.setState("orderList", [...this.state.orderList, newOrder]);
  };

  this.resetState = () => {
    this.state = { currentStep: 0, orderList: [] };
  };

  this.render = () => {
    this.$element.innerHTML = ``;
    new steps[this.state.currentStep]({
      $target: this.$element,
      onNext: this.nextStep,
      onPrev: this.prevStep,
      orderList: this.state.orderList,
      selection: this.state.selection,
      onSaveSelection: this.saveSelection,
      onUpdateOrderList: this.updateOrderList,
      goHome: () => {
        this.resetState();
        router.navigate("/");
      },
    });
  };

  this.render();
}
