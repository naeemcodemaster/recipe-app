// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4,
  },

  devtools: { enabled: false },
  compatibilityDate: "2024-11-24",

  // Use the correct Tailwind CSS module
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@nuxt/icon",
    "@nuxt/image",
  ],

  googleFonts:{
    families:{
      Montserrat:true,

    },

  },
  

});