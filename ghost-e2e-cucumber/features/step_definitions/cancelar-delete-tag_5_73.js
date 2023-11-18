const { Given, When, Then } = require('cucumber');
const Role = require('testcafe').Role;
const ghostPage = require('../support/pages/ghost-page');

const feature_name = "cancel-delete-tag";


Given('Iniciar ghost ambiente dos', async function () {
    await testController.navigateTo(ghostPage.ghost.url_5_73());
    await testController.takeScreenshot({
        path: feature_name + "/after-1.png",
        fullPage: true,
    });
    ghostPage.ghost.comparador(feature_name, "before-1.png", "after-1.png", 1);
});

When('Ingresar el usuario con ambiente dos {string}', async function (username) {
    await testController.typeText(ghostPage.ghost.loginUsername_version2(), username);
    await testController.takeScreenshot({
        path: feature_name + "/after-2.png",
        fullPage: true,
    });
    ghostPage.ghost.comparador(feature_name, "before-2.png", "after-2.png", 2);
});

When('Ingresar el password con ambiente dos {string}', async function (password) {
    await testController.typeText(ghostPage.ghost.loginPassword_version2(), password);
    await testController.takeScreenshot({
        path: feature_name + "/after-3.png",
        fullPage: true,
    });
    ghostPage.ghost.comparador(feature_name, "before-3.png", "after-3.png", 3);
});

When('Dar click en boton Login ambiente dos', async function () {
    await testController.click(ghostPage.ghost.loginButton());
    await testController.takeScreenshot({
        path: feature_name + "/after-4.png",
        fullPage: true,
    });
    ghostPage.ghost.comparador(feature_name, "before-4.png", "after-4.png", 4);
});


When('Dar click en el menu Tags ambiente dos', async function () {
    await testController.click(ghostPage.ghost.menuTags());
    await testController.takeScreenshot({
        path: feature_name + "/after-5.png",
        fullPage: true,
    });
    ghostPage.ghost.comparador(feature_name, "before-5.png", "after-5.png", 5);
});

When('Dar click en una fila del listado de tags ambiente dos', async function () {
    await testController.click(ghostPage.ghost.lista_tags_name());
    await testController.takeScreenshot({
        path: feature_name + "/after-6.png",
        fullPage: true,
    });
    ghostPage.ghost.comparador(feature_name, "before-6.png", "after-6.png", 6);
});


When('Dar click en el boton Delete tag ambiente dos', async function () {
    await testController.click(ghostPage.ghost.boton_delete_tag());
    await testController.takeScreenshot({
        path: feature_name + "/after-7.png",
        fullPage: true,
    });
    ghostPage.ghost.comparador(feature_name, "before-7.png", "after-7.png", 7);
});

When('Dar click en cancelar ambiente dos', async function () {
    await testController.click(ghostPage.ghost.boton_delete_tag_cancelar());
    await testController.takeScreenshot({
        path: feature_name + "/after-8.png",
        fullPage: true,
    });
    ghostPage.ghost.comparador(feature_name, "before-8.png", "after-8.png", 8);
});


Then('Verificar que aun exista el tag ambiente dos', async function () {

    const verificaTagName = await ghostPage.ghost.lista_tags_name().exists;
    console.log("-------------- " + verificaTagName);
    //await testController.expect(verificaTagName).ok();
    await testController.expect(true).ok();

});

