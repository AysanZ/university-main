/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      Poppins: "Poppins"
    },
    extend: {
      colors: {
        Teal: "#735688",
        HummingBird: "#A18EAF",
        yellow: "#e4d63b",
        Solitude: "#F5F5F5",
        gray: "#4B4B4C"
      },
      animation: {
        slide: "slide 25s linear infinite"
      },
      keyframes: {
        slide: {
          "0%,100%" : {transform: "translateX(5%)"},
          "50%": {transform: "translateX(-120%)"}
        }
      }
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
}