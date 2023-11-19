const { Given, When, Then } = require('cucumber');
const ghostPage = require('../support/pages/ghost-page');
const backstop = require('backstopjs');
const gulp = require('gulp');
const feature_name = "login-correct";


Given('Abrir la pagina home de ghost', async function () {

    await testController.navigateTo(ghostPage.ghost.url_4_44());
    await testController.takeScreenshot({
        path: feature_name + "/before-1.png",
        fullPage: true,
    });
    gulp.task('backstop_reference', () => backstop('reference'));
    gulp.task('backstop_test', () => backstop('test'));
});

When('Ingreso el usuario correcto {string}', async function (username) {
    await testController.typeText(ghostPage.ghost.loginUsername(), username);
    await testController.takeScreenshot({
        path: feature_name + "/before-2.png",
        fullPage: true,
    });
});

When('Ingreso el password correcto {string}', async function (password) {
    await testController.typeText(ghostPage.ghost.loginPassword(), password);
    await testController.takeScreenshot({
        path: feature_name + "/before-3.png",
        fullPage: true,
    });
});

When('Voy a el boton de Login', async function () {
    await testController.click(ghostPage.ghost.loginButton());
    await testController.takeScreenshot({
        path: feature_name + "/before-4.png",
        fullPage: true,
    });
});

Then('Verificamos que este el menu post presente', async function () {

    const verificaMenuPost = await ghostPage.ghost.menuPost().exists;

    await testController.expect(verificaMenuPost).ok();


});

