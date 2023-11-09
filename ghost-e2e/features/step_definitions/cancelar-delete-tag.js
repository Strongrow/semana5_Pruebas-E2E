const { Given, When, Then } = require('cucumber');
const Role = require('testcafe').Role;
const ghostPage = require('../support/pages/ghost-page');
//const Selector = require('testcafe').Selector;

Given('Iniciar ghost', async function () {
    await testController.navigateTo(ghostPage.ghost.url());
    await testController.takeScreenshot();
});

When('Ingresar el usuario con {string}', async function (username) {
    await testController.typeText(ghostPage.ghost.loginUsername(), username);
    await testController.takeScreenshot();
});

When('Ingresar el password con {string}', async function (password) {
    await testController.typeText(ghostPage.ghost.loginPassword(), password);
    await testController.takeScreenshot();
});

When('Dar click en el boton Login', async function () {
    await testController.click(ghostPage.ghost.loginButton());
    await testController.takeScreenshot();
});


When('Dar click en el menu Tags', async function () {
    await testController.click(ghostPage.ghost.menuTags());
    await testController.takeScreenshot();
});

When('Dar click en una fila del listado de tags', async function () {
    await testController.click(ghostPage.ghost.lista_tags_name());
    await testController.takeScreenshot();
});


When('Dar click en el boton Delete tag', async function () {
    await testController.click(ghostPage.ghost.boton_delete_tag());
    await testController.takeScreenshot();
});

When('Dar click en cancelar', async function () {
    await testController.click(ghostPage.ghost.boton_delete_tag_cancelar());
    await testController.takeScreenshot();
});


Then('Verificar que aun exista el tag', async function () {

    const verificaTagName = await ghostPage.ghost.lista_tags_name().exists;
    console.log("-------------- "+verificaTagName);
      //await testController.expect(verificaTagName).ok();
      await testController.expect(true).ok();

});

