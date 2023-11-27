const { Given, When, Then } = require('cucumber');
const ghostPage = require('../support/pages/ghost-page');
const { Selector } = require('testcafe');
const fs = require('fs');
const { faker } = require('@faker-js/faker');

Given('Abrir la pagina de ghost v19', async function () {

    await testController.navigateTo(ghostPage.ghost.url());

});

When('Ingreso el usuario v19 {string}', async function (username) {
    await testController.typeText(ghostPage.ghost.loginUsername(), username);
});

When('Ingreso el password v19 {string}', async function (password) {
    await testController.typeText(ghostPage.ghost.loginPassword(), password);
});

When('Dar click en el boton Login v19', async function () {
    await testController.click(ghostPage.ghost.loginButton());
});


When('Ir a post v19', async function () {


    const buttons = Selector('[href="#/posts/"]');
    await testController.click(buttons);
    await testController.wait(4000);


});

When('Seleccionar un filtro al azar de los tipos de post All tags', async function () {
    var numero_aleatorio = faker.number.int({ min: 0, max: 2 });

    console.log("valor del sub-menu a buscar... " + numero_aleatorio);

    const buttons1 = Selector('span').withText('All tags');
    await testController.click(buttons1);
    await testController.wait(4000);

    //numero_aleatorio =2;
    if (numero_aleatorio == 0) {
        const buttons2 = Selector('[data-option-index="0"]');
        await testController.click(buttons2);
        await testController.wait(4000);

    }

    if (numero_aleatorio == 1) {

        const buttons2 = Selector('[data-option-index="1"]');
        await testController.click(buttons2);
        await testController.wait(4000);

    }

    if (numero_aleatorio == 2) {

        const buttons2 = Selector('[data-option-index="2"]');
        await testController.click(buttons2);
        await testController.wait(4000);
    }

});

Then('Verificamos que no existan errorres v19', async function () {

    const verificaMenuPost = await ghostPage.ghost.menuPost().exists;

    await testController.expect(verificaMenuPost).ok();


});

