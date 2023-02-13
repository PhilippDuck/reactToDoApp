/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        openmenu:  'openmenu 1s ease-in',
        closemenu:  'closemenu 1s ease-in',
    },
    },
  },
  plugins: [],
}