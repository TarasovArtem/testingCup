/// <reference types="Cypress" />

class MainPage {
 
    getLogoAsta() {
        return cy.get('.main-logo')
    }
    getLogoAstaLink() {
        return cy.get('.col-sm-10 > a')
    }
    getLogoPgs() {
        return cy.get('.pgs-logo > .main-logo')
    }

    getTaskList() {
        cy.get('.task-list > .col-md-6 > a > h2')
    }

}
export default MainPage