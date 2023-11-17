/// <reference types="cypress" />
const fs = require("fs");
const path = require("path");
const { spawnSync } = require("child_process");
import dayjs from "dayjs";
import LoginPage from "../../support/page-objects/LoginPage";

describe("Creacion de Miembro", () => {
  it("Logearse luego ir al menu Member", () => {
    LoginPage.visit();
    LoginPage.fillUsername(LoginPage.getUser());
    LoginPage.fillPassword(LoginPage.getPassword());
    LoginPage.clickLoginButton();
    cy.wait(2000);
    cy.get('[href="#/members/"]').first().click();
    cy.wait(2000);
    cy.get('[href="#/members/65513e376fd69e0e702a239c/"]').first().click();
    cy.wait(2000);
    cy.get('button[data-test-button="member-actions"]').click();
    cy.wait(2000);
    cy.get('[data-test-button="delete-member"]').click();
    cy.wait(2000);
    cy.get('[data-test-button="cancel"]').click();
  });
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
