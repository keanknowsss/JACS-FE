/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#121416",
        container: "#1E2126",
        lightWhite: "#EFEFEF" 
      },
      fontFamily: {
        body: ["Montserrat"]
      }
    },
  },
  plugins: [],
}
