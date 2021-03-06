/// <reference types="cypress" />

import MainPage from './mainPage';
import LoginForm from './loginForm';
import Payment from './payment';
import TaskPage1 from './taskPage1';
import TaskPage2 from './taskPage2';
import TaskPage3 from './taskPage3';
import TaskPage4 from './taskPage4';


class Navigation {

    static loginForm(): LoginForm {
        cy.visit('/task_6');
        return new LoginForm;
    }

    static mainPage(): MainPage {
        cy.visit('/');
        return new MainPage;
    }

    static payment(): Payment {
        cy.visit('/task_8');
        return new Payment;
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

    static taskPage4(): TaskPage4 {
        cy.visit('/task_4');
        return new TaskPage4;
    }

    static taskPage4_frame(): TaskPage4 {
        cy.visit('/task_4_frame');
        return new TaskPage4;
    }

}
export default Navigation