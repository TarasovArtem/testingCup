/// <reference types="Cypress" />
import MainPage from './mainPage';
import TaskPage1 from './taskPage1';
import TaskPage2 from './taskPage2';
import TaskPage3 from './taskPage3';




class Navigation {
    static mainPage(): MainPage {
        cy.visit('/');
        return new MainPage;
    }

    static taskPage1(): TaskPage1 {
        cy.visit('/task_1');
        return new TaskPage1;
    }

    static taskPage2(): TaskPage2 {
        cy.visit('/task_2');
        return new TaskPage2;
    }
    static taskPage3(): TaskPage3 {
        cy.visit('/task_3');
        return new TaskPage3;
    }
}
export default Navigation