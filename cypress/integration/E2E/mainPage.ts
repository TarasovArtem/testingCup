/// <reference types="cypress" />

import { MainPage, Navigation } from '../../pageObject/index';



describe('Main page', () => {

    let mainPage = new MainPage();
    

    beforeEach(() => {
        mainPage = Navigation.mainPage()
    })

    it('Should show elements of main page', () => {
        mainPage.getLogoAsta().should('be.visible');
        mainPage.getLogoAstaLink().should('have.attr', 'href', 'https://asta.pgs-soft.com/');
        mainPage.getLogoPgs().should('be.visible');

        mainPage.getTaskList().should(($tasklist: any) => {
            expect($tasklist.eq(0)).to.contain('Zadanie 1')
            expect($tasklist.eq(1)).to.contain('Zadanie 2')
            expect($tasklist.eq(2)).to.contain('Zadanie 3')
            expect($tasklist.eq(3)).to.contain('Zadanie 4')
            expect($tasklist.eq(4)).to.contain('Zadanie 5')
            expect($tasklist.eq(5)).to.contain('Zadanie 6')
            expect($tasklist.eq(6)).to.contain('Zadanie 7')
            expect($tasklist.eq(7)).to.contain('Zadanie 8')
            expect($tasklist.eq(8)).to.contain('Zadanie 9')
            expect($tasklist.eq(9)).to.contain('Zadanie 10')
          });        
        mainPage.getZadanie1().click();   
    })
})