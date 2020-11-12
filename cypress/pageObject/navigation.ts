import MainPage from './mainPage';
/// <reference types="Cypress" />

class Navigation {
    static mainPage(): MainPage {
        cy.visit('/');
        return new MainPage;
    }
}
export default Navigation