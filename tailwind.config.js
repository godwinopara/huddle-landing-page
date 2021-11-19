module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    backgroundImage: {
      desktop: "url(/src/images/bg-desktop.svg)",
      mobile: "url(/src/images/bg-mobile.svg)",
    },
    extend: {
      colors: {
        purple: {
          950: "#674baf",
          970: "#e882e8",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
