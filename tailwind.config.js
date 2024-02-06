/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: { sans: "Inter var" },
    extend: {},
    colors: {
      transparent: "transparent",
      primaryGray: "#938E8D",
      primaryBlue: "#336299",
      primaryWhite: "#F2F2F2",
      primaryBlack: "#261D1B",
      primaryRed: "#D91A1A",
      secondaryBlack: "#938E8D",
      secondaryRed: "#D95858",
      darkBlue: "#364C66",
      secondaryWhite: "#EDEDED",
      textColor: "#212529",
      textColor2: "#261D1B",
      backgroundWhite: "#F2F2F2",
      inactive: "#DEDDDC",
      green800: "#0A3622",
      green100: "#D1E7DD",
      red100: "#F8D7DA",
      red800: "#58151C",
    },
  },
  plugins: [],
};
