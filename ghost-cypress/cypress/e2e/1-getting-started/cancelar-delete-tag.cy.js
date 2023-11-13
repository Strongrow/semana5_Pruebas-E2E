/// <reference types="cypress" />
const fs = require('fs');
const path = require('path');
import dayjs from "dayjs";
import LoginPage from '../../support/page-objects/LoginPage';


describe('Cancelar al eliminar un Tag', () => {

    it('Logearse, ir al menu tags, cancelar al tratar de borrar un tag', () => {
        LoginPage.visit();
        LoginPage.fillUsername('p.diazp@uniandes.edu.co');
        LoginPage.fillPassword('123456789=');
        LoginPage.clickLoginButton();
        cy.get('[href="#/tags/"]').click();
        cy.wait(2000);
        cy.get('[href="#/tags/nuevo-tag/"]').first().click();
        cy.wait(2000);
        cy.get('[data-test-button="delete-tag"]').click();
        cy.wait(2000);
        cy.get('[data-test-button="cancel"]').first().click();
         

    });


});

