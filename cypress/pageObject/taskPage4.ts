/// <reference types="cypress" />

class TaskPage4 {
  
    getApplyBtn() {
      return cy.get('.btn');
    }
    
    getInputName() {
      return cy.get(':nth-child(1) > .col-md-8 > #name');
    }
    getInputEmail() {
      return cy.get(':nth-child(2) > .col-md-8 > #name');
    }
  
    getInputPhone() {
      return cy.get(':nth-child(3) > .col-md-8 > #name');
    }
  
    getSaveBtn() {
      return cy.get('#save-btn');
    }
  
    getTexth1() {
      return cy.get('h1');
  }
  
}
export default TaskPage4