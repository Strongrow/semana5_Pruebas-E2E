const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    video: true,
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    "video": true,
    "videoUploadOnPasses": true
  },
});
