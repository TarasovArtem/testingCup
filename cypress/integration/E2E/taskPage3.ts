/// <reference types="Cypress" />

import { TaskPage3, Navigation, CommonElemetns} from '../../pageObject/index';

/*
TODO: Edit formdescription of functionality:

# When you hover your mouse over the menu icon, it expands to show additional form options.

# It is possible to enter the form editing mode by selecting the appropriate option from the menu.

# Edit the form to change each of the fields:

  * First Name;
 
  * Second Name;
 
  * Note;
 
  * Telephone;

and upload a file with a photo from the hard drive. This file should appear in the form on the right after you save it.

# You cannot change any of the values in the form or change the photo until you enter edit mode.

# After saving the form, a message appears about the successful saving. The data is changed and remains displayed in the form.
*/ 

describe('Zadanie 3 Page', () => {

    let taskPage = new TaskPage3();
    let ce = new CommonElemetns();
    //const picture = '../tor.jpg';
    
    beforeEach(() => {
        taskPage = Navigation.taskPage3();
    })

    it('Should test of Zadanie 3', () => {
        ce.getOpenDetails().click();
        ce.getClose().click();
    
        taskPage.getMenuBtn().should('be.visible').click();
        taskPage.getItemForm().click({ force: true });
        taskPage.getCaretRight().click({ force: true });
        taskPage.getEditMode().click({ force: true });
        ce.getUserData().then((user) => {
          taskPage.getInputName().clear().type(user.name);
          taskPage.getInputSurname().clear().type(user.surname);
          taskPage.getTextAreaNotes().clear().type(user.notes); 
          taskPage.getInputPhone().clear().type(user.phone);
        })    
        // cy.get('#in-file').attachFile(picture);      
        // taskPage.getSaveBtn().click();    
    })
})