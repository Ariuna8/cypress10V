/// <reference types="Cypress" />
describe('My fourth test suite', function () {
  it('my test case', function () {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.wait(5000)
    cy.get('#opentab').then(function(el){
      const url=el.prop('href')
      cy.log(url)
      cy.visit(url)
    })
  })
})