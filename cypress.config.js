const {defineConfig} = require("cypress");

module.exports = defineConfig({
  projectId: "9b2puc",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    chromeWebSecurity: false,
    defaultCommandTimeout: 8000,
    pageLoadTimeout: 30000,
    specPattern: 'cypress/integration/examples/*',
    env: {
      baseUrl: 'https://rahulshettyacademy.com',
    },
    retries: {
      runMode: 1,
      openMode: 3,
    },
    reporter: "mochawesome",
  },
});
