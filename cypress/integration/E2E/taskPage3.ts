import { TaskPage3, Navigation } from '../../pageObject/index';
import { CommonElemetns } from '../../pageObject/index';


describe('Zadanie 3 Page', () => {
  
  let taskPage = new TaskPage3();
  let ce = new CommonElemetns();
  
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
      taskPage.getInputSurname().clear().type(user.surname)
      taskPage.getTextAreaNotes().clear().type(user.notes); 
      taskPage.getInputPhone().clear().type(user.phone);
    })
    
    taskPage.getSaveBtn().click();
    
  })

})