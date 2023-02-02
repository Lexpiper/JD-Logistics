/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  mode: "jit",
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern":
          "url('https://media.istockphoto.com/id/1262331996/photo/the-staff-prepares-the-delivery-box-on-the-motorcycle-for-delivery-to-customers.jpg?b=1&s=170667a&w=0&k=20&c=i-RuEI7tJvQdIxzK-aYSZORf6mZNTotjgBKmFYT5h7w=')",
        "service-img":
          "url('https://media.istockphoto.com/id/1307965024/photo/a-delivery-biker-looking-over-their-shoulder.jpg?b=1&s=170667a&w=0&k=20&c=vndCBGN8ukXdDYtbDl1ixXzkS-K5NxaZlGbyul9NJX8=')",
      },
      colors: {
        primary: "#49c1d9",
        secondary: "#200123",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        ora: "#f14137",
      },
      fontFamily: {
        mont: ["Montserrat", "sans-serif"],
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
