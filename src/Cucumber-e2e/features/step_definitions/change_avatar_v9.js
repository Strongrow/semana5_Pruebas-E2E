const { Given, When, Then } = require('cucumber');
const Role = require('testcafe').Role;
const ghostPage = require('../support/pages/ghost-page');
const { Selector } = require('testcafe');
const fs = require('fs');

Given('Abrir la pagina de ghost v9', async function () {
    await testController.navigateTo(ghostPage.ghost.url());

});

When('Ingreso el usuario v9 {string}', async function (username) {

    await testController.typeText(ghostPage.ghost.loginUsername(), username);
});

When('Ingreso el password v9 {string}', async function (password) {

    await testController.typeText(ghostPage.ghost.loginPassword(), password);

});

When('Dar click en el boton Login v9', async function () {

    await testController.click(ghostPage.ghost.loginButton());
    await testController.wait(3000);

});


When('Ir al menu profile v9', async function () {
    await testController.navigateTo(ghostPage.ghost.url_profile());
    await testController.wait(4000);
//    await testController.click(ghostPage.ghost.imgProfile());

});

When('Cambiar la foto de avatar v9', async function () {
    //await testController.click(ghostPage.ghost.imgProfile());

    try {
        //Se sube una imagen de prueba haciendo uso de apriori-data
        //C:\\Users\\diazpd\\Documents\\MISO\\Pruebas_automatizadas\\semana7\\repo_semana_7\\semana5_Pruebas-E2E\\src\\generacion_datos\\aleatorio\\Cucumber-e2e\\uploads\\imagen_test.jpg
        await testController
            .setFilesToUpload('[id="avatar"]', [
                './uploads/perfil.jpg'
            ])
            .click('[id="avatar"]');

        console.log("cargando....... ");

    }
    catch (e) { }
    await testController.wait(4000);


});


When('Guardar cambios v9', async function () {
    await testController.wait(4000);

    await testController.click(ghostPage.ghost.botonSaveAndClose());
});

Then('Verificar que no exista error', async function () {


    const msg_error = await ghostPage.ghost.msg_error_upload_file().exists;
    console.log("--msg_error--------- " + msg_error);

    await testController.expect(!msg_error).ok();

});

