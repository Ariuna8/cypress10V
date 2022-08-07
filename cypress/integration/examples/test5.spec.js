/// <reference types="Cypress" />
describe('My fourth test suite', function () {

  it('my test case', function () {
    //checkbox
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.wait(5000)
    cy.get('tr td:nth-child(2)').each(($el, index,$list ) => {
      const text = $el.text()
      if(text.includes('Python')) {
        cy.get('tr td:nth-child(2)').eq(index).next().then(function(price){
          const priceText = price.text() // next for next sibling element
          expect(priceText).to.equal('25')
        })
      }
    })
  })
})
