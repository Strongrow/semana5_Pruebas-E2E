import LoginPage from "../../Escenarios 91-117/pageObjectPatron/LoginPage";
import GenerateData from "../pages/generateData";
import "cypress-file-upload";
const path = require("path");

describe("Import Members to Ghost", () => {
  const loginPage = new LoginPage();
  const ogenerateData = new GenerateData();

  beforeEach(() => {
    //Given, la url del administrador del sitio
    loginPage.getVisit();
    cy.wait(500);
  });

  context("Scenario: it's show the creation of Metadata in settings ", () => {
    it.only("Start from Login, go to settings and create a Meta Data.", () => {
      //When, Add the login credentials and enter the admin
      loginPage.getEmailAndPassword();

      //And, generate file csv
      const csvContent = ogenerateData.generateFakeData();
      cy.wait(500);

      const filePath = path.resolve("../../csv/members.csv");
      cy.writeFile(filePath, csvContent).then(() => {
        cy.log("Archivo guardado en: " + filePath);
      });

      // And, click on Members.
      ogenerateData.getMembers();
      cy.screenshot();
      cy.wait(500);

      // And, import de file .csv

      cy.get("label").selectFile(filePath, {
        action: "drag-drop",
      });
      cy.screenshot();
      cy.wait(500);

      // And, click on import button
      cy.get('button[data-test-button="perform-import"]')
        .should("be.visible")
        .click();
      cy.screenshot();
      cy.wait(500);

      cy.get('button[data-test-button="close-import-members"]')
        .should("be.visible") // Asegúrate de que el botón esté visible
        .click();
      cy.screenshot();
      cy.wait(500);

      // Then, at least one member must appear
      cy.get(
        'div[data-test-table="members"] tbody tr[data-test-list="members-list-item"]'
      ).should("have.length.at.least", 1);
      cy.screenshot();
      cy.wait(500);
    });
  });
});
