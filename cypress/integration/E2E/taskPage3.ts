import { TaskPage3, Navigation } from '../../pageObject/index';
import { CommonElemetns } from '../../pageObject/index';


describe('Zadanie 3 Page', () => {
  
  let taskPage = new TaskPage3();
  let ce = new CommonElemetns();
  let name = 'Jack';
  let surname = 'Sparrow';
  let notes = 'I am Test Engineer';
  let phone = '+49 123 4567890'

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
    taskPage.getInputName().clear().type(name);
    taskPage.getInputSurname().clear().type(surname)
    taskPage.getTextAreaNotes().clear().type(notes);  
    taskPage.getInputPhone().clear().type(phone);
    taskPage.getUploadfileBtn().click({force:true});
    taskPage.getSaveBtn().click();
    /*ce.getMainReset().click();*/
  })

})