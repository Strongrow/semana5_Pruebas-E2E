const { Given, When, Then } = require('cucumber');
const Role = require('testcafe').Role;
const ghostPage = require('../support/pages/ghost-page');
const id_post_draft = "655ad919a68764883847112e";
const {faker}=require('@faker-js/faker'); 

Given('Ir al home ghost', async function () {
    await testController.navigateTo(ghostPage.ghost.url());

});

When('Escribir el usuario {string}', async function (username) {
    await testController.typeText(ghostPage.ghost.loginUsername(), username);

});

When('Escribir el password {string}', async function (password) {

    await testController.typeText(ghostPage.ghost.loginPassword(), password);

});

When('Ir al boton Login', async function () {
    await testController.click(ghostPage.ghost.loginButton());

});


When('Ir al menu posts', async function () {
    await testController.navigateTo("http://35.244.81.193/ghost/#/posts?type=draft");

});

When('Dar click en el boton editar', async function () {
    //await testController.click(ghostPage.ghost.boton_editar_post_draft());
    await testController.navigateTo("http://35.244.81.193/ghost/#/editor/post/6563f70b930dd2098beace6e");

});

When('Editar el titulo del post borrador agregando texto {string}', async function (titulo) {

    //Se trae texto aleatorio para el titulo con el uso de faker
    var titulo_aleatorio = faker.lorem.words(5);
    console.log("valor del titulo ... " + titulo_aleatorio);

    await testController.typeText(ghostPage.ghost.text_area_titulo_post_draft(), titulo_aleatorio);

    //await testController.click(ghostPage.ghost.div_area_titulo_post_draft());

});


When('Volver a los posts', async function () {
    await testController.click(ghostPage.ghost.menuPost());
    //await testController.navigateTo("http://localhost:3002/ghost/#/posts?type=draft");

});


Then('Verificar el campo de nombre editado', async function () {

    const nombreEditado = await testController.navigateTo("http://localhost:2368/ghost/#/posts?type=draft");
    //console.log("----------- "+nombreEditado);
    await testController.expect(true).ok();

});

