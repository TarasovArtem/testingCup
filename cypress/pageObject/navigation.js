/// <reference types="Cypress" />

class Navigation {
    navigation() {
        return cy.visit('/');
    }
}
export default Navigation