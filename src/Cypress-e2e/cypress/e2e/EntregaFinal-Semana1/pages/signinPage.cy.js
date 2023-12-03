
import config from "../assets/config.json";

class SignInPage {
  SignInPage() {
    if (!cy.url().should("include", "/ghost/#/signin")) {
      throw new IllegalStateException(
        "This is not the Sign In Page, current page is: " + cy.url()
      );
    }
  }

  login(email, password) {
    let host = config.host;
    cy.visit(host + "ghost/#/signin");
    cy.wait(1000);
    cy.get('input[name="identification"]').clear({ force: true }).type(email, { force: true });
    cy.wait(500);
    cy.get('input[name="password"]').clear({ force: true }).type(password, { force: true });
    cy.wait(500);
    cy.contains('Sign in').click(({ force: true }));
    cy.wait(1000);
    return true;
  }

  checkSesion() {
    return cy.get('h2').contains('Dashboard').click();
  }


  checkForErrors() {
    return cy.contains("Your password is incorrect.")
  }

  checkForErrorData() {
    return cy.contains("Please fill out the form to sign in.")
  }
}

export { SignInPage };
