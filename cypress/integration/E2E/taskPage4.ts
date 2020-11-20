import { TaskPage4, Navigation } from '../../pageObject/index';
import { CommonElemetns } from '../../pageObject/index';


describe('Zadanie 4 Page', () => {
  
  let taskPage = new TaskPage4();
  let ce = new CommonElemetns();
  let text = 'Wiadomość została wysłana';
  

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
    })  
    taskPage.getSaveBtn().click();
    taskPage.getTexth1().should('have.text', text);

  })
})