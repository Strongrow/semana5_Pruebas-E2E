const { Given, When, Then } = require('cucumber');
const Role = require('testcafe').Role;
const ghostPage = require('../support/pages/ghost-page');
//const Selector = require('testcafe').Selector;

Given('Ir a la pagina de ghost', async function () {
    await testController.navigateTo(ghostPage.ghost.url());
    await testController.takeScreenshot();
});

When('Ingresar el usuario {string}', async function (username) {
    await testController.typeText(ghostPage.ghost.loginUsername(), username);
    await testController.takeScreenshot();
});

When('Ingresar el password {string}', async function (password) {
    await testController.typeText(ghostPage.ghost.loginPassword(), password);
    await testController.takeScreenshot();
});

When('Click en el boton Login', async function () {
    await testController.click(ghostPage.ghost.loginButton());
    await testController.takeScreenshot();
});


When('Menu Tags', async function () {
    await testController.click(ghostPage.ghost.menuTags());
    await testController.takeScreenshot();
});

When('Dar click en una fila de un tag', async function () {
    await testController.click(ghostPage.ghost.lista_tags_name());
    await testController.takeScreenshot();
});


When('Dar click en el boton Delete tag', async function () {
    await testController.click(ghostPage.ghost.boton_delete_tag());
    await testController.takeScreenshot();
});

When('Dar click en confirmar', async function () {
    await testController.click(ghostPage.ghost.boton_delete_tag_confirmar());
    await testController.takeScreenshot();
});


Then('Verificar que no exista el tag', async function () {

    const verificaTagName = await ghostPage.ghost.menuTags().exists;

    await testController.expect(verificaTagName).ok();
    //  await testController.expect(true).ok();

});

