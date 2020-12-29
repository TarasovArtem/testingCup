/// <reference types="cypress" />

import { Payment, Navigation, CommonElemetns } from '../../pageObject/index';

/*
Payment by card description of functionality:

# The available form allows you to pay with different payment cards (list of supported cards in the link below).

# You must provide your name, card number, CVV code, and card expiry date. For the CVV code, the’ smoke ‘prompt appears on the ’i' icon. 
  
# After clicking the pay button, each of the fields is checked for the correctness of the entered data.

*/

describe('Zadanie 8, Payment by card', () => {
  
    let payment = new Payment();
    let ce = new CommonElemetns();
  
    beforeEach(() => {
        payment = Navigation.payment();
    })
  
    it('Should payment by card', () => {
        ce.getOpenDetails().click(); // open the test case
        ce.getClose().click();
    
        payment.getPaymentForm().within(($paymentForm) => { 
            ce.getPayment().then((paymentByCard) => { 
                payment.getSelectCardType().select(paymentByCard.JCB.type);
                payment.getNameCardUser().type(paymentByCard.NameCardUser);
                payment.getCardNumber().type(paymentByCard.JCB.number1);
                payment.getCVVcode().type(paymentByCard.CVV);
                payment.getGlyphiconInfoSign().click().invoke('show');
                payment.getSelectCardInfoMonth().select(paymentByCard.Month.June);
                payment.getSelectCardInfoYear().select(paymentByCard.Year.Year2025);
                ce.getRoot().submit();
            })
        })
        cy.url().should('include', 'task_8');
        cy.screenshot('Order paid');
    })      
})