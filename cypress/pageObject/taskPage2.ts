/// <reference types="cypress" />


class TaskPage2 {

    getChooseProduct() {
      return cy.get('select.js-category-select > option');
    }
  
    getSelectionPlaceholder() {
      return cy.get('.select2-selection__placeholder');
    }
  
    getSelectionArrow() {
      return cy.get('.select2-selection__arrow');
    }
  
    getInputChooseProduct() {
      return cy.get('.select2-search__field');
    }

}

export default TaskPage2












