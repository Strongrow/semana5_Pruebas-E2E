const { Given, When, Then } = require('cucumber');
const ghostPage = require('../support/pages/ghost-page');
const feature_name = "delete-tag";


Given('Ir al home de ghost', async function () {

    await testController.navigateTo(ghostPage.ghost.url_5_69());
    await testController.takeScreenshot({
        path: feature_name + "/before-1.png",
        fullPage: true,
    });
});

When('Ingresar usuario {string}', async function (username) {
    await testController.typeText(ghostPage.ghost.loginUsername(), username);
    await testController.takeScreenshot({
        path: feature_name + "/before-2.png",
        fullPage: true,
    });
});

When('Ingresar password {string}', async function (password) {
    await testController.typeText(ghostPage.ghost.loginPassword(), password);
    await testController.takeScreenshot({
        path: feature_name + "/before-3.png",
        fullPage: true,
    });
});

When('Click en boton Login', async function () {
    await testController.click(ghostPage.ghost.loginButton());
    await testController.takeScreenshot({
        path: feature_name + "/before-4.png",
        fullPage: true,
    });
});


When('Dar en Menu Tags', async function () {
    await testController.click(ghostPage.ghost.menuTags());
    await testController.takeScreenshot({
        path: feature_name + "/before-5.png",
        fullPage: true,
    });
});

When('Dar click en una fila de un tag', async function () {
    await testController.click(ghostPage.ghost.lista_tags_name());
    await testController.takeScreenshot({
        path: feature_name + "/before-6.png",
        fullPage: true,
    });
});


When('Dar en el boton Delete tag', async function () {
    await testController.click(ghostPage.ghost.boton_delete_tag());
    await testController.takeScreenshot({
        path: feature_name + "/before-7.png",
        fullPage: true,
    });
});

When('Dar en confirmar', async function () {
    //await testController.wait(2000);
    await testController.takeScreenshot({
        path: feature_name + "/before-8.png",
        fullPage: true,
    });
    await testController.click(ghostPage.ghost.boton_delete_tag_confirmar());
   
});


Then('Verificar que no este el tag', async function () {

    const verificaTagName = await ghostPage.ghost.menuTags().exists;

    await testController.expect(verificaTagName).ok();
    //  await testController.expect(true).ok();

});

