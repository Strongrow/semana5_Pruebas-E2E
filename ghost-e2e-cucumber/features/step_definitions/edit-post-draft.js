const { Given, When, Then } = require('cucumber');
const Role = require('testcafe').Role;
const ghostPage = require('../support/pages/ghost-page');
//const Selector = require('testcafe').Selector;

Given('Go to home ghost', async function () {
    await testController.navigateTo(ghostPage.ghost.url());
    await testController.takeScreenshot();
});

When('Escribir el usuario {string}', async function (username) {
    await testController.typeText(ghostPage.ghost.loginUsername(), username);
    await testController.takeScreenshot();
});

When('Escribir el password {string}', async function (password) {
    await testController.typeText(ghostPage.ghost.loginPassword(), password);
    await testController.takeScreenshot();
});

When('Ir al boton Login', async function () {
    await testController.click(ghostPage.ghost.loginButton());
    await testController.takeScreenshot();
});


When('Ir al menu posts', async function () {
    await testController.click(ghostPage.ghost.menuPost());
    await testController.takeScreenshot();
});

When('Dar click en el boton editar', async function () {
    await testController.click(ghostPage.ghost.boton_editar_post_draft());
    await testController.takeScreenshot();
});

When('Editar el titulo del post borrador agregando texto {string}', async function (titulo) {
    await testController.typeText(ghostPage.ghost.text_area_titulo_post_draft(), titulo);
    await testController.takeScreenshot();
});


When('Volver a los posts', async function () {
    await testController.click(ghostPage.ghost.menuPost());
    await testController.takeScreenshot();
});


Then('Verificar el campo de nombre editado', async function () {

    const nombreEditado = await ghostPage.ghost.boton_editar_post_draft().exists;
    //console.log("----------- "+nombreEditado);
    await testController.expect(nombreEditado).ok();

});

