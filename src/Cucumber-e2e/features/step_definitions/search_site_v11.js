const { Given, When, Then } = require('cucumber');
const Role = require('testcafe').Role;
const ghostPage = require('../support/pages/ghost-page');
const { Selector } = require('testcafe');
const fs = require('fs');
const {faker}=require('@faker-js/faker'); 

Given('Abrir la pagina de ghost v11', async function () {
    await testController.navigateTo(ghostPage.ghost.url());

});

When('Ingreso el usuario v11 {string}', async function (username) {

    await testController.typeText(ghostPage.ghost.loginUsername(), username);
});

When('Ingreso el password v11 {string}', async function (password) {

    await testController.typeText(ghostPage.ghost.loginPassword(), password);

});

When('Dar click en el boton Login v11', async function () {

    await testController.click(ghostPage.ghost.loginButton());
    await testController.wait(3000);

});


When('Ir al menu profile v11', async function () {
    await testController.navigateTo(ghostPage.ghost.url_profile_2());
    await testController.wait(4000);
   
});


When('Realiza la busqueda con las opciones del submenu site v11', async function () {
    let locator = Selector('input').nth(0);
    var x=['Site','Design & branding','Navigation','Announcement bar'];
    var numero_aleatorio = faker.number.int({ min: 0, max: 3 });
    console.log("valor del menua buscar... " + x[numero_aleatorio]);

    await testController.typeText(locator, x[numero_aleatorio]);
    
});


Then('Verificar que no exista error al buscar v11', async function () {


    const msg_error = await ghostPage.ghost.msg_error_upload_file().exists;
    console.log("--msg_error--------- " + msg_error);

    await testController.expect(!msg_error).ok();

});

