/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      danger: "#C8322B",
      text_danger: "#E33B32",
      primary: "#026735",
      sub_primary: "#EFFFF7",
      bg_secondary:"#F8F9FB",
      secondary: "#FFC700",
      light: "#E5E5E7",
      white: "#ffffff",
    },
    extend: {
      boxShadow: {
        '3xl': '-4px 0px 2px 0px rgba(0,0,0,0.21) inset',
      }
    },
  },
  plugins: [],
};
