Mochawesome reporter
1. node_modules/.bin/cypress run - install mochawesome reporter
2. node_modules/.bin/cypress run - install mocha

1. node_modules/.bin/cypress run - run cypress all tests headless
2. npx cypress run --record --key #KEY - run in dashboard tests
3. node_modules/.bin/cypress --spec cypress/integration/examples/test9Framework.spec.js --env url=example --headed

Jenkins
1. freestyle project
2. write path for local or git repo
3. parametrized build with different scripts
4. in configure add build step (execute shell command - it is better with npm) npm run "$script"
5. build test (run test cases in dashboard) 

cucumber
1. npm install --save-dev cypress-cucumber-preprocessor - download 
2. in config:
const cucumber = require('cypress-cucumber-preprocessor').default
setupNodeEvents(on, config) {
   on('file:preprocessor', cucumber())
   },
   specPattern: 'cypress/integration/examples/BDD/*.feature'
3. in package.json:
"cypress-cucumber-preprocessor": {
   "nonGlobalStepDefinitions": true
   }
4. in js tests:
   import { Given } from "cypress-cucumber-preprocessor/steps";
5. run tags:
   npx cypress-tags run -e TAGS="@Smoke" --headed --browser chrome

report cucumber HTML:
1. in package.json:
   "cucumberJson": {
   "generate": true,
   "outputFolder": "cypress/cucumber-json",
   "filePrefix": "",
   "fileSuffix": ".cucumber"
   }
2. run all tests
3. install plugin:
   npm install multiple-cucumber-html-reporter
4. in main project new js file:
   const report = require('multiple-cucumber-html-reporter');

report.generate({
jsonDir: './path-to-your-json-output/',
reportPath: './path-where-the-report-needs-to-be/',
metadata:{
browser: {
name: 'chrome',
version: '60'
},
device: 'Local test machine',
platform: {
name: 'ubuntu',
version: '16.04'
}
},
customData: {
title: 'Run info',
data: [
{label: 'Project', value: 'Custom project'},
{label: 'Release', value: '1.2.3'},
{label: 'Cycle', value: 'B11221.34321'},
{label: 'Execution Start Time', value: 'Nov 19th 2017, 02:31 PM EST'},
{label: 'Execution End Time', value: 'Nov 19th 2017, 02:56 PM EST'}
]
}
});
5. change the path in js file
6. run the file js, copy path of the  index file and open in browser