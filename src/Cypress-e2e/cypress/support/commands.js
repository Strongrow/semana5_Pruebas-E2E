Cypress.Commands.add("getByFor", (selector)=>{
    return cy.get(`[for=${selector}]`);
});

Cypress.Commands.add("getByData", (selector)=>{
    return cy.get(`[data-test-button=${selector}]`);
});

Cypress.Commands.add("getByClip", (selector)=>{
    return cy.get(`[data-ebd-id=${selector}]`);
});

Cypress.Commands.add("getByRole", (selector)=>{
    return cy.get(`[role=${selector}]`);
});

Cypress.Commands.add("getByName", (selector)=>{
    return cy.get(`[name=${selector}]`);
});

Cypress.Commands.add("getByType", (selector)=>{
    return cy.get(`[type=${selector}]`);
});

