export default class ProductPage {

  checkoutButton(){
    return cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link')
}
}
