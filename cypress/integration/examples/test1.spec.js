/// <reference types="cypress" />
describe('My first test suite', function (){
  it('my first test case', function (){
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
    cy.wait(5000)
    cy.get('.search-keyword').type('ca')
    cy.wait(2000)
    cy.get('.product:visible').should('have.length', 4)//to see only visible elements
    cy.get('.products').find('.product').should('have.length', 4)
    cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()
    cy.get('.products').as('productLocator')
    cy.get('@productLocator').find('.product').each(($el, index,$list ) => {
      const textVeg = $el.find('h4.product-name').text()
      if(textVeg.includes('Cashews')){
        cy.wrap($el).find('button').click()
      }
    })
    cy.get('.brand').then(function(logoelement){
      cy.log(logoelement.text()) // basically the same as: const logo=cy.get('.brand'), but
    }) // with variable cypress get confused because of promises
  })
})