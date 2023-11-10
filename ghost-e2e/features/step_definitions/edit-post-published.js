const { Given, When, Then } = require('cucumber');
const Role = require('testcafe').Role;
const ghostPage = require('../support/pages/ghost-page');
//const Selector = require('testcafe').Selector;

Given('Home de ghost', async function () {
    await testController.navigateTo(ghostPage.ghost.url());
    await testController.takeScreenshot();
});

When('Digitar el usuario {string}', async function (username) {
    await testController.typeText(ghostPage.ghost.loginUsername(), username);
    await testController.takeScreenshot();
});

When('Digitar el password {string}', async function (password) {
    await testController.typeText(ghostPage.ghost.loginPassword(), password);
    await testController.takeScreenshot();
});

When('Dar en boton Login', async function () {
    await testController.click(ghostPage.ghost.loginButton());
    await testController.takeScreenshot();
});


When('Dar en menu posts', async function () {
    await testController.click(ghostPage.ghost.menuPost());
    await testController.takeScreenshot();
});

When('Dar en el boton editar', async function () {
    await testController.click(ghostPage.ghost.boton_editar_post_published());
    await testController.takeScreenshot();
});

When('Editar el titulo del post publicado {string}', async function (titulo) {
    await testController.typeText(ghostPage.ghost.text_area_titulo_post_published(), titulo);
    await testController.takeScreenshot();
});


When('Dar en boton update', async function () {
    await testController.click(ghostPage.ghost.boton_update_post_published());
    await testController.takeScreenshot();
});

When('Volver a posts', async function () {
    await testController.click(ghostPage.ghost.menuPost());
    await testController.takeScreenshot();
});


Then('Verificar el nombre editado', async function () {

    const nombreEditado = await ghostPage.ghost.boton_editar_post_draft().exists;
    //console.log("----------- "+nombreEditado);
    await testController.expect(nombreEditado).ok();

});

