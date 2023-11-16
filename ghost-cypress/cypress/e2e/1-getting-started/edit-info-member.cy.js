/// <reference types="cypress" />
const fs = require("fs");
const path = require("path");
const { spawnSync } = require("child_process");
import dayjs from "dayjs";
import LoginPage from "../../support/page-objects/LoginPage";

describe("Creacion de Miembro", () => {
  it("Logearse luego ir al menu Member", () => {
    LoginPage.visit();
    LoginPage.fillUsername("jc.rodriguez2345@uniandes.edu.co");
    LoginPage.fillPassword("Aa1o3o6349oo+++");
    LoginPage.clickLoginButton();
    cy.wait(2000);
    cy.get('[href="#/members/"]').first().click();
    cy.wait(2000);
    cy.get('[href="#/members/65513e376fd69e0e702a239c/"]').first().click();
    cy.wait(2000);
    cy.get("input#member-name").clear().type("Viejo Member");
    cy.get("textarea#member-note")
      .clear()
      .type("viejo Member ViejoMember@hotmail.com");
    cy.wait(2000);
    cy.get('[data-test-button="save"]').click();
    cy.wait(2000);
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