/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#121416",
        lightWhite: "#EFEFEF",
        container: "#1E2126", 
      },
      fontFamily: {
        body: ["Montserrat"]
      }
    },
  },
  plugins: [],
}
