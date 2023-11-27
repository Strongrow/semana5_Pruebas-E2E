const { Given, When, Then } = require('cucumber');
const Role = require('testcafe').Role;
const ghostPage = require('../support/pages/ghost-page');
const { Selector } = require('testcafe');
const fs = require('fs');

Given('Abrir la pagina de ghost v8', async function () {
    await testController.navigateTo(ghostPage.ghost.url());
    await testController.takeScreenshot();
});

When('Ingreso el usuario v8 {string}', async function (username) {

    await testController.typeText(ghostPage.ghost.loginUsername(), username);
});

When('Ingreso el password v8 {string}', async function (password) {

    await testController.typeText(ghostPage.ghost.loginPassword(), password);

});

When('Dar click en el boton Login v8', async function () {

    await testController.click(ghostPage.ghost.loginButton());

});


When('Ir al menu Tags v8', async function () {
    await testController.click(ghostPage.ghost.menuTags());
});

When('Dar click en el boton New Tag v8', async function () {
    await testController.click(ghostPage.ghost.botonNewTag());
});

When('Subir una imagen de prueba v8 {string}', async function (name) {

    const response = await testController.request("https://my.api.mockaroo.com/tags.json?key=3856ffb0");
    var tag_name_aleatorio = response.body[0].tag_name;
    console.log("valor del tag name... " + tag_name_aleatorio);

    await testController.typeText(ghostPage.ghost.newTag_tag_name(), tag_name_aleatorio);
    await testController.wait(2000);

try{
    //Se sube una imagen de prueba haciendo uso de apriori-data
    //C:\\Users\\diazpd\\Documents\\MISO\\Pruebas_automatizadas\\semana7\\repo_semana_7\\semana5_Pruebas-E2E\\src\\generacion_datos\\aleatorio\\Cucumber-e2e\\uploads\\imagen_test.jpg
    await testController
        .setFilesToUpload('[type="file"]', [
            './uploads/pruebas.txt'
        ])
        .click('[type="file"]');
    
       console.log("cargando....... ");

       await testController.wait(2000);
    }
    catch(e){}

   
});


Then('Verificar error en carga de fichero v8 {string}', async function (tag_name) {


    const msg_error = await ghostPage.ghost.msg_error_upload_file().exists;
    console.log("--msg_error--------- " + msg_error);

    await testController.expect(msg_error).ok();

});

