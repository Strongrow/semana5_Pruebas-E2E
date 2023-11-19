const { Given, When, Then } = require('cucumber');
const ghostPage = require('../support/pages/ghost-page');
const feature_name = "login-correct";


Given('Abrir la pagina home de ghost ambiente dos', async function () {

    await testController.navigateTo(ghostPage.ghost.url_5_73());
    await testController.takeScreenshot({
        path: feature_name + "/after-1.png",
        fullPage: true,
    });

    ghostPage.ghost.comparador(feature_name, "before-1.png", "after-1.png", 1);
});

When('Ingreso el usuario correcto ambiente dos {string}', async function (username) {
    await testController.typeText(ghostPage.ghost.loginUsername_version2(), username);
    await testController.takeScreenshot({
        path: feature_name + "/after-2.png",
        fullPage: true,
    });

    ghostPage.ghost.comparador(feature_name, "before-2.png", "after-2.png", 2);
});

When('Ingreso el password correcto ambiente dos {string}', async function (password) {
    await testController.typeText(ghostPage.ghost.loginPassword_version2(), password);
    await testController.takeScreenshot({
        path: feature_name + "/after-3.png",
        fullPage: true,
    });

    ghostPage.ghost.comparador(feature_name, "before-3.png", "after-3.png", 3);
});

When('Voy a el boton de Login ambiente dos', async function () {
    await testController.click(ghostPage.ghost.loginButton());
    await testController.takeScreenshot({
        path: feature_name + "/after-4.png",
        fullPage: true,
    });

    ghostPage.ghost.comparador(feature_name, "before-4.png", "after-4.png", 4);
});

Then('Verificamos que este el menu post presente ambiente dos', async function () {

    const verificaMenuPost = await ghostPage.ghost.menuPost().exists;

    await testController.expect(verificaMenuPost).ok();


});

