import propierties from "../assets/propierties.json";

export function takeCypressScreenshot(stepName) {
  let ghostVersion = propierties.GHOST_VER;
  cy.screenshot(
    `v${ghostVersion}_${Cypress.currentTest.titlePath[0].replace(
      " ",
      ""
    )}_${stepName}`,
    { overwrite: true }
  );
}
