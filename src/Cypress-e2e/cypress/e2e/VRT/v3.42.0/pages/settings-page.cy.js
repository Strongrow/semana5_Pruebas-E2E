class Settingspage {

  Settingspage() {
    if (!cy.url().should("include", "/ghost/#/settings/general")) {
        throw new IllegalStateException(
            "This is not Page Details, the current page is: " + cy.url()
        );
    }
    
}



editTittleSettgins(){

  cy.contains("General").click();
  cy.contains("Expand").first().click();
  cy.get('input[class="ember-text-field gh-input ember-view"]').first().type(" - Editado");  
  cy.contains("Close").first().click();
  cy.contains("Save settings").click();
  cy.wait(1000);

}




}

export { Settingspage };
