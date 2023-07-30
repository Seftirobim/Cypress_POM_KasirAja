const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'jadd4k',
  e2e: {
    video : false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task', {
        log(message){
          console.log(message)

          return null
        },
      })
    },
  },
});
