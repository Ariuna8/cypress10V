/// <reference types="Cypress" />
describe('My fourth test suite', function () {

  it('my test case', function () {
    //checkbox
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.wait(5000)
    cy.get('#alertbtn').click()
    cy.get('[value="Confirm"]').click()
    //window alert
    cy.on('window:alert', (str) => {
      expect(str).to.equal('Hello , share this practice page and share your knowledge')
    })
    //window confirm
    cy.on('window:confirm', (str) => {
      expect(str).to.equal('Hello , Are you sure you want to confirm?')
    })
    //open new web page at the same window by removing attr target
    cy.get('#opentab').invoke('removeAttr', 'target').click()
  })
})