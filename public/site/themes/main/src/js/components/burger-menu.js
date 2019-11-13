let hamburger = {
  navToggle: document.querySelector('.js-burger-trigger'),
  navToggleFirst: document.querySelector('.js-burger-trigger--first-child'),
  navToggleSecond: document.querySelector('.js-burger-trigger--second-child'),
  navToggleThird: document.querySelector('.js-burger-trigger--third-child'),
  nav: document.querySelector('.js-main-nav'),
  navOn: false,
  doToggle: function(turnOff) {
    // show nav
    if (this.navOn == false && turnOff != true) {
      this.nav.classList.add('opacity-100');
      this.nav.classList.add('h-full');
      this.navToggleFirst.style.transform = 'rotate(45deg)';
      this.navToggleFirst.style.top = '8px';
      this.navToggleThird.style.transform = 'rotate(-45deg)';
      this.navToggleThird.style.top = '-12px';
      this.navToggleSecond.style.width = '1px';
      this.navToggleSecond.style.top = '-2px';
      this.navToggleSecond.style.left = '15px';
      this.navOn = true;
      return;
    }

    // hide nav
    this.nav.classList.remove('opacity-100');
    this.nav.classList.remove('h-full');
    this.navToggleFirst.style.transform = 'rotate(0deg)';
    this.navToggleFirst.style.top = '0';
    this.navToggleThird.style.transform = 'rotate(0deg)';
    this.navToggleThird.style.top = '0';
    this.navToggleSecond.style.width = '32px';
    this.navToggleSecond.style.top = '0px';
    this.navToggleSecond.style.left = '0px';
    this.navOn = false;
  }
};

hamburger.navToggle.addEventListener('click', function(e) {
  e.preventDefault();
  hamburger.doToggle(e);
});
