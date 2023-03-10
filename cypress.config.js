const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
   // baseUrl: "opensource-demo.orangehrmlive.com",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
