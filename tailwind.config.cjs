/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "wk-green": "#1E3D2F",
        "wk-olive": "#A3B18A",
        "wk-cream": "#F5F1E7",
      },
      fontFamily: {
        serifHeading: ['"Playfair Display"', "serif"],
        ui: ['"Inter"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
