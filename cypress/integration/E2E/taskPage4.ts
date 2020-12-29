/// <reference types="Cypress" />

import { TaskPage4, Navigation, CommonElemetns } from '../../pageObject/index';

/*
Completing a form in a separate functionality description window:

# Clicking the Apply button opens a new browser window with the form.

# It is possible to complete the form and send the form.

# Required fields in the form are:

  * Name - limited to 50 characters;
  
  * Email (in format a@b.pl, otherwise you will see information about the need to enter data in the appropriate format) - limit to 50 characters;
  
  * Telephone number (in the format 600-100-200);

#After sending the completed form by clicking the "Send" button, the corresponding information appears indicating the success of the action performed.
*/

describe('Zadanie 4 Page', () => {
  
    let taskPage = new TaskPage4();
    let ce = new CommonElemetns();
    
  
    beforeEach(() => {
        taskPage = Navigation.taskPage4();
    })
  
    it('Should Clicking the Apply button opens a new browser window with the form', () => {  
        ce.getOpenDetails().click();
        ce.getClose().click();
    
        taskPage.getApplyBtn().click();
    })
  
    it('Should be complete the form and send the form', () => { 
        taskPage = Navigation.taskPage4_frame();
        ce.getUserData().then((user) => {
            taskPage.getInputName().type(user.name);
            taskPage.getInputEmail().type(user.email);
            taskPage.getInputPhone().type(user.phone);
        });  
        taskPage.getSaveBtn().click();
        ce.getUserData().then((user) => {
            taskPage.getTexth1().should('have.text', user.text);
        }) 
    })
})