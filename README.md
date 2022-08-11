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