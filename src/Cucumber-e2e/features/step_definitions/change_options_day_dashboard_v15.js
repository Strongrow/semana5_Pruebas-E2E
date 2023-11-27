const { Given, When, Then } = require('cucumber');
const ghostPage = require('../support/pages/ghost-page');
const { Selector } = require('testcafe');
const fs = require('fs');
const { faker } = require('@faker-js/faker');

Given('Abrir la pagina de ghost v15', async function () {

    await testController.navigateTo(ghostPage.ghost.url());

});

When('Ingreso el usuario v15 {string}', async function (username) {
    await testController.typeText(ghostPage.ghost.loginUsername(), username);
});

When('Ingreso el password v15 {string}', async function (password) {
    await testController.typeText(ghostPage.ghost.loginPassword(), password);
});

When('Dar click en el boton Login v15', async function () {
    await testController.click(ghostPage.ghost.loginButton());
});


When('Dar en la lista de opciones Days', async function () {

    const buttons = Selector('[aria-haspopup="listbox"]');
    await testController.click(buttons);
    await testController.wait(4000);
});

When('Dar en el submenu Days y elegir una opcion', async function () {
    var numero_aleatorio = faker.number.int({ min: 0, max: 2 });

    console.log("valor del sub-menu a buscar... " + numero_aleatorio);
    //numero_aleatorio=2;
    if (numero_aleatorio == 0) {
        const buttons = Selector('[data-option-index="0"]');
        await testController.click(buttons);
    }
    if (numero_aleatorio == 1) {
        const buttons = Selector('[data-option-index="1"]');
        await testController.click(buttons);
    }
    if (numero_aleatorio == 2) {
        const buttons = Selector('[data-option-index="2"]');
        await testController.click(buttons);
    }
    await testController.wait(4000);

});

Then('Verificamos que no existan errorres', async function () {

    const verificaMenuPost = await ghostPage.ghost.menuPost().exists;

    await testController.expect(verificaMenuPost).ok();


});

