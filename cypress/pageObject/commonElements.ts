/// <reference types="Cypress" />

class CommonElemetns {
    getOpenDetails() {
        return cy.get('.open-details')
    }
  
    getClose() {
        return cy.get('.close', {timeout: 10000});
    }
          
    getMainReset() {
        return cy.get('#main-reset')  
    }
  
}
export default CommonElemetns