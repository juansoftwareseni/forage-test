/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#E50914",
        secondary: "#333",
        mainGrey: "#8C8C8C",
        mainBlack: "#141414",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        bg1: "url('/img/netflix.jpg')",
      },
    },
  },
  plugins: [],
};
