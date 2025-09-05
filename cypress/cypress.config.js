const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: 'https://www.yahoo.com',
    viewportWidth: 1280,
    viewportHeight: 800,
  },
});