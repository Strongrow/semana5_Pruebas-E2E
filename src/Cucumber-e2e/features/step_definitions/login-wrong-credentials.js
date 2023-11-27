const { Given, When, Then } = require('cucumber');
const ghostPage = require('../support/pages/ghost-page');
const {faker}=require('@faker-js/faker'); 


Given('Inicio de ghost', async function () {

    await testController.navigateTo(ghostPage.ghost.url());

});

When('Ingreso el usuario incorrecto {string}', async function (username) {

    //Se trae una cuenta de email aleatoria con el uso de faker
    var user_email_aleatorio = faker.internet.email();
    
    console.log("valor de email ... " + user_email_aleatorio);

    await testController.typeText(ghostPage.ghost.loginUsername(), user_email_aleatorio);

});

When('Ingreso el password incorrecto {string}', async function (password) {

    //Se trae un texto de password aleatorio con el uso de faker
    var password_aleatorio = faker.internet.password();
    console.log("valor de password ... " + password_aleatorio);

    await testController.typeText(ghostPage.ghost.loginPassword(), password_aleatorio);
});

When('Ir al Login', async function () {
    await testController.click(ghostPage.ghost.loginButton());

});

Then('Verificamos el mensaje de error', async function () {

    const verificaMensaje = await ghostPage.ghost.mensaje_error_usuario_password().innerText;
    //console.log("*************** " + verificaMenuPost);
    await testController.expect(verificaMensaje).contains("There is no user with that email address.");


});

