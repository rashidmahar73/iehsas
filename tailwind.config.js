/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}", "./src/components/**/*.{js,jsx}"],
  theme: {
    extend: {},
    screens: {
      xs: "320px",
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
    },
  },
  plugins: [],
};

// xs: "320px",
// sm: "576px",
// md: "960px",
// lg: "1440px",