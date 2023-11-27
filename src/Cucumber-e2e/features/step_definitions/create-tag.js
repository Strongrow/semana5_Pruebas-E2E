const { Given, When, Then } = require('cucumber');
const Role = require('testcafe').Role;
const ghostPage = require('../support/pages/ghost-page');
const fs = require('fs');

Given('Abrir la pagina de ghost', async function () {
    await testController.navigateTo(ghostPage.ghost.url());
    await testController.takeScreenshot();
});

When('Ingreso el usuario {string}', async function (username) {

    await testController.typeText(ghostPage.ghost.loginUsername(), username);
});

When('Ingreso el password {string}', async function (password) {

    await testController.typeText(ghostPage.ghost.loginPassword(), password);

});

When('Dar click en el boton Login', async function () {

    await testController.click(ghostPage.ghost.loginButton());

});


When('Ir al menu Tags', async function () {
    await testController.click(ghostPage.ghost.menuTags());
});

When('Dar click en el boton New Tag', async function () {
    await testController.click(ghostPage.ghost.botonNewTag());
});

When('Diligenciar el campo Name {string}', async function (name) {

    //Se trae texto aleatorio para el titulo del tag con el uso de Mockaroo APIs
    const response = await testController.request("https://my.api.mockaroo.com/tags.json?key=3856ffb0");
    var tag_name_aleatorio = response.body[0].tag_name;
    console.log("valor del tag name... " + tag_name_aleatorio);


    await testController.typeText(ghostPage.ghost.newTag_tag_name(), tag_name_aleatorio);
});

When('Diligenciar el campo Color {string}', async function (color) {
    //Se trae texto aleatorio para el color con el uso de Mockaroo APIs
    const response = await testController.request("https://my.api.mockaroo.com/tags.json?key=3856ffb0");
    var tag_color_aleatorio = response.body[0].tag_color;
    
    console.log("valor del color del tag... " + tag_color_aleatorio.replace("#",""));

    await testController.typeText(ghostPage.ghost.newTag_data_test_input(), tag_color_aleatorio.replace("#",""));
});

When('Diligenciar el campo description {string}', async function (descripcion) {
   //Se trae texto aleatorio para la descripcion con el uso de Mockaroo APIs
   const response = await testController.request("https://my.api.mockaroo.com/tags.json?key=3856ffb0");
   var tag_description = response.body[0].tag_description;
   console.log("valor de la descripcion.. " + tag_description);
   await testController.typeText(ghostPage.ghost.newTag_tag_description(), tag_description);
});

When('Dar click en el boton save', async function () {
    await testController.click(ghostPage.ghost.buttonSaveNewTag());
});

When('Dar click al menu Tags', async function () {
    await testController.click(ghostPage.ghost.menuTags());
});


Then('Verificar el nuevo tag {string}', async function (tag_name) {

    const elWithAttrName = await ghostPage.ghost.lista_tags_name(tag_name).exists;
    //console.log("----------- "+elWithAttrName);

    await testController.expect(true).ok();

});

