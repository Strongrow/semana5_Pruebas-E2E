import { faker } from "@faker-js/faker";
class OptionsSettings {
  getMenuSettings() {
    return cy.get('[data-test-nav="settings"]').click();
  }
  getGeneralMetadata() {
    cy.get("#metadata").click();
    cy.get('[data-testid="metadata"]').find("button").contains("Edit").click();
  }

  getMetadataTitle() {
    const fakeTitle = faker.lorem.sentence().substring(0, 50);
    return cy
      .get('input[placeholder="Pruebas Automatizadas"]')
      .clear()
      .type(fakeTitle)
      .then(() => fakeTitle);
  }

  getMetadataTitleLong() {
    const fakeTitle = faker.lorem.sentence().substring(0, 350);
    return cy
      .get('input[placeholder="Pruebas Automatizadas"]')
      .clear()
      .type(fakeTitle);
  }

  getHistory() {
    cy.get("#history").click();
    cy.wait(500);
    cy.get('[data-testid="history"]')
      .find("button")
      .contains("View history")
      .click();
  }

  getFilterHitory() {
    cy.get('button[type="button"]').click();
    cy.wait(500);
    cy.get('input[type="checkbox"].min-w-[28px]').click().should("be.checked");
  }
}

export default OptionsSettings;
