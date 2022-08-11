const {defineConfig} = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default
module.exports = defineConfig({
    chromeWebSecurity: false,
    defaultCommandTimeout: 8000,
    pageLoadTimeout: 30000,
    env: {
      baseUrl: 'https://rahulshettyacademy.com',
    },
    retries: {
      runMode: 1,
      openMode: 3,
    },
    reporter: "mochawesome",
  projectId: "kgzihd",
  e2e: {
    specPattern: 'cypress/integration/examples/BDD/*.feature',
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
    },
  },
});
