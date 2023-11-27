const { Given, When, Then } = require('cucumber');
const Role = require('testcafe').Role;
const ghostPage = require('../support/pages/ghost-page');
const {faker}=require('@faker-js/faker'); 

Given('Home de ghost', async function () {
    await testController.navigateTo(ghostPage.ghost.url());
});

When('Digitar el usuario {string}', async function (username) {
    await testController.typeText(ghostPage.ghost.loginUsername(), username);
});

When('Digitar el password {string}', async function (password) {
    await testController.typeText(ghostPage.ghost.loginPassword(), password);
});

When('Dar en boton Login', async function () {
    await testController.click(ghostPage.ghost.loginButton());
});


When('Dar en menu posts', async function () {
    await testController.click(ghostPage.ghost.menuPost());
});

When('Dar en el boton editar', async function () {

    await testController.click(ghostPage.ghost.boton_editar_post_published());

});

When('Editar el titulo del post publicado {string}', async function (titulo) {

    //Se trae texto aleatorio para el titulo con el uso de faker
    //var titulo_aleatorio = faker.lorem.paragraph();
    var titulo_aleatorio = faker.lorem.words(5);
    console.log("valor del titulo ... " + titulo_aleatorio);


    await testController.typeText(ghostPage.ghost.text_area_titulo_post_published(), titulo_aleatorio);
    await testController.click(ghostPage.ghost.boton_menu_publicar());
    await testController.click(ghostPage.ghost.boton_menu_update_publicar());

});


When('Dar en boton update', async function () {
    await testController.click(ghostPage.ghost.menuPost());
});

When('Volver a posts', async function () {
    await testController.click(ghostPage.ghost.menuPost());
});


Then('Verificar el nombre editado', async function () {

    const nombreEditado = await ghostPage.ghost.menuPost().exists;
    //console.log("----------- "+nombreEditado);
    await testController.expect(nombreEditado).ok();

});

