const { Given, When, Then } = require('cucumber');
const Role = require('testcafe').Role;
const ghostPage = require('../support/pages/ghost-page');
const { Selector } = require('testcafe');
const fs = require('fs');

Given('Abrir la pagina de ghost v2', async function () {
    await testController.navigateTo(ghostPage.ghost.url());
    await testController.takeScreenshot();
});

When('Ingreso el usuario v2 {string}', async function (username) {

    await testController.typeText(ghostPage.ghost.loginUsername(), username);
});

When('Ingreso el password v2 {string}', async function (password) {

    await testController.typeText(ghostPage.ghost.loginPassword(), password);

});

When('Dar click en el boton Login v2', async function () {

    await testController.click(ghostPage.ghost.loginButton());

});


When('Ir al menu Tags v2', async function () {
    await testController.click(ghostPage.ghost.menuTags());
});

When('Dar click en el boton New Tag v2', async function () {
    await testController.click(ghostPage.ghost.botonNewTag());
});

When('Diligenciar el campo Name con mas de 191 caracteres v2 {string}', async function (name) {

    //Se trae texto aleatorio para el titulo del tag con el uso de Mockaroo APIs
    const response = await testController.request("https://my.api.mockaroo.com/tags.json?key=3856ffb0");
    var tag_name_aleatorio = response.body[0].tag_name_invalido;
    console.log("valor del tag name... " + tag_name_aleatorio);


    await testController.typeText(ghostPage.ghost.newTag_tag_name(), tag_name_aleatorio);
});

When('Dar click en el boton save v2', async function () {
    await testController.click(ghostPage.ghost.buttonSaveNewTag());
});



Then('Verificar el nuevo tag v2 {string}', async function (tag_name) {


    const msg_error = await ghostPage.ghost.msg_tag_name_err().exists;
    console.log("--msg_error--------- "+msg_error);

    await testController.expect(msg_error).ok();

});

