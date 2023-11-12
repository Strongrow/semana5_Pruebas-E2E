const { Given, When, Then } = require('cucumber');
const Role = require('testcafe').Role;
const ghostPage = require('../support/pages/ghost-page');
//const Selector = require('testcafe').Selector;

Given('Abrir la pagina de ghost', async function () {
    await testController.navigateTo(ghostPage.ghost.url());
    await testController.takeScreenshot();
});

When('Ingreso el usuario {string}', async function (username) {
    await testController.typeText(ghostPage.ghost.loginUsername(), username);
    await testController.takeScreenshot();
});

When('Ingreso el password {string}', async function (password) {
    await testController.typeText(ghostPage.ghost.loginPassword(), password);
    await testController.takeScreenshot();
});

When('Dar click en el boton Login', async function () {
    await testController.click(ghostPage.ghost.loginButton());
    await testController.takeScreenshot();
});


When('Ir al menu Tags', async function () {
    await testController.click(ghostPage.ghost.menuTags());
    await testController.takeScreenshot();
});

When('Dar click en el boton New Tag', async function () {
    await testController.click(ghostPage.ghost.botonNewTag());
    await testController.takeScreenshot();
});

When('Diligenciar el campo Name {string}', async function (name) {
    await testController.typeText(ghostPage.ghost.newTag_tag_name(), name);
    await testController.takeScreenshot();
});

When('Diligenciar el campo Color {string}', async function (color) {
    await testController.typeText(ghostPage.ghost.newTag_data_test_input(), color);
    await testController.takeScreenshot();
});

When('Diligenciar el campo description {string}', async function (descripcion) {
    await testController.typeText(ghostPage.ghost.newTag_tag_description(), descripcion);
    await testController.takeScreenshot();
});

When('Dar click en el boton save', async function () {
    await testController.click(ghostPage.ghost.buttonSaveNewTag());
    await testController.takeScreenshot();
});

When('Dar click al menu Tags', async function () {
    await testController.click(ghostPage.ghost.menuTags());
    await testController.takeScreenshot();
});


Then('Verificar el nuevo tag {string}', async function (tag_name) {

    const elWithAttrName = await ghostPage.ghost.lista_tags_name(tag_name).exists;
    //console.log("----------- "+elWithAttrName);

    await testController.expect(elWithAttrName).ok();

});

