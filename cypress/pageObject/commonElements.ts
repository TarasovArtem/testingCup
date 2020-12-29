/// <reference types="cypress" />

class CommonElemetns {

    getRoot() {
        return cy.root();
    }

    getUserData() {
        return cy.fixture('userData');
    } 

    getLogin() {
        return cy.fixture('login');
    }

    getPayment() {
        return cy.fixture('paymentByCard');
    }
    
    getOpenDetails() {
        return cy.get('.open-details');
    }
  
    getClose() {
        return cy.get('.close', {timeout: 10000});
    }
          
    getMainReset() {
        return cy.get('#main-reset'); 
    }
  
}
export default CommonElemetns