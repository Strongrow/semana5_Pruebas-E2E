const { Given, When, Then } = require('cucumber');
const ghostPage = require('../support/pages/ghost-page');
const feature_name = "login-wrong-user";


Given('Inicio de ghost wrong user', async function () {

    await testController.navigateTo(ghostPage.ghost.url_5_69());
    await testController.takeScreenshot({
        path: feature_name + "/before-1.png",
        fullPage: true,
    });
});

When('Ingreso el usuario incorrecto wrong user {string}', async function (username) {
    await testController.typeText(ghostPage.ghost.loginUsername(), username);
    await testController.takeScreenshot({
        path: feature_name + "/before-2.png",
        fullPage: true,
    });
});

When('Ingreso el password incorrecto wrong user {string}', async function (password) {
    await testController.typeText(ghostPage.ghost.loginPassword(), password);
    await testController.takeScreenshot({
        path: feature_name + "/before-3.png",
        fullPage: true,
    });
});

When('Ir al Login wrong user', async function () {
    await testController.click(ghostPage.ghost.loginButton());
    await testController.takeScreenshot({
        path: feature_name + "/before-4.png",
        fullPage: true,
    });
});

Then('Verificamos el mensaje de error wrong user', async function () {

    const verificaMensaje = await ghostPage.ghost.mensaje_error_usuario_password().innerText;
    //console.log("*************** " + verificaMenuPost);
    await testController.expect(verificaMensaje).contains("Please fill out the form to sign in.");


});

