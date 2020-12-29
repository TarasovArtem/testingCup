/// <reference types="cypress" />


class Payment {
  
    getPaymentForm() {
      return cy.get('form');
    }
    
    getSelectCardType() {
      return cy.get('#task8_form_cardType');
    }
  
    getSelectCardInfoMonth() {
      return cy.get('#task8_form_cardInfo_month');
    }
  
    getSelectCardInfoYear() {
      return cy.get('#task8_form_cardInfo_year');
    }
  
    getNameCardUser() {
      return cy.get('#task8_form_name');
    }
  
    getCardNumber() {
      return cy.get('#task8_form_cardNumber');
    }
  
    getCVVcode() {
      return cy.get('#task8_form_cardCvv');
    }
  
    getGlyphiconInfoSign() {
      return cy.get('[data-toggle="tooltip"]');
    }
  
    getPayBtn() {
      return cy.contains('Zapłać');
    }

}
export default Payment