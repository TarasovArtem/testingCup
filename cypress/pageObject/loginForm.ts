/// <reference types="Cypress" />


class LoginForm {
  getLoginForm() {
    return cy.get('form');
  }

  getInputlogin() {
    return cy.get('#LoginForm__username');
  }
  getInputPassword() {
    return cy.get('#LoginForm__password');
  }
}

export default LoginForm