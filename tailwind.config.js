/* eslint-disable no-undef */
const { screens} = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        xxxsm: "200px",
        xxsm: "340px",
        xsm: "480px",
        ...screens,
      },
      colors: {
        'bg-color': '#F7B904',
        'primary-text-color': '#FFFFFF',
        'secondary-text-color': '#111928',
      },
      fontSize: {
        'big-font-size': '69px',
        'mobile-big-font-size': '49px',
        'small-font-size': '17px',
      },
      fontWeight: {
        'font-medium':'500',
        'font-regular':'400',
      },
      lineHeight: {
        'big-line-weight': '81px',
        'mobile-big-line-weight': '57px',
        'small-line-weight': '30px',
      },
      fontFamily: {
        sans: ["Lexend", "system-ui", "sans"],
        monospace: ["DM Mono", "monospace"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
