const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    video: true,
    nombreTag: "Nuevo Tag",
    colorTag: "2eb24b",
    descripcionTag: "Descripcion ejemplo ...."
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    "video": true,
    "videoUploadOnPasses": true,
    "muktiple":true
  },
});
