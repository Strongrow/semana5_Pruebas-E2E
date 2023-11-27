const { Given, When, Then } = require('cucumber');
const Role = require('testcafe').Role;
const ghostPage = require('../support/pages/ghost-page');
const { Selector } = require('testcafe');
const fs = require('fs');
const {faker}=require('@faker-js/faker'); 

Given('Abrir la pagina de ghost v13', async function () {
    await testController.navigateTo(ghostPage.ghost.url());

});

When('Ingreso el usuario v13 {string}', async function (username) {

    await testController.typeText(ghostPage.ghost.loginUsername(), username);
});

When('Ingreso el password v13 {string}', async function (password) {

    await testController.typeText(ghostPage.ghost.loginPassword(), password);

});

When('Dar click en el boton Login v13', async function () {

    await testController.click(ghostPage.ghost.loginButton());
    await testController.wait(3000);

});


When('Ir al menu profile v13', async function () {
    await testController.navigateTo(ghostPage.ghost.url_profile());
    await testController.wait(4000);
   
});


When('Realiza la busqueda con las opciones del submenu Email newsletter v13', async function () {
    let locator = Selector('input').nth(0);
    var x=['Email newsletter','Newsletter sending','Default recipients','Newsletters','Mailgun settings'];
    var numero_aleatorio = faker.number.int({ min: 0, max: 4 });
    console.log("valor del menua buscar... " + x[numero_aleatorio]);

    await testController.typeText(locator, x[numero_aleatorio]);
    await testController.wait(3000);
    
});


Then('Verificar que no exista error al buscar v13', async function () {


    const msg_error = await ghostPage.ghost.msg_error_upload_file().exists;
    console.log("--msg_error--------- " + msg_error);

    await testController.expect(!msg_error).ok();

});

