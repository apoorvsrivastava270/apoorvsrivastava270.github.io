/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        Poiret: ["Poiret One","sans-serif"],
        Cinzel: ["Cinzel Decorative","cursive"],
        Lato: ["Lato","sans-serif"],
      },
    },
    screens:{
      '2xl':'1100px',
      'xl':'811px',
      'lg':'612px',
    },
  },
  plugins: [],
}
