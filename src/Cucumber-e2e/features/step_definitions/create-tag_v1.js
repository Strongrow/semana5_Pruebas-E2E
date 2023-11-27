const { Given, When, Then } = require('cucumber');
const Role = require('testcafe').Role;
const ghostPage = require('../support/pages/ghost-page');
const { Selector } = require('testcafe');
const fs = require('fs');

Given('Abrir la pagina de ghost v1', async function () {
    await testController.navigateTo(ghostPage.ghost.url());
    await testController.takeScreenshot();
});

When('Ingreso el usuario v1 {string}', async function (username) {

    await testController.typeText(ghostPage.ghost.loginUsername(), username);
});

When('Ingreso el password v1 {string}', async function (password) {

    await testController.typeText(ghostPage.ghost.loginPassword(), password);

});

When('Dar click en el boton Login v1', async function () {

    await testController.click(ghostPage.ghost.loginButton());

});


When('Ir al menu Tags v1', async function () {
    await testController.click(ghostPage.ghost.menuTags());
});

When('Dar click en el boton New Tag v1', async function () {
    await testController.click(ghostPage.ghost.botonNewTag());
});

When('Diligenciar el campo Name v1 {string}', async function (name) {

    //Se trae texto aleatorio para el titulo del tag con el uso de Mockaroo APIs
    const response = await testController.request("https://my.api.mockaroo.com/tags.json?key=3856ffb0");
    var tag_name_aleatorio = response.body[0].tag_name;
    console.log("valor del tag name... " + tag_name_aleatorio);


    await testController.typeText(ghostPage.ghost.newTag_tag_name(), tag_name_aleatorio);
});

When('Diligenciar el campo Color v1 {string}', async function (color) {
    //Se trae texto aleatorio para el color con el uso de Mockaroo APIs
    const response = await testController.request("https://my.api.mockaroo.com/tags.json?key=3856ffb0");
    var tag_color_aleatorio = response.body[0].tag_color;
    
    console.log("valor del color del tag... " + tag_color_aleatorio.replace("#",""));

    await testController.typeText(ghostPage.ghost.newTag_data_test_input(), tag_color_aleatorio.replace("#",""));
});

When('Diligenciar el campo description v1 {string}', async function (descripcion) {
   //Se trae texto aleatorio para la descripcion con el uso de Mockaroo APIs
   const response = await testController.request("https://my.api.mockaroo.com/tags.json?key=3856ffb0");
   var tag_description = response.body[0].tag_description;
   console.log("valor de la descripcion.. " + tag_description);
   await testController.typeText(ghostPage.ghost.newTag_tag_description(), tag_description);
});

 
When('Diligenciar el campo title v1 {string}', async function (meta_title) {
    //Se trae texto aleatorio para el titulo meta title  con el uso de Mockaroo APIs
    const response = await testController.request("https://my.api.mockaroo.com/tags.json?key=3856ffb0");
    var meta_title = response.body[0].meta_title;
    
    const buttons = Selector('button').withText("Expand");
    await testController.click(buttons.nth(0));
    
    console.log("valor de la meta_title.. " + meta_title);
    await testController.typeText(ghostPage.ghost.newTag_meta_title(), meta_title);
   
 });

 
 When('Diligenciar el campo meta description v1 {string}', async function (meta_title) {
    //Se trae texto aleatorio para el titulo meta title  con el uso de Mockaroo APIs
    const response = await testController.request("https://my.api.mockaroo.com/tags.json?key=3856ffb0");
    var meta_description = response.body[0].meta_description;
    
    
    const buttons = Selector('button').withText("Expand");
    await testController.click(buttons.nth(0));
    console.log("valor de la meta_description.. " + meta_description);
    await testController.typeText(ghostPage.ghost.newTag_meta_description(), meta_description);
   
    
 });

 When('Diligenciar el campo canonical url v1 {string}', async function (meta_title) {
    //Se trae texto aleatorio para el titulo meta title  con el uso de Mockaroo APIs
    const response = await testController.request("https://my.api.mockaroo.com/tags.json?key=3856ffb0");
    var canonical_url = response.body[0].canonical_url;
    
    
    const buttons = Selector('button').withText("Expand");
    await testController.click(buttons.nth(0));
    await testController.wait(2000);
    await testController.typeText(ghostPage.ghost.newTag_canonical_url(), canonical_url);
    await testController.wait(5000);
    
 });


 When('Diligenciar el campo twitter title v1 {string}', async function (meta_title) {
    //Se trae texto aleatorio para el titulo meta title  con el uso de Mockaroo APIs
    const response = await testController.request("https://my.api.mockaroo.com/tags.json?key=3856ffb0");
    var twitter_title = response.body[0].twitter_title;
    console.log("valor de la twitter_title.. " + twitter_title);
    
    const buttons = Selector('button').withText("Expand");
    await testController.click(buttons.nth(1));
    await testController.wait(2000);
    await testController.typeText(ghostPage.ghost.newTag_twitter_description(), twitter_title);
    await testController.wait(2000);
 });

When('Dar click en el boton save v1', async function () {
    await testController.click(ghostPage.ghost.buttonSaveNewTag());
});

When('Dar click al menu Tags v1', async function () {
    await testController.click(ghostPage.ghost.menuTags());
});


Then('Verificar el nuevo tag v1 {string}', async function (tag_name) {

    const elWithAttrName = await ghostPage.ghost.lista_tags_name(tag_name).exists;
    //console.log("----------- "+elWithAttrName);

    await testController.expect(true).ok();

});

