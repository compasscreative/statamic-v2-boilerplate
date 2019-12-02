const loadFormLabels = () => {
  if (document.querySelector('.js-form-label')) {
    const formInputs = document.querySelectorAll('.js-form-input');
    const activeClasses = ['opacity-100', 'text-xs'];
    const disabledClasses = ['opacity-0', 'text-base'];

    formInputs.forEach(function(element) {
      const label = document.querySelector(`label[for="${element.id}"]`);

      element.addEventListener('focus', function(e) {
        label.classList.add(...activeClasses);
        label.classList.remove(...disabledClasses);
        element.placeholder = '';
      });
      element.addEventListener('blur', function(e) {
        if (this.value == '') {
          label.classList.remove(...activeClasses);
          label.classList.add(...disabledClasses);
          element.placeholder = this.dataset.placeholder;
          return;
        }
        label.classList.add(...activeClasses);
        label.classList.remove(...disabledClasses);
      });
    });
  }
};
