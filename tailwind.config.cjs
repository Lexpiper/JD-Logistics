/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#49c1d9",
        secondary: "#200123",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        ora: "#f14137",
      },
      fontFamily: {
        mont: ['Montserrat', 'sans-serif'],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
