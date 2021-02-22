// import "./public/email-pattern";
module.exports = {
  purge: {
    enabled: true,
    content: [
      "./components/**.js",
      "./pages/**/**/*.js",
      "./pages/**/*.js",
      "./pages/*.js",
    ],
  },
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
