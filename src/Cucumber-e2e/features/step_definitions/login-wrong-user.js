const { Given, When, Then } = require('cucumber');
const ghostPage = require('../support/pages/ghost-page');
const {faker}=require('@faker-js/faker'); 

Given('Inicio de ghost wrong user', async function () {

    await testController.navigateTo(ghostPage.ghost.url());
});

When('Ingreso el usuario incorrecto wrong user {string}', async function (username) {

    //Se trae una cuenta de email aleatoria con el uso de faker
    var user_email_aleatorio = faker.internet.email();
    
    console.log("valor de email ... " + user_email_aleatorio);

    await testController.typeText(ghostPage.ghost.loginUsername(), user_email_aleatorio);
});

When('Ingreso el password incorrecto wrong user {string}', async function (password) {
    
    await testController.typeText(ghostPage.ghost.loginPassword(), password);
});

When('Ir al Login wrong user', async function () {
    await testController.click(ghostPage.ghost.loginButton());
});

Then('Verificamos el mensaje de error wrong user', async function () {

    const verificaMensaje = await ghostPage.ghost.mensaje_error_usuario_password().innerText;
    console.log("*************** " + verificaMensaje);
    await testController.expect(verificaMensaje).contains("There is no user with that email address.");


});

