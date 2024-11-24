/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      colors:{
        "primaryColor":"#f79f1a",
      "secondaryColor":"#046E1B",
      "normalColor":"#292727"
      }
    },
    fontFamily:{
      Montserrat:"Montserrat, sans-serif"
    },
    container:{
      center:true,
      padding:"2rem"
    }
  },
  plugins: [],
}

