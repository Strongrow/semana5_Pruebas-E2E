const { Given, When, Then } = require('cucumber');
const Role = require('testcafe').Role;
const ghostPage = require('../support/pages/ghost-page');
const { Selector } = require('testcafe');
const fs = require('fs');

Given('Abrir la pagina de ghost v4', async function () {
    await testController.navigateTo(ghostPage.ghost.url());
    await testController.takeScreenshot();
});

When('Ingreso el usuario v4 {string}', async function (username) {

    await testController.typeText(ghostPage.ghost.loginUsername(), username);
});

When('Ingreso el password v4 {string}', async function (password) {

    await testController.typeText(ghostPage.ghost.loginPassword(), password);

});

When('Dar click en el boton Login v4', async function () {

    await testController.click(ghostPage.ghost.loginButton());

});


When('Ir al menu Tags v4', async function () {
    await testController.click(ghostPage.ghost.menuTags());
});

When('Dar click en el boton New Tag v4', async function () {
    await testController.click(ghostPage.ghost.botonNewTag());
});

When('Diligenciar el campo de slug muy largo {string}', async function (name) {

    //Se trae texto aleatorio para el titulo del tag con el uso de Mockaroo APIs
    const response = await testController.request("https://my.api.mockaroo.com/tags.json?key=3856ffb0");
    var slug_invalido = response.body[0].slug_invalido;
    console.log("valor del tag_color_invalido... " + slug_invalido);


    await testController.typeText(ghostPage.ghost.texto_slug(), slug_invalido);
});

When('Dar click en el boton save v4', async function () {
    await testController.click(ghostPage.ghost.buttonSaveNewTag());
});



Then('Verificar el nuevo tag v4 {string}', async function (tag_name) {


    const msg_error = await ghostPage.ghost.msg_tag_slug_err().exists;
    console.log("--msg_error--------- "+msg_error);

    await testController.expect(msg_error).ok();

});

