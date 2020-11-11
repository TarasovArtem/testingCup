/// <reference types="Cypress" />

import MainPage from '../../pageObject/mainPage';
import Navigation from '../../pageObject/navigation';


describe('Main page', () => {

    const po = new MainPage();
    const navigation = new Navigation();

    beforeEach(() => {

        navigation.navigation()
    })
    it('Should show elements of main page', () => {
        po.getLogoAsta().should('be.visible');
        po.getLogoAstaLink().should('have.attr', 'href', 'https://asta.pgs-soft.com/');
        po.getLogoPgs().should('be.visible');

       /* po.getTaskList.should(($tasklist: any) => {
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
          });*/

    })
})