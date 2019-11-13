const localURL = 'local.statamic-boilerplate.com'; // *** change this to your local url ***

const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');

require('laravel-mix-purgecss');

mix
  .postCss('./src/css/main.css', './css/', [
    require('postcss-import'),
    require('tailwindcss'),
    require('postcss-nesting')
    //, require('autoprefixer')
  ])
  .sass('./src/css/vendor/vendor.scss', './css/', {
    sassOptions: {
      outputStyle: 'nested'
    }
  })
  .options({ processCssUrls: false })
  .copy(
    ['./node_modules/photoswipe/dist/default-skin/default-skin.png', './node_modules/photoswipe/dist/default-skin/default-skin.svg', './node_modules/photoswipe/dist/default-skin/preloader.gif'],
    './img/photoswipe/'
  )
  // Use this if you want to import css files from node_modules
  // .combine([
  // to set the assets folder, we’re importing these in vendor/photoswipe.scss
  // ./css/vendor.css'
  // './node_modules/photoswipe/dist/photoswipe.css',
  // './node_modules/photoswipe/dist/default-skin/default-skin.css'
  // ], './vendor.css')
  .combine(
    [
      './node_modules/photoswipe/dist/photoswipe.js',
      './node_modules/photoswipe/dist/photoswipe-ui-default.min.js',
      './node_modules/lazysizes/lazysizes.min.js',
      './node_modules/headroom.js/dist/headroom.js',
      './node_modules/swup/dist/swup.js',
      './node_modules/@swup/fade-theme/dist/SwupFadeTheme.js',
      './node_modules/@swup/debug-plugin/dist/SwupDebugPlugin.js',
      './node_modules/@swup/scroll-plugin/dist/SwupScrollPlugin.js',
      './node_modules/@swup/preload-plugin/dist/SwupPreloadPlugin.js',
      './node_modules/@swup/gtm-plugin/dist/SwupGtmPlugin.js',
      './src/js/vendor/*.js'
    ],
    './js/vendor.js'
  )
  .babel(['./src/js/components/*.js', './src/js/init.js'], './js/main.js')
  .browserSync({
    proxy: localURL,
    files: ['./tailwind.config.js', './src/css/**/*.css', './src/js/components/*.js', './templates/*.html', './partials/*.html']
  });

// ==== purgeCSS
if (mix.inProduction()) {
  mix.purgeCss({
    enabled: true,
    globs: [
      path.join(__dirname, 'layouts/*.html'),
      path.join(__dirname, 'templates/*.html'),
      path.join(__dirname, 'templates/**/*.html'),
      path.join(__dirname, 'partials/*.html'),
      path.join(__dirname, 'partials/**/*.html'),
      path.join(__dirname, 'js/**.js'),
      path.join(__dirname, 'img/**.svg')
    ],
    extensions: ['html', 'js', 'php', 'svg'],
    whitelistPatterns: [/$lg-/]
  });
}
