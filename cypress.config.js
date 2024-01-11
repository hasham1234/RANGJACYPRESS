

const cucumber = require('cypress-cucumber-preprocessor').default
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl:"https://myrangja.com",
    specPattern:"cypress/e2e/*/*.cy.js",
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
    },
    
    //specPattern:"cypress/e2e/*.feature"
  },
  env:{
    URL:"https://myrangja.com/account/register"
  }
});
