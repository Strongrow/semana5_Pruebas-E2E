const { Given, When, Then } = require('cucumber');
const Role = require('testcafe').Role;
const ghostPage = require('../support/pages/ghost-page');
const feature_name = "edit-post-published";

Given('ghost home', async function () {
    await testController.navigateTo(ghostPage.ghost.url_5_73());
    await testController.takeScreenshot({
        path: feature_name + "/after-1.png",
        fullPage: true,
    });

    ghostPage.ghost.comparador(feature_name, "before-1.png", "after-1.png", 1);
});

When('usuario {string}', async function (username) {
    await testController.typeText(ghostPage.ghost.loginUsername(), username);
    await testController.takeScreenshot({
        path: feature_name + "/after-2.png",
        fullPage: true,
    });

    ghostPage.ghost.comparador(feature_name, "before-2.png", "after-2.png", 2);
});

When('password {string}', async function (password) {
    await testController.typeText(ghostPage.ghost.loginPassword(), password);
    await testController.takeScreenshot({
        path: feature_name + "/after-3.png",
        fullPage: true,
    });

    ghostPage.ghost.comparador(feature_name, "before-3.png", "after-3.png", 3);
});

When('Boton Login', async function () {
    await testController.click(ghostPage.ghost.loginButton());
    await testController.takeScreenshot({
        path: feature_name + "/after-4.png",
        fullPage: true,
    });

    ghostPage.ghost.comparador(feature_name, "before-4.png", "after-4.png", 4);
});


When('Menu posts', async function () {
    await testController.click(ghostPage.ghost.menuPost());
    await testController.takeScreenshot({
        path: feature_name + "/after-5.png",
        fullPage: true,
    });

    ghostPage.ghost.comparador(feature_name, "before-5.png", "after-5.png", 5);
});

When('Boton editar', async function () {
    await testController.click(ghostPage.ghost.boton_editar_post_published());
    await testController.takeScreenshot({
        path: feature_name + "/after-6.png",
        fullPage: true,
    });

    ghostPage.ghost.comparador(feature_name, "before-6.png", "after-6.png", 6);
});

When('Editar titulo del post publicado {string}', async function (titulo) {
    await testController.typeText(ghostPage.ghost.text_area_titulo_post_published(), titulo);
    await testController.takeScreenshot({
        path: feature_name + "/after-7.png",
        fullPage: true,
    });

    ghostPage.ghost.comparador(feature_name, "before-7.png", "after-7.png", 7);
});


When('Boton update', async function () {
    await testController.click(ghostPage.ghost.boton_update_post_published());
    await testController.takeScreenshot({
        path: feature_name + "/after-8.png",
        fullPage: true,
    });

    ghostPage.ghost.comparador(feature_name, "before-8.png", "after-8.png", 8);
});

When('Volver a posts para visualizar el cambio', async function () {
    await testController.click(ghostPage.ghost.menuPost());
    await testController.takeScreenshot({
        path: feature_name + "/after-9.png",
        fullPage: true,
    });

    ghostPage.ghost.comparador(feature_name, "before-9.png", "after-9.png", 9);
});


Then('Verificar el nombre editado en la lista', async function () {

    const nombreEditado = await ghostPage.ghost.boton_editar_post_draft().exists;
    //console.log("----------- "+nombreEditado);
    await testController.expect(nombreEditado).ok();

});

