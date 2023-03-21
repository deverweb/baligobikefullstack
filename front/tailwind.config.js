/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",

  content: ["./components/**/*.{js,vue,ts}", "./layouts/**/*.vue", "./pages/**/*.vue", "./plugins/**/*.{js,ts}"],
  theme: {
    screens: {
      "2xl": { max: "1600px" },
      xl: { max: "1440px" },
      lg: { max: "1200px" },
      md: { max: "990px" },
      sm: { max: "768px" },
      xsm: { max: "600px" },
      xxsm: { max: "480px" },
      lil: { max: "380px" },
    },

    extend: {
      fontFamily: {
        Euroblack: "Eurostile-Extended-Black",
        Helvbold: "helveticaneuecyr-bold",
        Helvreg: "helveticaneuecyr-roman",
        Helvmed: "helveticaneuecyr-medium",
      },
      colors: {
        dark: {
          DEFAULT: "#111111",
          800: "#313131",
          700: "#202020",
          600: "#1A1A1A",
          500: "#282828",
          400: "#2E2E2E",
          900: "#2B2B2B",
          200: "#1E1E1E",
          300: "#181818",
        },
        light: {
          DEFAULT: "#FBFBFD",
          200: "#9fa19f",
        },
        green: "#30B21B",
      },
    },
  },
  plugins: [],
}
