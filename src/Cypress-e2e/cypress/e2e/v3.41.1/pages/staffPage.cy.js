class StaffPage {

  StaffPage() {
    if (!cy.url().should("include", "/ghost/#/staff")) {
        throw new IllegalStateException(
            "This is not Page Details, the current page is: " + cy.url()
        );
    }
}

inviteNewPeople(email){
  cy.contains("Staff").click();
  cy.contains("Invite people").click();
  cy.get('input[name="email"]').first().type(email);
  cy.contains("Send invitation now").click();
  cy.contains("Tags").click();
  cy.contains("Staff").click();
  cy.wait(3000);
}


}

export { StaffPage };
