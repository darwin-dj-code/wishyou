module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      montserrat: ["Montserrat", "sans-serif"],
    },
    colors: {
      primaryText: "#45A29E",
      secondaryText: "#66FCF1",
      thirdText: "#41C8C2",

      black: "#000",
      white: "#fff",
    },
    extend: {
      backgroundImage: {
        backgroundPattern: "url('/backgroundPattern.svg')",
        backgroundSpeedEffect: "url('/speedEffect.svg')",
      },
    },
  },
  plugins: [],
};
