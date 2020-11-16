/// <reference types="Cypress" />


class TaskPage1 {
  
    getGlassesFormControl() {
      return cy.get(':nth-child(1) > :nth-child(1) > .thumbnail > .caption > .input-group > .form-control');
    }
  
    getQuantityForGlasses() {
      return cy.get('[data-quantity-for="Okulary"]');
    }
      
    getBallFormControl() {
      return cy.get(':nth-child(1) > :nth-child(2) > .thumbnail > .caption > .input-group > .form-control');
    }
    
    getCameraFormControl() {
      return cy.get(':nth-child(2) > :nth-child(2) > .thumbnail > .caption > .input-group > .form-control');
    }
    
    getAddGlassesBtn() {
      return cy.get('[data-product-name="Okulary"]');
    }
    getAddBallBtn() {
      return cy.get('[data-product-name="Piłka"]');
    }
      
    getAddCameraBtn() {
      return cy.get('[data-product-name="Kamera"]');
    }
  
    getBasketSummary() {
      return cy.get('.basket-summary > p');
    } 

}
export default TaskPage1