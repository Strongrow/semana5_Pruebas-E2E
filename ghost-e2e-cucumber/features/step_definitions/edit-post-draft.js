const { Given, When, Then } = require('cucumber');
const Role = require('testcafe').Role;
const ghostPage = require('../support/pages/ghost-page');
const feature_name = "edit-post-draft";

Given('Ir al home ghost', async function () {
    await testController.navigateTo(ghostPage.ghost.url_5_69());
    await testController.takeScreenshot({
        path: feature_name + "/before-1.png",
        fullPage: true,
    });

});

When('Escribir el usuario {string}', async function (username) {
    await testController.typeText(ghostPage.ghost.loginUsername(), username);
    await testController.takeScreenshot({
        path: feature_name + "/before-2.png",
        fullPage: true,
    });

});

When('Escribir el password {string}', async function (password) {
    await testController.typeText(ghostPage.ghost.loginPassword(), password);
    await testController.takeScreenshot({
        path: feature_name + "/before-3.png",
        fullPage: true,
    });
});

When('Ir al boton Login', async function () {
    await testController.click(ghostPage.ghost.loginButton());
    await testController.takeScreenshot({
        path: feature_name + "/before-4.png",
        fullPage: true,
    });
});


When('Ir al menu posts', async function () {
    await testController.click(ghostPage.ghost.menuPost());
    await testController.takeScreenshot({
        path: feature_name + "/before-5.png",
        fullPage: true,
    });
});

When('Dar click en el boton editar', async function () {
    await testController.click(ghostPage.ghost.boton_editar_post_draft());
    await testController.takeScreenshot({
        path: feature_name + "/before-6.png",
        fullPage: true,
    });
});

When('Editar el titulo del post borrador agregando texto {string}', async function (titulo) {
    await testController.typeText(ghostPage.ghost.text_area_titulo_post_draft(), titulo);
    await testController.takeScreenshot({
        path: feature_name + "/before-7.png",
        fullPage: true,
    });
});


When('Volver a los posts', async function () {
    await testController.click(ghostPage.ghost.menuPost());
    await testController.takeScreenshot({
        path: feature_name + "/before-8.png",
        fullPage: true,
    });
});


Then('Verificar el campo de nombre editado', async function () {

    const nombreEditado = await ghostPage.ghost.boton_editar_post_draft().exists;
    //console.log("----------- "+nombreEditado);
    await testController.expect(nombreEditado).ok();

});

