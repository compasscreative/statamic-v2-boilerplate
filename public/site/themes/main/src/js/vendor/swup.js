let enableGTM = false;
let debugSwup = false;

let swupPlugins = [new SwupFadeTheme(), new SwupScrollPlugin(), new SwupPreloadPlugin()];

// don’t forget to set virtualPageView in GTM triggers
if (enableGTM) swupPlugins.push(new SwupGtmPlugin());
if (debugSwup) swupPlugins.push(new SwupDebugPlugin());

const swup = new Swup({
  animationSelector: '[class*="swup-transition-"]',
  linkSelector: '[data-swup-link]',
  plugins: swupPlugins
});

let scrollPositions = [];
let scrollToSavedPosition = null;

swup.on('clickLink', () => {
  scrollPositions[window.location.href] = window.scrollY;
});

swup.on('popState', () => {
  scrollToSavedPosition = true;
});

swup.on('animationInStart', () => {
  if (scrollToSavedPosition) {
    swup.scrollTo(document.body, scrollPositions[window.location.href]);
    scrollToSavedPosition = false;
    return;
  }

  swup.scrollTo(document.body, 0);
  hamburger.doToggle(true);
  init();
});
