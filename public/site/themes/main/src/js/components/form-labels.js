if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}

const loadFormLabels = () => {
  if (document.querySelector(".js-form-label")) {
    const formInputs = document.querySelectorAll(".js-form-input");
    const activeClasses = ["opacity-100", "text-xs", "text-hortico-gray"];
    const disabledClasses = ["opacity-0", "text-2xs", "text-hortico-gray"];

    formInputs.forEach(formInput => {
      const label = document.querySelector(`label[for="${formInput.id}"]`);

      formInput.addEventListener("focus", function(e) {
        label.classList.add(...activeClasses);
        label.classList.remove(...disabledClasses);
        this.placeholder = "";
      });
      formInput.addEventListener("blur", function(e) {
        if (this.value == "") {
          label.classList.remove(...activeClasses);
          label.classList.add(...disabledClasses);
          this.placeholder = this.dataset.placeholder;
          return;
        }
        label.classList.add(...activeClasses);
        label.classList.remove(...disabledClasses);
      });
    }
  }
};
