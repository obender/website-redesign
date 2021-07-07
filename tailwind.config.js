module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#00DD80",
        secondary: "#ABAEB4",
        tirtiary: "#656565",
        fourth: "#00AA63",
        five: "#838383",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
