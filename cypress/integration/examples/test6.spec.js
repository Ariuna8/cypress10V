/// <reference types="Cypress" />
describe('My fourth test suite', function () {

  it('my test case', function () {
    //checkbox
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.wait(5000)
    //cy.get('div.mouse-hover-content').invoke('show')//apply to parent invoke method
    cy.contains('Top').click({force:true}) //even its hidden element it will click because of force
    cy.url().should('include', 'top')

  })
})
