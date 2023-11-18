const { Given, When, Then } = require('cucumber');
const Role = require('testcafe').Role;
const ghostPage = require('../support/pages/ghost-page');
const fs = require('fs');
const feature_name = "create-tag";

Given('Abrir la pagina de ghost ambiente 5_73', async function () {
    await testController.navigateTo(ghostPage.ghost.url_5_73());
    await testController.takeScreenshot();
});

When('Ingreso el usuario otro ambiente {string}', async function (username) {

    await testController.typeText(ghostPage.ghost.loginUsername_version2(), username);
    await testController.takeScreenshot(
        {
            path: feature_name + "/after-1.png",
            fullPage: true,
        }
    );
    ghostPage.ghost.comparador("create-tag", "before-1.png", "after-1.png", 1);

});

When('Ingreso el password otro ambiente {string}', async function (password) {
    await testController.typeText(ghostPage.ghost.loginPassword_version2(), password);
    await testController.takeScreenshot(
        {
            path: feature_name + "/after-2.png",
            fullPage: true,
        }
    );
    ghostPage.ghost.comparador("create-tag", "before-2.png", "after-2.png", 2);
});

When('Dar click en el boton Login ambiente 5_73', async function () {

    await testController.click(ghostPage.ghost.loginButton());
    await testController.takeScreenshot(
        {
            path: feature_name + "/after-3.png",
            fullPage: true,
        }
    );
    ghostPage.ghost.comparador("create-tag", "before-3.png", "after-3.png", 3);
});


When('Ir al menu Tags ambiente 5_73', async function () {
    await testController.click(ghostPage.ghost.menuTags());
    await testController.takeScreenshot(
        {
            path: feature_name + "/after-4.png",
            fullPage: true,
        }
    );

    ghostPage.ghost.comparador("create-tag", "before-4.png", "after-4.png", 4);

});

When('Dar click en el boton New Tag ambiente 5_73', async function () {
    await testController.click(ghostPage.ghost.botonNewTag());
    await testController.takeScreenshot(
        {
            path: feature_name + "/after-5.png",
            fullPage: true,
        }
    );
    ghostPage.ghost.comparador("create-tag", "before-5.png", "after-5.png", 5);
});

When('Diligenciar el campo Name ambiente 5_73 {string}', async function (name) {
    await testController.typeText(ghostPage.ghost.newTag_tag_name(), name);
    await testController.takeScreenshot(
        {
            path: feature_name + "/after-6.png",
            fullPage: true,
        }
    );
    ghostPage.ghost.comparador("create-tag", "before-6.png", "after-6.png", 6);
});

When('Diligenciar el campo Color ambiente 5_73 {string}', async function (color) {
    await testController.typeText(ghostPage.ghost.newTag_data_test_input(), color);
    await testController.takeScreenshot(
        {
            path: feature_name + "/after-7.png",
            fullPage: true,
        }
    );
    ghostPage.ghost.comparador("create-tag", "before-7.png", "after-7.png", 7);
});

When('Diligenciar el campo description ambiente 5_73 {string}', async function (descripcion) {
    await testController.typeText(ghostPage.ghost.newTag_tag_description(), descripcion);
    await testController.takeScreenshot(
        {
            path: feature_name + "/after-8.png",
            fullPage: true,
        }
    );
    ghostPage.ghost.comparador("create-tag", "before-8.png", "after-8.png", 8);
});

When('Dar click en el boton save ambiente 5_73', async function () {
    await testController.click(ghostPage.ghost.buttonSaveNewTag());
    await testController.takeScreenshot(
        {
            path: feature_name + "/after-9.png",
            fullPage: true,
        }
    );
    ghostPage.ghost.comparador("create-tag", "before-9.png", "after-9.png", 9);
});

When('Dar click al menu Tags ambiente 5_73', async function () {
    await testController.click(ghostPage.ghost.menuTags());
    await testController.takeScreenshot(
        {
            path: feature_name + "/after-10.png",
            fullPage: true,
        }
    );
    ghostPage.ghost.comparador("create-tag", "before-10.png", "after-10.png", 10);
});


Then('Verificar el nuevo tag ambiente 5_73 {string}', async function (tag_name) {

    const elWithAttrName = await ghostPage.ghost.lista_tags_name(tag_name).exists;
    //console.log("----------- "+elWithAttrName);

    await testController.expect(elWithAttrName).ok();

});

