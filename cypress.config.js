const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'jadd4k',
  reporter : 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Reporting Kasir Aja WebApp',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  e2e: {
    video : false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on)
      on('task', {
        log(message){
          console.log(message)

          return null
        },
      })
    },
  },
});
