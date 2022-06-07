module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        // success: "require('/images/confeti.png')",
      },
    },
    colors: {
      myGray: "#f8f8f8",
      myGreen: "#2CB34F",
      white: "#ffffff",
      borderGray: "#343a4314",
      bgBlack: "#111321",
    },
    fontFamily: {
      raleway: "Raleway",
    },
  },
  plugins: [],
};
