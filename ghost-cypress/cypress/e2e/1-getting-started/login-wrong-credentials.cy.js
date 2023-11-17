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


  it('mensaje de error al introducir campos errados de user y password', () => {
    LoginPage.fillUsername('invaliduser');
    LoginPage.fillPassword('invalidpassword');
    LoginPage.clickLoginButton();
    LoginPage.getErrorMessage().should('contains', 'Please fill out the form to sign in.');
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
