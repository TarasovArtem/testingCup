/// <reference types="Cypress" />

class TaskPage3 {
  getMenuBtn() {
    return cy.get('[data-toggle="dropdown"]');
  }
  getItemForm() {
    return cy.contains('Formularz');
  }
  getCaretRight() {
    return cy.get('.caret-right');
  }
  getEditMode() {
    return cy.contains('Przejdź do trybu edycji');
  }
  getInputName() {
    return cy.get('#in-name');
  }

  getInputSurname() {
    return cy.get('#in-surname');
  }

  getTextAreaNotes() {
    return cy.get('#in-notes');
  }

  getInputPhone() {
    return cy.get('#in-phone');
  }

  getSaveBtn() {
    return cy.get('#save-btn');
  }

  getUploadfileBtn() {
    return cy.get('#in-file');
  }


}
export default TaskPage3