/// <reference types="Cypress" />
import MainPage from './mainPage';
import TaskPage1 from './taskPage1';




class Navigation {
    static mainPage(): MainPage {
        cy.visit('/');
        return new MainPage;
    }

    static taskPage1(): TaskPage1 {
        cy.visit('/task_1');
        return new TaskPage1;
    }
}
export default Navigation