import { envDetails } from "./src/data/env";

const { defineConfig } = require("cypress");

module.exports = defineConfig({
    viewportHeight:1080, 
    viewportWidth:1920,
  e2e: {
    baseUrl: envDetails.baseUrl,
    screenshotOnRunFailure:true,
    "screenshotsFolder": "reports/assets",
    specPattern:'cypress/specs/**.spec.ts'
  },
  "reporter": "cypress-multi-reporters",
    "reporterOptions": {
        "reporterEnabled": "mochawesome",
        "mochawesomeReporterOptions": {
            "reportDir": "reports/mocha",
            "html": true,
            "embeddedScreenshots": true,
            "charts": true
        }
    },
    video: true,
    videosFolder: 'reports/videos'
});
