/// <reference types="cypress" />
const fs = require('fs');
const path = require('path');
import dayjs from "dayjs";
import LoginPage from '../../support/page-objects/LoginPage';


describe('Eliminar un Tag', () => {

    it('Logearse, ir al menu tags, borrar un tag', () => {
        LoginPage.visit();
        LoginPage.fillUsername(LoginPage.getUser());
        LoginPage.fillPassword(LoginPage.getPassword());
        LoginPage.clickLoginButton();
        cy.get('[href="#/tags/"]').click();
        cy.wait(2000);
        cy.get('[href="#/tags/nuevo-tag/"]').first().click();
        cy.wait(2000);
        cy.get('[data-test-button="delete-tag"]').click();
        cy.wait(2000);
        cy.get('[data-test-button="confirm"]').first().click();
         

    });


});

