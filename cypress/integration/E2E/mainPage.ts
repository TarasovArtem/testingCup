/// <reference types="Cypress" />

import MainPage from '../../pageObject/mainPage';



describe('Main page', () => {

    const maiPage = new MainPage();


    beforeEach(() => {
        cy.visit('/')
    })
    it('Should show elements of main page', () => {

    })
})