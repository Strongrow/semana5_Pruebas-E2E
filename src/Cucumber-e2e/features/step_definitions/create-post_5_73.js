const { Given, When, Then } = require('cucumber');
const ghostPage = require('../support/pages/ghost-page');
const feature_name = "create-post";


Given('Navegar al Home de ghost en la otra version', async function () {

    await testController.navigateTo(ghostPage.ghost.url_5_73());
    await testController.takeScreenshot(
        {
            path: feature_name + "/after-1.png",
            fullPage: true,
        }
    );
    ghostPage.ghost.comparador(feature_name, "before-1.png", "after-1.png", 1);
});

When('Digitar usuario en la otra version {string}', async function (username) {
    await testController.typeText(ghostPage.ghost.loginUsername(), username);
    await testController.takeScreenshot(
        {
            path: feature_name + "/after-2.png",
            fullPage: true,
        }
    );
    ghostPage.ghost.comparador(feature_name, "before-2.png", "after-2.png", 2);
});

When('Digitar password en la otra version {string}', async function (password) {
    await testController.typeText(ghostPage.ghost.loginPassword(), password);
    await testController.takeScreenshot(
        {
            path: feature_name + "/after-3.png",
            fullPage: true,
        }
    );
    ghostPage.ghost.comparador(feature_name, "before-3.png", "after-3.png", 3);
});


When('Ingresar dashborad en la otra version', async function () {
    await testController.click(ghostPage.ghost.loginButton());
    await testController.takeScreenshot(
        {
            path: feature_name + "/after-4.png",
            fullPage: true,
        }
    );
    ghostPage.ghost.comparador(feature_name, "before-4.png", "after-4.png", 4);
});



When('Ir al menu de post en la otra version', async function () {
    await testController.click(ghostPage.ghost.menuPost());
    await testController.takeScreenshot(
        {
            path: feature_name + "/after-5.png",
            fullPage: true,
        }
    );
    ghostPage.ghost.comparador(feature_name, "before-5.png", "after-5.png", 5);
});


When('Boton de new post en la otra version', async function () {
    await testController.click(ghostPage.ghost.boton_nuevo_post());
    await testController.takeScreenshot(
        {
            path: feature_name + "/after-6.png",
            fullPage: true,
        }
    );
    ghostPage.ghost.comparador(feature_name, "before-6.png", "after-6.png", 6);
});

When('Ingresar el titulo del post en la otra version {string}', async function (titulo) {
    await testController.typeText(ghostPage.ghost.titulo_post(), titulo);
    await testController.click(ghostPage.ghost.div_area_libre());

    await testController.takeScreenshot(
        {
            path: feature_name + "/after-7.png",
            fullPage: true,
        }
    );
    ghostPage.ghost.comparador(feature_name, "before-7.png", "after-7.png", 7);
});


When('Click en publish en la otra version', async function () {
    //await testController.click(ghostPage.ghost.boton_menu_publish());
    await testController.click(ghostPage.ghost.boton_publish());
    await testController.click(ghostPage.ghost.menuPost());


    await testController.takeScreenshot(
        {
            path: feature_name + "/after-8.png",
            fullPage: true,
        }
    );
    ghostPage.ghost.comparador(feature_name, "before-8.png", "after-8.png", 8);
});

Then('Validamos la creacion del post en la otra version', async function () {

    const verificaMenuPost = await ghostPage.ghost.menuPost().exists;

    await testController.expect(verificaMenuPost).ok();


});

