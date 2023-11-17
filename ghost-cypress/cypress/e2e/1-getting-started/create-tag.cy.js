/// <reference types="cypress" />
const fs = require("fs");
const path = require("path");
const { spawnSync } = require("child_process");
import dayjs from "dayjs";
import LoginPage from "../../support/page-objects/LoginPage";

describe("Creacion de Tag", () => {
  it("Logearse luego ir al menu tags", () => {
    LoginPage.visit();
    LoginPage.fillUsername(LoginPage.getUser());
    LoginPage.fillPassword(LoginPage.getPassword());
    LoginPage.clickLoginButton();
    cy.get('[href="#/tags/"]').click();
    cy.wait(2000);
    cy.get('[href="#/tags/new/"]').click();
    cy.wait(2000);
    cy.get("input#tag-name").type("Nuevo Tag");
    cy.wait(2000);
    cy.get("input#tag-name").type("Nuevo Tag");
    cy.wait(2000);
    cy.get('[data-test-input="accentColor"]').type("2eb24b");
    cy.wait(2000);
    cy.get('[data-test-input="tag-description"]').type("Ejemplo descripcion ");
  });

  /*
    it('Diligenciar el campo description {string}', () => {

    });

    it('Dar click en el boton save', () => {

    });

    it('<Volver al menu Tag', () => {

    });
*/
});

after(() => {
  if (Cypress.env("video")) {
    const videoFileName = `${dayjs().format("YYYYMMDD-HHmmss")}.mp4`;
    const videoFilePath = path.join("videos", videoFileName);

    //if (fs.existsSync(videoFilePath)) {
    const outputPath = path.join(__dirname, "cypress", "videos", videoFileName);
    //fs.renameSync(videoFilePath, outputPath);

    console.log(`Video exportado a: ${outputPath}`);
    // }
  }
});
