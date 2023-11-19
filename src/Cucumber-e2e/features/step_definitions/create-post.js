const { Given, When, Then } = require('cucumber');
const ghostPage = require('../support/pages/ghost-page');
const feature_name = "create-post";


Given('Navegar al Home de ghost', async function () {

    await testController.navigateTo(ghostPage.ghost.url_4_44());
    await testController.takeScreenshot({
        path: feature_name + "/before-1.png",
        fullPage: true,
    });
});

When('Digitar usuario {string}', async function (username) {
    await testController.typeText(ghostPage.ghost.loginUsername(), username);
    await testController.takeScreenshot({
        path: feature_name + "/before-2.png",
        fullPage: true,
    });
});

When('Digitar password {string}', async function (password) {
    await testController.typeText(ghostPage.ghost.loginPassword(), password);
    await testController.takeScreenshot({
        path: feature_name + "/before-3.png",
        fullPage: true,
    });
});


When('Ingresar dashborad', async function () {
    await testController.click(ghostPage.ghost.loginButton());
    await testController.takeScreenshot({
        path: feature_name + "/before-4.png",
        fullPage: true,
    });
});



When('Ir al menu de post', async function () {
    await testController.click(ghostPage.ghost.menuPost());
    await testController.takeScreenshot({
        path: feature_name + "/before-5.png",
        fullPage: true,
    });
});


When('Boton de new post', async function () {
    await testController.click(ghostPage.ghost.boton_nuevo_post());
    await testController.takeScreenshot({
        path: feature_name + "/before-6.png",
        fullPage: true,
    });
});

When('Ingresar el titulo del post {string}', async function (titulo) {
    await testController.typeText(ghostPage.ghost.titulo_post(), titulo);
    await testController.click(ghostPage.ghost.div_area_libre());


    await testController.takeScreenshot({
        path: feature_name + "/before-7.png",
        fullPage: true,
    });
});


When('Click en publish', async function () {
    //await testController.click(ghostPage.ghost.boton_menu_publish());
    await testController.click(ghostPage.ghost.boton_publish());
    await testController.click(ghostPage.ghost.menuPost());


    await testController.takeScreenshot({
        path: feature_name + "/before-8.png",
        fullPage: true,
    });
});

Then('Validamos la creacion del post', async function () {

    const verificaMenuPost = await ghostPage.ghost.menuPost().exists;

    await testController.expect(verificaMenuPost).ok();


});

