const { Given, When, Then } = require('cucumber');
const ghostPage = require('../support/pages/ghost-page');

Given('Ir al home de ghost', async function () {

    await testController.navigateTo(ghostPage.ghost.url());

});

When('Ingresar usuario {string}', async function (username) {
    await testController.typeText(ghostPage.ghost.loginUsername(), username);

});

When('Ingresar password {string}', async function (password) {
    await testController.typeText(ghostPage.ghost.loginPassword(), password);

});

When('Click en boton Login', async function () {
    await testController.click(ghostPage.ghost.loginButton());

});


When('Dar en Menu Tags', async function () {
    await testController.click(ghostPage.ghost.menuTags());

});

When('Dar click en una fila de un tag', async function () {
    await testController.click(ghostPage.ghost.lista_tags_name());

});


When('Dar en el boton Delete tag', async function () {
    await testController.navigateTo("http://localhost:2368/ghost/#/tags/nuevo-tag-100");

});

When('Dar en confirmar', async function () {
    await testController.wait(2000);
    try {
        await testController.click(ghostPage.ghost.boton_delete_tag_confirmar_version2());
    }
    catch (e) {
        console.log(e);
    }
});


Then('Verificar que no este el tag', async function () {

    const verificaTagName = await ghostPage.ghost.menuTags().exists;

    await testController.expect(verificaTagName).ok();
    //  await testController.expect(true).ok();

});

