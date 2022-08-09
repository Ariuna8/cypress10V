/// <reference types="Cypress" />
import HomePage from "../pageObjects/HomePage"
import ProductPage from "../pageObjects/productPage";
const homePage = new HomePage()
const productPage = new ProductPage()
describe('Framework test', function () {
  before('', () => {
    cy.visit('https://rahulshettyacademy.com/angularpractice/')
    cy.fixture('example').then(function(data){
      this.data=data
    })
  })
  it('demo test', function () {
    homePage.getEditBox().type(this.data.name)
    homePage.getGender().select(this.data.gender)
    homePage.getTwoWADataBinding().should('have.value', this.data.name)
    homePage.getEditBox().should('have.attr', 'minlength', '2')
    homePage.getEnterp().should('be.disabled')
    Cypress.config('defaultCommandTimeout', 8000) //set up only in one test case
    homePage.getShopTab().click()

    this.data.productName.forEach(function (element){
    cy.selectProduct(element)
    })
    productPage.checkoutButton().click()
    cy.contains('Checkout').click()
    cy.get('#country').type('India')
    cy.get('.suggestions > ul > li > a').click()
    cy.get('#checkbox2').click({force: true}) //covered by element
    cy.get('input[type="submit"]').click()
    cy.get('.alert').then(function (element){ // resolving promise, catching obj in element
      const actualText = element.text()
      expect(actualText.includes('Success')).to.be.true
    })

  })
})
