import { envDetails } from "./src/data/env";

const { defineConfig } = require("cypress");

module.exports = defineConfig({
    viewportHeight:1080, 
    viewportWidth:1920,
  e2e: {
    baseUrl: envDetails.baseUrl,
    screenshotOnRunFailure:true,
    "screenshotsFolder": "reports/assets",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern:'src/specs/**.spec.ts'
  },
//   reporter: "cypress-mochawesome-reporter",
//   reporterOptions: {
//     // reportDir: "reports/mocha",
//     charts: true,
//     reportPageTitle: "My Test Suite",
//     embeddedScreenshots: true,
//     inlineAssets: true,
//         "mochawesomeReporterOptions": {
//           reportDir: "reports/mocha",
//             "quite": true,
//             "overwrite": false,
//             "html": true,
//             "json": false,
//             'embeddedScreenshots': true,
//         }
// },
//   video: false
  "reporter": "cypress-multi-reporters",
    "reporterOptions": {
        "reporterEnabled": "mochawesome",
        "mochawesomeReporterOptions": {
            "reportDir": "reports/mocha",
            "quite": true,
            "overwrite": true,
            "html": true,
            "embeddedScreenshots": true,
            "charts": true
        }
    },
    video: true,
    videosFolder: 'reports/videos'
});
