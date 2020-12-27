/// <reference types="Cypress" />

import { TaskPage1, Navigation } from '../../pageObject/index';
import { CommonElemetns } from '../../pageObject/index';

/*
Add a product to basketdescription of functionality:

# You can add a product to your shopping cart by clicking on the " Add " button located in the field with the product in the product list.

# The amount of products will be added to the basket, selected using the up-down arrows (which appear when the edit field is highlighted) 
  or by typing the amount of products in the edit field using the keyboard.

# The total number of products in the basket can not exceed 100.
*/ 


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

      taskPage.getCameraFormControl().clear().type('101'); // Entering a larger value
      taskPage.getAddCameraBtn().should('be.visible').click();

      taskPage.getCameraFormControl().clear().type('0'); // Entering the lowest value
      taskPage.getAddCameraBtn().should('be.visible').click();

      taskPage.getBasketSummary().should(($basketSummary: any) => {
        expect($basketSummary.eq(0)).to.contain('Łączna ilość produktów:')
        expect($basketSummary.eq(1)).to.contain('Do zapłaty:')
      });

      ce.getMainReset().click();
    })
});



