const { Given, When, Then } = require('cucumber');
const Role = require('testcafe').Role;
const ghostPage = require('../support/pages/ghost-page');
const { Selector } = require('testcafe');
const fs = require('fs');

Given('Abrir la pagina de ghost v5', async function () {
    await testController.navigateTo(ghostPage.ghost.url());
    await testController.takeScreenshot();
});

When('Ingreso el usuario v5 {string}', async function (username) {

    await testController.typeText(ghostPage.ghost.loginUsername(), username);
});

When('Ingreso el password v5 {string}', async function (password) {

    await testController.typeText(ghostPage.ghost.loginPassword(), password);

});

When('Dar click en el boton Login v5', async function () {

    await testController.click(ghostPage.ghost.loginButton());

});


When('Ir al menu Tags v5', async function () {
    await testController.click(ghostPage.ghost.menuTags());
});

When('Dar click en el boton New Tag v5', async function () {
    await testController.click(ghostPage.ghost.botonNewTag());
});

When('Diligenciar el campo de description muy largo {string}', async function (name) {

    //Se trae texto aleatorio para el titulo del tag con el uso de Mockaroo APIs
    const response = await testController.request("https://my.api.mockaroo.com/tags.json?key=3856ffb0");
    var tag_name_invalido = response.body[0].tag_name_invalido;
    console.log("valor del tag_name_invalido... " + tag_name_invalido);


    await testController.typeText(ghostPage.ghost.newTag_tag_description(), tag_name_invalido);
});

When('Dar click en el boton save v5', async function () {
    await testController.click(ghostPage.ghost.buttonSaveNewTag());
});



Then('Verificar el nuevo tag v5 {string}', async function (tag_name) {


    const msg_error = await ghostPage.ghost.msg_tag_description_err().exists;
    console.log("--msg_error--------- "+msg_error);

    await testController.expect(msg_error).ok();

});

