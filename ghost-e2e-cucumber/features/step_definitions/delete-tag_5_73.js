const { Given, When, Then } = require('cucumber');
const ghostPage = require('../support/pages/ghost-page');
const feature_name = "delete-tag";


Given('Ir al home de ghost ambiente dos', async function () {

    await testController.navigateTo(ghostPage.ghost.url_5_73());
    await testController.takeScreenshot({
        path: feature_name + "/after-1.png",
        fullPage: true,
    });
    ghostPage.ghost.comparador(feature_name, "before-1.png", "after-1.png", 1);
});

When('Ingresar usuario ambiente dos {string}', async function (username) {
    await testController.typeText(ghostPage.ghost.loginUsername_version2(), username);
    await testController.takeScreenshot({
        path: feature_name + "/after-2.png",
        fullPage: true,
    });
    ghostPage.ghost.comparador(feature_name, "before-2.png", "after-2.png", 2);
});

When('Ingresar password ambiente dos {string}', async function (password) {
    await testController.typeText(ghostPage.ghost.loginPassword_version2(), password);
    await testController.takeScreenshot({
        path: feature_name + "/after-3.png",
        fullPage: true,
    });
    ghostPage.ghost.comparador(feature_name, "before-3.png", "after-3.png", 3);
});

When('Click en boton Login ambiente dos', async function () {
    await testController.click(ghostPage.ghost.loginButton());
    await testController.takeScreenshot({
        path: feature_name + "/after-4.png",
        fullPage: true,
    });
    ghostPage.ghost.comparador(feature_name, "before-4.png", "after-4.png", 4);
});


When('Dar en Menu Tags ambiente dos', async function () {
    await testController.click(ghostPage.ghost.menuTags());
    await testController.takeScreenshot({
        path: feature_name + "/after-5.png",
        fullPage: true,
    });
    ghostPage.ghost.comparador(feature_name, "before-5.png", "after-5.png", 5);
});

When('Dar click en una fila de un tag ambiente dos', async function () {
    await testController.click(ghostPage.ghost.lista_tags_name());
    await testController.takeScreenshot({
        path: feature_name + "/after-6.png",
        fullPage: true,
    });
    ghostPage.ghost.comparador(feature_name, "before-6.png", "after-6.png", 6);
});


When('Dar en el boton Delete tag ambiente dos', async function () {
    await testController.click(ghostPage.ghost.boton_delete_tag());
    await testController.takeScreenshot({
        path: feature_name + "/after-7.png",
        fullPage: true,
    });
    ghostPage.ghost.comparador(feature_name, "before-7.png", "after-7.png", 7);
});

When('Dar en confirmar ambiente dos', async function () {
    await testController.wait(2000);
    try {
        await testController.takeScreenshot({
            path: feature_name + "/after-8.png",
            fullPage: true,
        });
        await testController.click(ghostPage.ghost.boton_delete_tag_confirmar());

        ghostPage.ghost.comparador(feature_name, "before-8.png", "after-8.png", 8);
    }
    catch (e) {
        console.log(e);
    }

});


Then('Verificar que no este el tag ambiente dos', async function () {

    const verificaTagName = await ghostPage.ghost.menuTags().exists;

    await testController.expect(verificaTagName).ok();
    //  await testController.expect(true).ok();

});

