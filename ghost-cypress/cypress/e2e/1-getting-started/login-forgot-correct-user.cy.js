const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');
import dayjs from "dayjs";
import LoginPage from '../support/page-objects/LoginPage';


describe('Home Ghost', () => {
  beforeEach(() => {
    cy.visit('http://localhost:2368/ghost');
  })


  it('Mensaje de error, no existe correo de electronico', () => {
    LoginPage.fillUsername(LoginPage.getUser());
    LoginPage.clickForgotButton();
    console.log(LoginPage.getMessageErrorForgot());
    LoginPage.getMessageErrorForgot().should('exist');
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
