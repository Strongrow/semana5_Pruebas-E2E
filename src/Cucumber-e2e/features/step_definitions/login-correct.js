const { Given, When, Then } = require('cucumber');
const ghostPage = require('../support/pages/ghost-page');


Given('Abrir la pagina home de ghost', async function () {

    await testController.navigateTo(ghostPage.ghost.url());

});

When('Ingreso el usuario correcto {string}', async function (username) {
    await testController.typeText(ghostPage.ghost.loginUsername(), username);
});

When('Ingreso el password correcto {string}', async function (password) {
    await testController.typeText(ghostPage.ghost.loginPassword(), password);
});

When('Voy a el boton de Login', async function () {
    await testController.click(ghostPage.ghost.loginButton());
});

Then('Verificamos que este el menu post presente', async function () {

    const verificaMenuPost = await ghostPage.ghost.menuPost().exists;

    await testController.expect(verificaMenuPost).ok();


});

