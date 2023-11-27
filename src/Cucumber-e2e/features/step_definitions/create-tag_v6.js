const { Given, When, Then } = require('cucumber');
const Role = require('testcafe').Role;
const ghostPage = require('../support/pages/ghost-page');
const { Selector } = require('testcafe');
const fs = require('fs');
const { faker } = require('@faker-js/faker');

Given('Abrir la pagina de ghost v6', async function () {
    await testController.navigateTo(ghostPage.ghost.url());
    await testController.takeScreenshot();
});

When('Ingreso el usuario v6 {string}', async function (username) {

    await testController.typeText(ghostPage.ghost.loginUsername(), username);
});

When('Ingreso el password v6 {string}', async function (password) {

    await testController.typeText(ghostPage.ghost.loginPassword(), password);

});

When('Dar click en el boton Login v6', async function () {

    await testController.click(ghostPage.ghost.loginButton());

});


When('Ir al menu Tags v6', async function () {
    await testController.click(ghostPage.ghost.menuTags());
});

When('Dar click en el boton New Tag v6', async function () {
    await testController.click(ghostPage.ghost.botonNewTag());
});

When('Expandir y colapzar las secciones {string}', async function (name) {

    //Se trae texto aleatorio para el titulo del tag con el uso de Mockaroo APIs
try{
    for (let i = 0; i < 3; i++) {
        const buttons = Selector('button').withText("Expand");
        var numero_aleatorio = faker.number.int({ min: 0, max: 2 });
        await testController.click(buttons.nth(numero_aleatorio));
        await testController.wait(10000);
        await testController.click(buttons.nth(numero_aleatorio));
        await testController.wait(10000);
    }
}
catch(e){

}
});


Then('Verificar el nuevo tag v6 {string}', async function (tag_name) {


    const msg_error = await ghostPage.ghost.msg_tag_description_err().exists;
    console.log("--msg_error--------- " + msg_error);

    await testController.expect(!msg_error).ok();

});

