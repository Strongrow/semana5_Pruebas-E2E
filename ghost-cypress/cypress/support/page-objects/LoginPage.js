// LoginPage.js
class LoginPage {
    visit() {
        cy.visit('http://localhost:2368/ghost/');
    }

    fillUsername(username) {
        cy.get('#identification').type(username);
    }

    fillPassword(password) {
        cy.get('#password').type(password);
    }

    clickLoginButton() {
        cy.get('[data-test-button="sign-in"]').click();
    }

    getErrorMessage() {

        return cy.get('.main-error').invoke('text');
    }

    getMessageIngresoOk() {
        return cy.get('.gh-canvas-title').invoke('text');
    }

    getMessageErrorForgot() {
        return cy.get('.main-error').invoke('text');
    }
}

export default new LoginPage();
