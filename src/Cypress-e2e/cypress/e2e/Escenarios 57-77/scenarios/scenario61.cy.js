import { faker } from "@faker-js/faker";
import LoginPage from "../../Escenarios 91-117/pageObjectPatron/LoginPage";
import GenerateData from "../pages/generateData";
import "cypress-file-upload";
const path = require("path");

describe("Import Members to Ghost", () => {
  const loginPage = new LoginPage();

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

      cy.get('button[data-test-button="member-actions"]').click();
      cy.screenshot();
      cy.wait(500);
      cy.get("#member-note").click();
      cy.screenshot();
      cy.wait(500);

      let text = "";
      while (text.length < 505) {
        text += faker.lorem.words();
      }
      text = text.substring(0, 505); // Asegurarse de que el texto sea exactamente de 505 caracteres

      // Insertar el texto en el textarea
      cy.get('textarea[name="note"]').type(text, { delay: 0 });

      cy.get('button[data-test-button="save"]').click();

      cy.get("p.response").should("contain", "Note is too long.");

      // And, click on import button

      // Then, at least one member must appear
    });
  });
});
