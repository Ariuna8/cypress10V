import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../../../support/pageObjects/HomePage"
import ProductPage from "../../../../support/pageObjects/productPage";

const homePage = new HomePage()
const productPage = new ProductPage()
let name
Given('I open ecommerce page', ()=>{
  cy.visit(Cypress.env('baseUrl') + '/angularpractice/')
})

//When I add items to Cart
When('I add items to Cart', function(){
  homePage.getShopTab().click()

  this.data.productName.forEach(function (element) {
    cy.selectProduct(element)
  })
  productPage.checkoutButton().click()
})
//And Validate the total prices
And('Validate the total prices', ()=> {
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
})
  //    Then Select the country submit and verify Thank you
Then('Select the country submit and verify Thank you', ()=>{
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

// When I fill the form details
When('i fill the form details', function (dataTable){
  //[bob, male][]
  name = dataTable.rawTable[1][0]
  homePage.getEditBox().type(dataTable.rawTable[1][0])
  homePage.getGender().select(dataTable.rawTable[1][1])
})

// Then Validate the forms behaviour
Then('validate the forms behaviour', function (){
  homePage.getTwoWADataBinding().should('have.value', name)
  homePage.getEditBox().should('have.attr', 'minlength', '2')
  homePage.getEnterp().should('be.disabled')
  Cypress.config('defaultCommandTimeout', 8000)
})

// And Select the shop Page
And('select the shop Page', function (){
  homePage.getShopTab().click()
})