/// <reference types="cypress" />
import LoginPage from '../../support/page-objects/LoginPage';


describe('Editar post no publicado', () => {

    it('Logearse, ir al menu posts, editar un post y guardar', () => {
        LoginPage.visit();
        LoginPage.fillUsername('p.diazp@uniandes.edu.co');
        LoginPage.fillPassword('123456789=');
        LoginPage.clickLoginButton();
        cy.get('[href="#/posts/"]').first().click();
        cy.wait(2000);
        cy.get('[data-test-post-id="6545db8b64420c0a1c9a51e0"]').first().click();
        cy.wait(2000);
        cy.get('[placeholder="Post title"]').type(" - texto adicional ");
        cy.wait(2000);
        cy.get('[data-test-button="publish-preview"]').first().click();

    });


});


