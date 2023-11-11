/// <reference types="cypress" />
const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');
import dayjs from "dayjs";
import LoginPage from '../../support/page-objects/LoginPage';


describe('Home Ghost', () => {
  beforeEach(() => {
    LoginPage.visit();
  })


  it('mensaje de error al introducir campo errados de user y password', () => {
    LoginPage.fillUsername('invaliduser');
    LoginPage.fillPassword('invalidpassword');
    LoginPage.clickLoginButton();

    LoginPage.getErrorMessage().should('contains', 'Please fill out the form to sign in.');
  });

  it('mensaje de error al introducir campo errado de user y password correcto', () => {
    LoginPage.fillUsername('invaliduser');
    LoginPage.fillPassword('123456789=');
    LoginPage.clickLoginButton();

    LoginPage.getErrorMessage().should('contains', 'Please fill out the form to sign in.');
  });

  it('mensaje de error al introducir campo errado de password y user correcto', () => {
    LoginPage.fillUsername('p.diazp@uniandes.edu.co');
    LoginPage.fillPassword('invalido');
    LoginPage.clickLoginButton();

    LoginPage.getErrorMessage().should('contains', 'Your password is incorrect');
  });

  it('mensaje de exito al introducir password y user correctos', () => {
    LoginPage.fillUsername('p.diazp@uniandes.edu.co');
    LoginPage.fillPassword('123456789=');
    LoginPage.clickLoginButton();
    console.log(LoginPage.getMessageIngresoOk());
    LoginPage.getMessageIngresoOk().should('exist');
  });


  it('Ir a post...', () => {
    LoginPage.fillUsername('p.diazp@uniandes.edu.co');
    LoginPage.fillPassword('123456789=');
    LoginPage.clickLoginButton();

    cy.get('[href="#/posts/"]').click();

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
