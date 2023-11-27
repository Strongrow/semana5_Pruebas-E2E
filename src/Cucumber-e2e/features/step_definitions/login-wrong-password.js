const { Given, When, Then } = require('cucumber');
const ghostPage = require('../support/pages/ghost-page');
const {faker}=require('@faker-js/faker'); 


Given('Inicio de ghost wrong password', async function () {

    await testController.navigateTo(ghostPage.ghost.url());
});

When('Ingreso el usuario incorrecto wrong password {string}', async function (username) {
    await testController.typeText(ghostPage.ghost.loginUsername(), username);
});

When('Ingreso el password incorrecto wrong password {string}', async function (password) {
    
      //Se trae un texto de password aleatorio con el uso de faker
      var password_aleatorio = faker.internet.password();
      console.log("valor de password ... " + password_aleatorio);
    
    await testController.typeText(ghostPage.ghost.loginPassword(), password_aleatorio);
});

When('Ir al Login wrong password', async function () {
    await testController.click(ghostPage.ghost.loginButton());
});

Then('Verificamos el mensaje de error wrong password', async function () {

    const verificaMensaje = await ghostPage.ghost.mensaje_error_usuario_password().innerText;
    console.log("*************** " + verificaMensaje);
    await testController.expect(verificaMensaje).contains("Your password is incorrect.");


});

