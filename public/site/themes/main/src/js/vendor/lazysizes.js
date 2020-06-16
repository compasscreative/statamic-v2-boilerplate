function loadLazyBg(target, bestImage, betterImage, okImage, fallbackImage) {
  var bg = bestImage
    ? bestImage
    : betterImage
    ? betterImage
    : okImage
    ? okImage
    : fallbackImage;

  target.style.backgroundImage = "url(" + bg + ")";
}

document.addEventListener("lazybeforeunveil", function (e) {
  var bgSm = e.target.getAttribute("data-bgSm");
  var bgLg = e.target.getAttribute("data-bgLg");
  var bgXl = e.target.getAttribute("data-bgXl");
  var bg = e.target.getAttribute("data-bg");

  if (window.innerWidth > 1400) {
    loadLazyBg(e.target, bgXl, bgLg, bgSm, bg);
  } else if (window.innerWidth > 768) {
    loadLazyBg(e.target, bgLg, bgSm, bgXl, bg);
  } else {
    loadLazyBg(e.target, bgSm, bgLg, bgXl, bg);
  }
});
