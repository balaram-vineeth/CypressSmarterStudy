These tests use `Cypress` as test automation framework, and `mochawesome`. 
## Running the tests
### Running locally
1. Run `npm install` to install all the dependencies
2. Run `npm test` to run the tests locally.

### Running in GitHub
To run the test in GitHub, the pipeline is configured as an on demand pipeline. Follow the below steps to run the pipeline
1. Navigate to the Actions menu 
2. Select the workflow named `Run UI test`
3. Click on the Run Workflow option
4. The branch is selected as main by default, click om Run workflow
5. Once the test is complete the report can be downloaded from the Artifacts section

**NOTE** - There is some flakiness when running online; this is yet to be corrected