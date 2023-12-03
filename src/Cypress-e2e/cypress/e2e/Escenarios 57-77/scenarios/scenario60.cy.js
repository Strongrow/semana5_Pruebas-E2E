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
      /*  const csvContent = ogenerateData.generateFakeData();
      cy.wait(500);

      const filePath = path.resolve("../../csv/members.csv");
      cy.writeFile(filePath, csvContent).then(() => {
        cy.log("Archivo guardado en: " + filePath);
      }); */

      // And, click on Members.
      cy.get('[data-test-nav="members"]').click();
      cy.get('[data-test-button="members-actions"]')
        .should("be.visible")
        .click();
      cy.screenshot();
      cy.wait(500);

      // And, import de file .csv

      cy.get('tbody > tr[data-test-list="members-list-item"]').then(
        ($members) => {
          const randomIndex = Math.floor(Math.random() * $members.length);
          const randomMember = $members.eq(randomIndex);

          cy.wrap(randomMember)
            .find('a[data-test-table-data="details"]')
            .click();
        }
      );

      cy.get("h2.gh-canvas-title").then(($header) => {
        const text = $header.text().trim();
        // Haz algo con el texto capturado
        cy.log(text);

        cy.get('button[data-test-button="member-actions"]').click();
        cy.screenshot();
        cy.wait(500);
        cy.get('button[data-test-button="delete-member"]').click();
        cy.screenshot();
        cy.wait(500);
        cy.get('button[data-test-button="confirm"]').click();
        cy.screenshot();
        cy.wait(500);
        cy.get("table.gh-list tbody tr").contains(text).should("not.exist");
        cy.screenshot();
        cy.wait(500); // Esto imprimirá el texto en el registro de Cypress
      });

      // And, click on import button

      // Then, at least one member must appear
    });
  });
});
