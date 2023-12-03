import { expect } from "chai";
import LoginPage from "../../Escenarios 91-117/pageObjectPatron/LoginPage";
import OptionsSettings from "../pages/optionsSettings";

describe("Functionality: Create content in Page", () => {
  const loginPage = new LoginPage();
  const optionsSettings = new OptionsSettings();
  let fakeTitle;

  beforeEach(() => {
    //Given, la url del administrador del sitio
    loginPage.getVisit();
    cy.wait(500);
  });

  context("Scenario: it's show the creation of Metadata in settings ", () => {
    it.only("Start from Login, go to settings and create a Meta Data.", () => {
      //When, Add the login credentials and enter the admin
      loginPage.getEmailAndPassword();

      //When, Enter the settings section
      optionsSettings.getMenuSettings();
      cy.screenshot();
      cy.wait(500);

      // And, click on Meta Data and edit.
      optionsSettings.getHistory();
      cy.screenshot();
      cy.wait(500);

      cy.get('button[type="button"]').contains("Filter").click();
      cy.wait(500);

      cy.contains("label", "Edited")
        .parent()
        .find('input[type="checkbox"]')
        .then(($checkbox) => {
          // Verifica si el checkbox no está marcado
          if ($checkbox.is(":checked")) {
            $checkbox.click();
          }
        })
        .should("not.be.checked");
      cy.wait(500);

      cy.contains("label", "Deleted")
        .parent()
        .find('input[type="checkbox"]')
        .then(($checkbox) => {
          // Verifica si el checkbox no está marcado
          if ($checkbox.is(":checked")) {
            $checkbox.click();
          }
        })
        .should("not.be.checked");
      cy.wait(1000);

      cy.get("body").click(150, 100);
      cy.wait(500);

      cy.get('[data-testid="history-modal"]').each(($row) => {
        // Verificar si en cada fila existe el texto 'Page added:'
        cy.wrap($row)
          .find(":nth-child(2) > .gap-3 > .grow > :nth-child(1) > .text-sm")
          .should("contain.text", "Page added");
      });
    });
  });
});
