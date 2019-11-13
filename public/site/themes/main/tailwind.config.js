// /*

// Tailwind - The Utility-First CSS Framework

// A project by Adam Wathan (@adamwathan), Jonathan Reinink (@reinink),
// David Hemphill (@davidhemphill) and Steve Schoger (@steveschoger).

// Welcome to the Tailwind config file. This is where you can customize
// Tailwind specifically for your project. Don't be intimidated by the
// length of this file. It's really just a big JavaScript object and
// we've done our very best to explain each section.

// View the full documentation at https://tailwindcss.com.
// */

// let defaultConfig = require('tailwindcss/defaultConfig');

module.exports = {
  theme: {
    container: {
      center: true
    },
    fontFamily: {
      sans: ['system-ui', 'BlinkMacSystemFont', '-apple-system', 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'sans-serif'],
      serif: ['Constantia', 'Lucida Bright', 'Lucidabright', 'Lucida Serif', 'Lucida', 'DejaVu Serif', 'Bitstream Vera Serif', 'Liberation Serif', 'Georgia', 'serif'],
      mono: ['Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace']
    },
    aspectRatio: {
      square: [1, 1],
      '16/9': [16, 9],
      '4/3': [4, 3],
      '21/9': [21, 9]
    },
    extend: {
      colors: {
        // transparent: 'rgba(0,0,0,0)'
      },
      fontSize: {
        '3xs': '.5rem',
        '2xs': '.7rem',
        '6xl-flex': 'calc(2vw + 2rem)',
        '5xl-flex': 'calc(2vw + 1.375rem)',
        '4xl-flex': 'calc(1.5vw + 1.125rem)'
      },
      screens: {
        xxl: '1600px'
      },
      spacing: {
        '2px': '2px',
        '3px': '3px'
      },
      maxWidth: {
        content: '1400px'
      }
    }
  },
  plugins: [
    require('tailwindcss-grid')({
      grids: [2, 3, 5, 6, 8, 10, 12],
      gaps: {
        0: '0',
        4: '1rem',
        8: '2rem',
        '4-x': '1rem',
        '4-y': '1rem'
      },
      autoMinWidths: {
        '16': '4rem',
        '24': '6rem',
        '300px': '300px'
      },
      variants: ['responsive']
    }),
    require('tailwindcss-transitions')(),
    require('tailwindcss-aspect-ratio')()
  ],
  variants: {
    aspectRatio: ['responsive'],
    transitionProperty: ['responsive'],
    transitionDuration: ['responsive'],
    transitionTimingFunction: ['responsive'],
    transitionDelay: ['responsive'],
    willChange: ['responsive']
  }
};
