
import config from "../assets/config.json";

class EmailNewSletter {
  ExplorePage() {
    if (!cy.url().should("include", "/ghost/#/settings/enable-newsletters")) {
      throw new IllegalStateException(
        "This is not the Sign In Page, current page is: " + cy.url()
      );
    }
  }

  goToEmailNewSletter(){
    cy.visit(config.host + "ghost/#/settings/enable-newsletters");
    cy.wait(1000);
  }
  


  selectRandomEmailNewSletter() {
    cy.get(':nth-child(1) > :nth-child(1) > .flex > .font-medium')
      .its('length')
      .then((len) => {
        cy.get(':nth-child(1) > :nth-child(1) > .flex > .font-medium')
          .eq(Math.floor(Math.random() * ((len - 1) - 0 + 1)) + 0)
          .click()
      })
  }

  editEmailSletter(name,description,emailSender,nameSender,){


    cy.get("input[id=':rp:']").type('{selectall}{backspace}');
    cy.get("input[id=':rp:']").type(name);

    cy.get("textarea[id=':rq:']").type('{selectall}{backspace}');
    cy.get("textarea[id=':rq:']").type(description);

    cy.get("input[id=':rr:']").type('{selectall}{backspace}');
    cy.get("input[id=':rr:']").type(nameSender);

    cy.get("input[id=':rs:']").type('{selectall}{backspace}');
    cy.get("input[id=':rs:']").type(emailSender);
    cy.contains("Save").click();

  }


  
  checkError() {
    return cy.get('[data-testid="toast-error"]')
  }

}



export { EmailNewSletter };
