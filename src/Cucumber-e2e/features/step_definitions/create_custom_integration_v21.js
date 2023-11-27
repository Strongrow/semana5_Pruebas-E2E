const { Given, When, Then } = require('cucumber');
const ghostPage = require('../support/pages/ghost-page');
const { Selector } = require('testcafe');
const fs = require('fs');
const { faker } = require('@faker-js/faker');

Given('Abrir la pagina de ghost v21', async function () {

    await testController.navigateTo(ghostPage.ghost.url());

});

When('Ingreso el usuario v21 {string}', async function (username) {
    await testController.typeText(ghostPage.ghost.loginUsername(), username);
});

When('Ingreso el password v21 {string}', async function (password) {
    await testController.typeText(ghostPage.ghost.loginPassword(), password);
});

When('Dar click en el boton Login v21', async function () {
    await testController.click(ghostPage.ghost.loginButton());
});


When('Ir a setting integrations v21', async function () {

    await testController.navigateTo(ghostPage.ghost.url_integrations());


});

When('Seleccionar Add custom integratios v21', async function () {

    await testController.navigateTo(ghostPage.ghost.url_integrations_new());
    await testController.wait(4000);

});

When('Crear el nombre de la integracion v21', async function () {


    const response = await testController.request("https://my.api.mockaroo.com/tags.json?key=3856ffb0");
    var nombre_integracion = response.body[0].tag_name;
    console.log("valor del nombre_integracion... " + nombre_integracion);

    await testController.typeText(ghostPage.ghost.campo_nombre_integracion(), nombre_integracion);



});


When('Dar en Add v21', async function () {

    await testController.click(ghostPage.ghost.botonAddIntegration());

    await testController.wait(4000);

});



Then('Verificamos que no existan errorres v21', async function () {

    const verificaMenuPost = await ghostPage.ghost.menuPost().exists;

    await testController.expect(verificaMenuPost).ok();


});

