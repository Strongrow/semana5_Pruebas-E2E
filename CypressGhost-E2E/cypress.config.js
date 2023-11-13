const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'f1nghf',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
