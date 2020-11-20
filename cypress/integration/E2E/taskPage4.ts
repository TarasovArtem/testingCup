import { TaskPage4, Navigation } from '../../pageObject/index';
import { CommonElemetns } from '../../pageObject/index';


describe('Zadanie 4 Page', () => {
  
  let taskPage = new TaskPage4();
  let ce = new CommonElemetns();
  let name = 'Jack';
  let email = 'jack@sparrow.com';
  let phone = '600-100-200';
  

  beforeEach(() => {
    taskPage = Navigation.taskPage4();
  })

  it('Should test of Zadanie 4', () => {
    ce.getOpenDetails().click();
    ce.getClose().click();

    taskPage.getApplyBtn().click();
  
    taskPage = Navigation.taskPage4_frame();
    taskPage.getInputName().type(name);
    taskPage.getInputEmail().type(email);
    taskPage.getInputPhone().type(phone);  

  })
})