const { Given, When, Then } = require('cucumber');
const Role = require('testcafe').Role;
const ghostPage = require('../support/pages/ghost-page');
const feature_name = "edit-post-draft";
const id_post_draft="65594de9158d0e0001a570c4";

Given('Go to home ghost otra url', async function () {
    await testController.navigateTo(ghostPage.ghost.url_5_73());

    await testController.takeScreenshot({
        path: feature_name + "/after-1.png",
        fullPage: true,
    });

    ghostPage.ghost.comparador(feature_name, "before-1.png", "after-1.png", 1);
});

When('Escribir el usuario otra url {string}', async function (username) {
    await testController.typeText(ghostPage.ghost.loginUsername_version2(), username);

    await testController.takeScreenshot({
        path: feature_name + "/after-2.png",
        fullPage: true,
    });


    ghostPage.ghost.comparador(feature_name, "before-2.png", "after-2.png", 2);
});

When('Escribir el password otra url {string}', async function (password) {
    await testController.typeText(ghostPage.ghost.loginPassword_version2(), password);

    await testController.takeScreenshot({
        path: feature_name + "/after-3.png",
        fullPage: true,
    });
    ghostPage.ghost.comparador(feature_name, "before-3.png", "after-3.png", 3);
});

When('Ir al boton Login otra url', async function () {
    await testController.click(ghostPage.ghost.loginButton());

    await testController.takeScreenshot({
        path: feature_name + "/after-4.png",
        fullPage: true,
    });
    ghostPage.ghost.comparador(feature_name, "before-4.png", "after-4.png", 4);

});


When('Ir al menu posts otra url', async function () {
    await testController.click(ghostPage.ghost.menuPost());

    await testController.takeScreenshot({
        path: feature_name + "/after-5.png",
        fullPage: true,
    });
    ghostPage.ghost.comparador(feature_name, "before-5.png", "after-5.png", 5);
});

When('Dar click en el boton editar otra url', async function () {
    await testController.click(ghostPage.ghost.boton_editar_post_draft());

    await testController.takeScreenshot({
        path: feature_name + "/after-6.png",
        fullPage: true,
    });
    ghostPage.ghost.comparador(feature_name, "before-6.png", "after-6.png", 6);

});

When('Editar el titulo del post borrador agregando texto otra url {string}', async function (titulo) {
    await testController.typeText(ghostPage.ghost.text_area_titulo_post_draft(), titulo);

    await testController.takeScreenshot({
        path: feature_name + "/after-7.png",
        fullPage: true,
    });
    ghostPage.ghost.comparador(feature_name, "before-7.png", "after-7.png", 7);
});


When('Volver a los posts otra url', async function () {
    await testController.click(ghostPage.ghost.menuPost());

    await testController.takeScreenshot({
        path: feature_name + "/after-8.png",
        fullPage: true,
    });
    ghostPage.ghost.comparador(feature_name, "before-8.png", "after-8.png", 8);

});


Then('Verificar el campo de nombre editado otra url', async function () {

    const nombreEditado = await ghostPage.ghost.boton_editar_post_draft().exists;
    //console.log("----------- "+nombreEditado);
    await testController.expect(nombreEditado).ok();

});

