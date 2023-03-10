/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        red: "#76388D",
        blue: "#3B69B1",
        green: "#3EB073",
        yellow: "#FDCF2A",
        purple: "#76388D",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },

  plugins: [],
};
