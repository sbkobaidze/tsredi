/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      main: "#3C58BF",
      textcolor: "#1E1E1E",
      neongreen: "#00F5A0",
      stext: "#8A2BE2",
      white: "#FFF",
      black: "#000",
      secondary: "#D9D9D9",
      test1: "#330867",
      test2: "#31a7bb",
    },
    fontFamily: {
      main: ["Kanit"],
      secondary: ["Poppins"],
    },
    animation: {
      scroll: "scroll 20s linear infinite",
    },
    extend: {
      keyframes: {
        scroll: {
          "0%": {
            transform: "translateX(0)",
          },
          "100%": {
            transform: "translateX(calc(-100px*5))",
          },
        },
      },
    },
  },

  darkMode: "class",

  plugins: ["gatsby-plugin-postcss"],
}
