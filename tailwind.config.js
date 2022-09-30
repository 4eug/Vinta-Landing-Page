/* eslint-disable no-undef */

module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        'bg-color': '#F7B904',
        'primary-text-color': '#FFFFFF',
        'second-text-color': '#111928',
      },
      fontSize: {
        'big-font-size': '69px',
        'small-font-size': '17px',
      },
      lineHeight: {
        'big-line-weight': '81px',
        'small-line-weight': '30px',
      },
      fontFamily: {
        'vinta-lexend':"Lexend",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
