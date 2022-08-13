/// <reference types="Cypress" />

describe('Mock tests', function () {
  it('first test', function () {
    cy.visit('https://rahulshettyacademy.com/angularAppdemo/')
    cy.intercept('GET', 'https://rahulshettyacademy.com/Library/GetBook.php?AutoName=shetty',
      (req) => {
        req.url = 'https://rahulshettyacademy.com/Library/GetBook.php?AutoName=malhotra'
        req.continue((res) => {
          expect(res.statusCode).to.equal(403)
        })
      }).as('dummyURL')

    cy.get('button[class="btn btn-primary"]').click()
    cy.wait('@dummyURL')
  })
})
