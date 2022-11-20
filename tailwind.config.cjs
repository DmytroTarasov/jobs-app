/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  mode: "jit",
  theme: {
    container: {
      center: true
    },
    extend: {    
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        proximaNova: ['Proxima Nova', 'sans-serif']
      },
    },
  },    
  plugins: [],
}
