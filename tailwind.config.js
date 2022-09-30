/* eslint-disable no-undef */

module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
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
        'vinta-lexend':"Lexend",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
