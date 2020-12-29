/// <reference types="cypress" />


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
  
    getDownloadFile() {
      return cy.contains('Pobierz plik');
    }
  
    getLogOut() {
      return cy.contains('Wyloguj');
    }

}
export default LoginForm