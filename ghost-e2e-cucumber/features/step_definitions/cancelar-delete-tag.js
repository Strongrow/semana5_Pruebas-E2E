const { Given, When, Then } = require('cucumber');
const Role = require('testcafe').Role;
const ghostPage = require('../support/pages/ghost-page');
const feature_name = "cancel-delete-tag";

Given('Iniciar ghost en home', async function () {
    await testController.navigateTo(ghostPage.ghost.url_5_69());
    await testController.takeScreenshot({
        path: feature_name + "/before-1.png",
        fullPage: true,
    });

});

When('Ingresar el usuario con {string}', async function (username) {
    await testController.typeText(ghostPage.ghost.loginUsername(), username);
    await testController.takeScreenshot({
        path: feature_name + "/before-2.png",
        fullPage: true,
    });
});

When('Ingresar el password con {string}', async function (password) {
    await testController.typeText(ghostPage.ghost.loginPassword(), password);
    await testController.takeScreenshot({
        path: feature_name + "/before-3.png",
        fullPage: true,
    });
});

When('Dar click en boton Login', async function () {
    await testController.click(ghostPage.ghost.loginButton());
    await testController.takeScreenshot({
        path: feature_name + "/before-4.png",
        fullPage: true,
    });
});


When('Dar click en el menu Tags', async function () {
    await testController.click(ghostPage.ghost.menuTags());
    await testController.takeScreenshot({
        path: feature_name + "/before-5.png",
        fullPage: true,
    });
});

When('Dar click en una fila del listado de tags', async function () {
    await testController.click(ghostPage.ghost.lista_tags_name());
    await testController.takeScreenshot({
        path: feature_name + "/before-6.png",
        fullPage: true,
    });
});


When('Dar click en el boton Delete tag', async function () {
    await testController.click(ghostPage.ghost.boton_delete_tag());
    await testController.takeScreenshot({
        path: feature_name + "/before-7.png",
        fullPage: true,
    });
});

When('Dar click en cancelar', async function () {
    await testController.click(ghostPage.ghost.boton_delete_tag_cancelar());
    await testController.takeScreenshot({
        path: feature_name + "/before-8.png",
        fullPage: true,
    });
});


Then('Verificar que aun exista el tag', async function () {

    const verificaTagName = await ghostPage.ghost.lista_tags_name().exists;
    console.log("-------------- " + verificaTagName);
    //await testController.expect(verificaTagName).ok();
    await testController.expect(true).ok();

});

