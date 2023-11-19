const { Given, When, Then } = require('cucumber');
const Role = require('testcafe').Role;
const ghostPage = require('../support/pages/ghost-page');
//const Selector = require('testcafe').Selector;
const fs = require('fs');
const feature_name = "create-tag";

Given('Abrir la pagina de ghost', async function () {
    await testController.navigateTo(ghostPage.ghost.url_4_44());
    await testController.takeScreenshot();
});

When('Ingreso el usuario {string}', async function (username) {


    await testController.typeText(ghostPage.ghost.loginUsername(), username);

    await testController.takeScreenshot({
        path: feature_name + "/before-1.png",
        fullPage: true,
    });

    //ghostPage.ghost.comparador("create-tag","before-1.png","after-1.png",1);
});

When('Ingreso el password {string}', async function (password) {

    await testController.typeText(ghostPage.ghost.loginPassword(), password);
    await testController.takeScreenshot({
        path: feature_name + "/before-2.png",
        fullPage: true,
    });

    //ghostPage.ghost.comparador(feature_name,"before-2.png","after-2.png",2);


});

When('Dar click en el boton Login', async function () {

    await testController.click(ghostPage.ghost.loginButton());
    await testController.takeScreenshot({
        path: feature_name + "/before-3.png",
        fullPage: true,
    });

});


When('Ir al menu Tags', async function () {
    await testController.click(ghostPage.ghost.menuTags());
    await testController.takeScreenshot({
        path: feature_name + "/before-4.png",
        fullPage: true,
    });
});

When('Dar click en el boton New Tag', async function () {
    await testController.click(ghostPage.ghost.botonNewTag());
    await testController.takeScreenshot({
        path: feature_name + "/before-5.png",
        fullPage: true,
    });
});

When('Diligenciar el campo Name {string}', async function (name) {
    await testController.typeText(ghostPage.ghost.newTag_tag_name(), name);
    await testController.takeScreenshot({
        path: feature_name + "/before-6.png",
        fullPage: true,
    });
});

When('Diligenciar el campo Color {string}', async function (color) {
    await testController.typeText(ghostPage.ghost.newTag_data_test_input(), color);
    await testController.takeScreenshot({
        path: feature_name + "/before-7.png",
        fullPage: true,
    });
});

When('Diligenciar el campo description {string}', async function (descripcion) {
    await testController.typeText(ghostPage.ghost.newTag_tag_description(), descripcion);
    await testController.takeScreenshot({
        path: feature_name + "/before-8.png",
        fullPage: true,
    });
});

When('Dar click en el boton save', async function () {
    await testController.click(ghostPage.ghost.buttonSaveNewTag());
    await testController.takeScreenshot({
        path: feature_name + "/before-9.png",
        fullPage: true,
    });
});

When('Dar click al menu Tags', async function () {
    await testController.click(ghostPage.ghost.menuTags());
    await testController.takeScreenshot({
        path: feature_name + "/before-10.png",
        fullPage: true,
    });
});


Then('Verificar el nuevo tag {string}', async function (tag_name) {

    const elWithAttrName = await ghostPage.ghost.lista_tags_name(tag_name).exists;
    //console.log("----------- "+elWithAttrName);

    await testController.expect(elWithAttrName).ok();

});

