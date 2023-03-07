/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/slices/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1279px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1023px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }
    },
    colors: {
      main: "#3C58BF",
      gradientstart: "#330867",
      gradientend: "#31a7bb",
      textcolor: "#1E1E1E",
      neongreen: "#00F5A0",
      stext: "#8A2BE2",
      white: "#FFF",
      black: "#000",
      secondary: "#D9D9D9",
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
