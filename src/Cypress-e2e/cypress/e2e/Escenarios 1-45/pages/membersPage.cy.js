
import config from "../assets/config.json";

class MembersPage {
  MembersPage() {
    if (!cy.url().should("include", "/ghost/#/members")) {
      throw new IllegalStateException(
        "This is not the Members Page current page is: " + cy.url()
      );
    }
  }

  selectRandomMember() {
    cy.get('.ma0.pa0.gh-members-list-name')
      .its('length')
      .then((len) => {
        cy.get('.ma0.pa0.gh-members-list-name')
          .eq(Math.floor(Math.random() * ((len - 1) - 0 + 1)) + 0)
          .click()
      })
  }

  goCreateMember() {
    cy.contains("Members").click();
    cy.contains("New member").click();
  }

  search(name){
    cy.get('.gh-input').type(name, {force:true})

  }

  editInfoMember(name, email,note) {    
    cy.get('#member-name').type('{selectall}{backspace}');
    cy.get('#member-email').type('{selectall}{backspace}');
    cy.get('#member-note').type('{selectall}{backspace}');

    cy.get('#member-name').type(name);
    cy.wait(500);
    cy.get('#member-email').type(email, { force: true });
    cy.wait(500);
    cy.get('#member-note').type(note, { force: true });
    cy.wait(1000);
    cy.contains("Save").click();
  }

  editEmailMember(email){
    cy.get('#member-email').type('{selectall}{backspace}');
    cy.get('#member-email').type(email, { force: true });
    cy.wait(1000);
    cy.contains("Save").click();
  }

  editNoteMember(note){
    cy.get('#member-note').type('{selectall}{backspace}');
    cy.get('#member-note').type(note, { force: true });
    cy.wait(1000);
    cy.contains("Save").click();
  }

  addNewMember(name, email,note) {    
    cy.get('#member-name').type(name);
    cy.wait(1000);
    cy.get('#member-email').type(email, { force: true });
    cy.wait(1000);
    cy.get('#member-note').type(note, { force: true });
    cy.contains("Save").click();
  }

  checkEmailLongError() {
    return cy.contains("Email cannot be longer than 191 characters.", { timeout: 2000});
  }
  
  checkEmailError() {
    return cy.contains("Invalid Email.", { timeout: 2000});
  }

  getListMembers(name) {
    return cy.contains(name);
  }

  checkMemberSaved(name) {
    return cy.get('h3').contains(name).click();
  }

  checkNoMembers() {
    return cy.get('h4').contains("No members match the current filter").click();
  }


  clickLeave() {
    cy.contains("Leave").click();
  }

  checkNoteError() {
    return cy.contains('Note is too long.');
  }  
  
}

export { MembersPage };
