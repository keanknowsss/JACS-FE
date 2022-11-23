/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#121416",
        lightWhite: "#EFEFEF",
        secondary: {
          default: "#F66B0E",
          light: "#F19B61"
        } 
      },
      fontFamily: {
        main: ["Montserrat"]
      }
    },
  },
  plugins: [],
}
