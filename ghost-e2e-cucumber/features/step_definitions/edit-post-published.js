const { Given, When, Then } = require('cucumber');
const Role = require('testcafe').Role;
const ghostPage = require('../support/pages/ghost-page');
const feature_name = "edit-post-published";

Given('Home de ghost', async function () {
    await testController.navigateTo(ghostPage.ghost.url_5_69());
    await testController.takeScreenshot({
        path: feature_name + "/before-1.png",
        fullPage: true,
    });
});

When('Digitar el usuario {string}', async function (username) {
    await testController.typeText(ghostPage.ghost.loginUsername(), username);
    await testController.takeScreenshot({
        path: feature_name + "/before-2.png",
        fullPage: true,
    });
});

When('Digitar el password {string}', async function (password) {
    await testController.typeText(ghostPage.ghost.loginPassword(), password);
    await testController.takeScreenshot({
        path: feature_name + "/before-3.png",
        fullPage: true,
    });
});

When('Dar en boton Login', async function () {
    await testController.click(ghostPage.ghost.loginButton());
    await testController.takeScreenshot({
        path: feature_name + "/before-4.png",
        fullPage: true,
    });
});


When('Dar en menu posts', async function () {
    await testController.click(ghostPage.ghost.menuPost());
    await testController.takeScreenshot({
        path: feature_name + "/before-5.png",
        fullPage: true,
    });
});

When('Dar en el boton editar', async function () {
    await testController.click(ghostPage.ghost.boton_editar_post_published());
    await testController.takeScreenshot({
        path: feature_name + "/before-6.png",
        fullPage: true,
    });
});

When('Editar el titulo del post publicado {string}', async function (titulo) {
    await testController.typeText(ghostPage.ghost.text_area_titulo_post_published(), titulo);
    await testController.takeScreenshot({
        path: feature_name + "/before-7.png",
        fullPage: true,
    });
});


When('Dar en boton update', async function () {
    await testController.click(ghostPage.ghost.boton_update_post_published());
    await testController.takeScreenshot({
        path: feature_name + "/before-8.png",
        fullPage: true,
    });
});

When('Volver a posts', async function () {
    await testController.click(ghostPage.ghost.menuPost());
    await testController.takeScreenshot({
        path: feature_name + "/before-9.png",
        fullPage: true,
    });
});


Then('Verificar el nombre editado', async function () {

    const nombreEditado = await ghostPage.ghost.boton_editar_post_draft().exists;
    //console.log("----------- "+nombreEditado);
    await testController.expect(nombreEditado).ok();

});

