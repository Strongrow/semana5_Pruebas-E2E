<reference types="cypress" />
const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');
import dayjs from "dayjs";
import LoginPage from '../../support/page-objects/LoginPage';


describe('Home Ghost', () => {
  beforeEach(() => {
    LoginPage.visit();
  })
  it('mensaje de exito al introducir password y user correctos', () => {
    LoginPage.fillUsername(LoginPage.getUser());
    LoginPage.fillPassword(LoginPage.getPassword());
    LoginPage.clickLoginButton();
    console.log(LoginPage.getMessageIngresoOk());
    LoginPage.getMessageIngresoOk().should('exist');
  });


  it('Ir a post...', () => {
    LoginPage.fillUsername(LoginPage.getUser());
    LoginPage.fillPassword(LoginPage.getPassword());
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
