Mochawesome reporter
1. node_modules/.bin/cypress run - install mochawesome reporter
2. node_modules/.bin/cypress run - install mocha

1. node_modules/.bin/cypress run - run cypress all tests headless
2. npx cypress run --record --key 83e8f6bf-7269-461f-8722-5610cc542142 - run in dashboard tests
3. node_modules/.bin/cypress --spec cypress/integration/examples/test9Framework.spec.js --env url=example --headed

1. Jenkins
2. freestyle project
3. write path for local or git repo
4. parametrized build with different scripts
5. in configure add build step (execute shell command - it is better with npm) npm run "$script"
6. build test (run test cases in dashboard) 
