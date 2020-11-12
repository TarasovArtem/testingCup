/// <reference types="Cypress" />

import { TaskPage1, Navigation } from '../../pageObject/index';
import { CommonElemetns } from '../../pageObject/index';


describe('Zadanie 1 Page', () => {
  
  let taskPage = new TaskPage1();
  let ce = new CommonElemetns();

    beforeEach(() => {
        taskPage = Navigation.taskPage1();
    })
  
    it('Should test of Zadanie 1', () => {
      ce.getOpenDetails().click();
      ce.getClose().click();

      taskPage.getGlassesFormControl().clear().type('15');
      taskPage.getAddGlassesBtn().should('be.visible').click();
      taskPage.getQuantityForGlasses().should('have.text', '15');

      taskPage.getBallFormControl().clear().type('15');
      taskPage.getAddBallBtn().should('be.visible').click();

      taskPage.getCameraFormControl().clear().type('101');
      taskPage.getAddCameraBtn().should('be.visible').click();

      taskPage.getCameraFormControl().clear().type('0');
      taskPage.getAddCameraBtn().should('be.visible').click();

      ce.getMainReset().click();
    })


  





});



