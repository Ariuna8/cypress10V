/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe'

describe('Frame test', function () {
  it('demo example', function () {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.frameLoaded('#courses-iframe')
    cy.iframe().find('a[href="/mentorship"]').click().wait(4000)//to switch to iframe mood
    cy.iframe().find('h1[class*="pricing-title"]').should('have.length', 2)
  });
});