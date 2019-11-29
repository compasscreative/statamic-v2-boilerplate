if (!!window.IntersectionObserver) {
  let animationObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          console.log(entry);
          entry.target.classList.remove('opacity-25');
          entry.target.classList.add("opacity-100");
        }
      });
    },
    { rootMargin: "0px 0px -200px 0px" }
  );
  document.querySelectorAll(".animated").forEach(element => {
    animationObserver.observe(element);
  });
} else document.querySelector("#warning").style.display = "block";