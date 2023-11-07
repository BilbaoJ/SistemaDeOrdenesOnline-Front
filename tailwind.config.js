/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors:{
        "rojo" : "#EF2E2E",
        "negro" : "#292F36",
        "gris" : "#D8D8D8",
        "blanco" : "#F6F4F3"
      },
      fontFamily: {
        'letra': ['Montserrat', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

