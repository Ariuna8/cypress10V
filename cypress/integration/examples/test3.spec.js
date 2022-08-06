/// <reference types="Cypress" />
describe('My third test suite', function () {

  it('my third test case', function () {
    //checkbox
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.wait(5000)
    cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')
    cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
    cy.get('input[type="checkbox"]').check(['option2', 'option3'])

    //static dropdown
    cy.get('select').select('option2').should('have.value', 'option2')

    //dynamic dropdown
    cy.get('#autocomplete').type('ind')
    cy.get('.ui-menu-item div').each(($el) => {
      if($el.text() === 'India') {
        cy.wrap($el).click()
      }
    })
    cy.get('#autocomplete').should('have.value','India')
    //visible invisible
    cy.get('#displayed-text').should('be.visible')
    cy.get('#hide-textbox').click()
    cy.get('#displayed-text').should('not.be.visible')
    cy.get('#show-textbox').click()
    cy.get('#displayed-text').should('be.visible')

    //radio buttons
    cy.get('[value="radio2"]').check().should('be.checked')
  })
})