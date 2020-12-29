/// <reference types="cypress" />


class MainPage {
 
    getLogoAsta() {
        return cy.get('.main-logo');
    }

    getLogoAstaLink() {
        return cy.get('.col-sm-10 > a');
    }
    
    getLogoPgs() {
        return cy.get('.pgs-logo > .main-logo');
    }

    getTaskList() {
        return cy.get('.task-list > .col-md-6 > a > h2');
    }    
    
    getZadanie1() {
        return cy.contains('Zadanie 1');
    }

}
export default MainPage