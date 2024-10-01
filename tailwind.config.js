/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}', '!node_modules/**'],
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    extend: {},
  },
  plugins: [],
}
