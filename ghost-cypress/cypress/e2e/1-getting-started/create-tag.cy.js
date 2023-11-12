/// <reference types="cypress" />
const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');
import dayjs from "dayjs";
import LoginPage from '../../support/page-objects/LoginPage';


describe('Creacion de Tag', () => {

    it('Logearse, ir al menu tags, llenar los campo y guardar', () => {
        LoginPage.visit();
        LoginPage.fillUsername('p.diazp@uniandes.edu.co');
        LoginPage.fillPassword('123456789=');
        LoginPage.clickLoginButton();
        cy.get('[href="#/tags/"]').click();
        cy.wait(2000);
        cy.get('[href="#/tags/new/"]').click();
        cy.wait(2000);
        cy.get('input#tag-name').type("Nuevo Tag");
        cy.wait(2000);
        cy.get('[data-test-input="accentColor"]').type("2eb24b");
        cy.wait(2000);
        cy.get('[data-test-input="tag-description"]').type("Ejemplo descripcion ");
        cy.wait(2000);
        cy.get('[data-test-button="save"]').click(); 
        cy.wait(2000);
        cy.get('[href="#/tags/"]').first().click();

    });

    
});


after(() => {
    if (Cypress.env('video')) {
        const videoFileName = `${dayjs().format('YYYYMMDD-HHmmss')}.mp4`;
        const videoFilePath = path.join('videos', videoFileName);

        //if (fs.existsSync(videoFilePath)) {
        const outputPath = path.join(__dirname, 'cypress', 'videos', videoFileName);
        //fs.renameSync(videoFilePath, outputPath);

        console.log(`Video exportado a: ${outputPath}`);
        // }
    }
});
