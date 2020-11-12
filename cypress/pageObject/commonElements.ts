/// <reference types="Cypress" />

class CommonElemetns {
    getOpenDetails() {
        return cy.get('.open-details')
    }
  
    getClose() {
        return cy.get('.close');
    }
          
    getMainReset() {
        return cy.get('#main-reset')  
    }
  
}
export default CommonElemetns