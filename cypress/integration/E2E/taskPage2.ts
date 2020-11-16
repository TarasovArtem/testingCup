/// <reference types="Cypress" />

import { TaskPage2, Navigation } from '../../pageObject/index';
import { CommonElemetns } from '../../pageObject/index';


describe('Zadanie 1 Page', () => {
  
  let taskPage = new TaskPage2();
  let ce = new CommonElemetns();
  

  beforeEach(() => {
    taskPage = Navigation.taskPage2();
  })
  
  it('Should test of Zadanie 2', () => {
    ce.getOpenDetails().click();
    ce.getClose().click();
    
    taskPage.getSelectionPlaceholder().should('have.text', 'Proszę wybrać kategorie').click()
    taskPage.getChooseProduct().should(($chooseProduct: any) => {
      expect($chooseProduct.eq(0)).to.contain('')
      expect($chooseProduct.eq(1)).to.contain('Sport')
      expect($chooseProduct.eq(2)).to.contain('Elektronika')
      expect($chooseProduct.eq(3)).to.contain('Firma i usługi')
    });

    taskPage.getInputChooseProduct().type('Sport{enter}');

    taskPage.getSelectionArrow().click();
    taskPage.getInputChooseProduct().clear().type('Elektronika{enter}');

    taskPage.getSelectionArrow().click();
    taskPage.getInputChooseProduct().clear().type('Firma i usługi{enter}');

    ce.getMainReset().click();
  })
})