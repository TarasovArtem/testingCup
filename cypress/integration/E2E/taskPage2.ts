/// <reference types="Cypress" />

import { TaskPage2, Navigation, CommonElemetns  } from '../../pageObject/index';

/*
Filtering products by categoryfunction description:

# A list of available categories along with the search box appears when you click in the 'Please select categories' box.

# The search includes a hint system, i.e. after typing a few characters, a category with a name containing the entered phrase or text fragment is displayed.

# The hint function maps the entered phrase also to polish characters, for example, after typing "saw" we would get the hint "ball".

# Product filtering occurs when a category is selected. Only those that belong to the category are displayed.
*/ 

describe('Zadanie 2 Page', () => {
  
    let taskPage = new TaskPage2();
    let ce = new CommonElemetns();

    beforeEach(() => {
        taskPage = Navigation.taskPage2();
    })
  
    it('Should test of Zadanie 2', () => {
        ce.getOpenDetails().click();
        ce.getClose().click();
        
        taskPage.getSelectionPlaceholder().should('have.text', 'Proszę wybrać kategorie').click();
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