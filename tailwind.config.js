/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    '*.html',
    'views/**/*.html',
    'views/**/**/*.html',
    'js/main.js'
  ],
  theme: {
    fontFamily:{
      sans: ['Barlow Condensed', 'sans-serif'],
    },
    extend: {},
  },
  corePlugins: {
    preflight: true,
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}