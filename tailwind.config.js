/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#25314C",
        clr_white_1: "#F8F9FB",
        clr_blue_2: "#396CE8",
        clr_gray: "#EAEEF5",
        clr_gray_dark: "#8B97B4",
        clr_green: "#58BF63",
        clr_green_red: "#40A84B",
        clr_white_gray: "#DDE2EB",
      },
    },
  },
  plugins: [],
};
