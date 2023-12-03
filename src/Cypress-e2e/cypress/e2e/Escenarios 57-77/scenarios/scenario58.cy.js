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
      optionsSettings.getGeneralMetadata();
      cy.screenshot();
      cy.wait(500);

      //When, the meta data title is added
      optionsSettings.getMetadataTitle().then((title) => {
        fakeTitle = title;
      });
      cy.screenshot();
      cy.wait(500);

      // And, click on button save.
      cy.get('[data-testid="metadata"]')
        .find("button")
        .contains("Save")
        .click();
      cy.screenshot();
      cy.wait(500);

      // And, click edit button again
      cy.get('[data-testid="metadata"]')
        .find("button")
        .contains("Edit")
        .should("be.visible")
        .click();
      cy.screenshot();
      cy.wait(500);

      // Then, Meta Data title is confirmed.
      cy.get('input[placeholder="Pruebas Automatizadas"]')
        .invoke("val")
        .then((inputText) => {
          cy.get("div.mt-1 > span.text-lg")
            .invoke("text")
            .should((spanText) => {
              console.log(`Input Text: ${inputText}`);
              console.log(`Span Text: ${spanText}`);
              expect(inputText.trim()).to.eq(spanText.trim());
            });
        });
      cy.screenshot();
      cy.wait(500);
    });
  });
});
