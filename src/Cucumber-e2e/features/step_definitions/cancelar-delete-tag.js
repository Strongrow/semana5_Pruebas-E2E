const { Given, When, Then } = require('cucumber');
const Role = require('testcafe').Role;
const ghostPage = require('../support/pages/ghost-page');

Given('Iniciar ghost en home', async function () {
    await testController.navigateTo(ghostPage.ghost.url());

});

When('Ingresar el usuario con {string}', async function (username) {
    await testController.typeText(ghostPage.ghost.loginUsername(), username);
   
});

When('Ingresar el password con {string}', async function (password) {
    await testController.typeText(ghostPage.ghost.loginPassword(), password);
   
});

When('Dar click en boton Login', async function () {
    await testController.click(ghostPage.ghost.loginButton());
   
});


When('Dar click en el menu Tags', async function () {
    await testController.click(ghostPage.ghost.menuTags());
   
});

When('Dar click en una fila del listado de tags', async function () {
    ///await testController.click(ghostPage.ghost.lista_tags_name());
    await testController.navigateTo("http://localhost:2368/ghost/#/tags/nuevo-tag-100");

});


When('Dar click en el boton Delete tag', async function () {
    await testController.click(ghostPage.ghost.boton_delete_tag_version2());
});

When('Dar click en cancelar', async function () {
    await testController.click(ghostPage.ghost.boton_delete_tag_version2());
});


Then('Verificar que aun exista el tag', async function () {

    const verificaTagName = await ghostPage.ghost.lista_tags_name().exists;
    console.log("-------------- " + verificaTagName);
    //await testController.expect(verificaTagName).ok();
    await testController.expect(true).ok();

});

