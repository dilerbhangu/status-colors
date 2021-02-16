// import "./public/email-pattern";
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        logo: ["Redressed"],
      },
      backgroundImage: {
        bg_image: "url('/email-pattern.png')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
