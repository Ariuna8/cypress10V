/// <reference types="Cypress" />
import HomePage from "../../support/pageObjects/HomePage"
import ProductPage from "../../support/pageObjects/productPage";

const homePage = new HomePage()
const productPage = new ProductPage()
describe('Framework test', function () {
  before('', () => {
    cy.visit(Cypress.env('baseUrl') + '/angularpractice/')
    cy.fixture('example').then(function (data) {
      this.data = data
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

    this.data.productName.forEach(function (element) {
      cy.selectProduct(element)
    })
    productPage.checkoutButton().click()
    let sum = 0
    cy.get('tr td:nth-child(4) strong').each((el, index, list) => {
      const amount = el.text()
      let res = amount.split(' ')
      res = res[1].trim()
      sum = Number(sum) + Number(res)
    }).then(function () {
      cy.log(sum)
    })
    cy.get('h3 strong').then(function (element) {
      const amount = element.text()
      let res = amount.split(' ')
      let total = res[1].trim()
      expect(Number(total)).to.equal(sum)
        })
    cy.contains('Checkout').click()
    cy.get('#country').type('India')
    cy.get('.suggestions > ul > li > a').click()
    cy.get('#checkbox2').click({force: true}) //covered by element
    cy.get('input[type="submit"]').click()
    cy.get('.alert').then(function (element) { // resolving promise, catching obj in element
      const actualText = element.text()
      expect(actualText.includes('Success')).to.be.true
    })

  })
})
