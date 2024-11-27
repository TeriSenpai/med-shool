export default defineNuxtConfig({
  css: ["~/assets/styles/main.css", "~/assets/styles/forum.css", '~/assets/styles/archive.css'],
  build: {
    transpile: ["vuetify"],
  },
  compatibilityDate: "2024-11-20",
});

