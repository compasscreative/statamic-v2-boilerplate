function loadScrollObserver() {
  if (!!window.IntersectionObserver && !!NodeList.prototype.forEach) {
    var animationObserver = new IntersectionObserver(
      function (entries, observer) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("scroll-animate-active");
          }
        });
      },
      {
        rootMargin: "-100vh 0px -100vh 0px",
      }
    );
    document.querySelectorAll(".scroll-animate").forEach(function (element) {
      animationObserver.observe(element);
    });
  } else {
    document.querySelectorAll(".scroll-animate").forEach(function (element) {
      element.classList.add("scroll-animate-active");
    });
  }
}

loadScrollObserver();
