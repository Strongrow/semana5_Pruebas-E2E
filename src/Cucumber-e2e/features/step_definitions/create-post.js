const { Given, When, Then } = require('cucumber');
const ghostPage = require('../support/pages/ghost-page');


Given('Navegar al Home de ghost', async function () {

    await testController.navigateTo(ghostPage.ghost.url());
});

When('Digitar usuario {string}', async function (username) {
    await testController.typeText(ghostPage.ghost.loginUsername(), username);
});

When('Digitar password {string}', async function (password) {
    await testController.typeText(ghostPage.ghost.loginPassword(), password);

});


When('Ingresar dashborad', async function () {
    await testController.click(ghostPage.ghost.loginButton());

});



When('Ir al menu de post', async function () {
    await testController.click(ghostPage.ghost.menuPost());

});


When('Boton de new post', async function () {
    await testController.click(ghostPage.ghost.boton_nuevo_post());

});

When('Ingresar el titulo del post {string}', async function (titulo) {

    //Se trae texto aleatorio para el titulo con el uso de Mockaroo APIs
    const response = await testController.request("https://my.api.mockaroo.com/post.json?key=3856ffb0");
    var titulo_aleatorio = response.body[0].title;
    console.log("valor del titulo ... " + titulo_aleatorio);

    await testController.typeText(ghostPage.ghost.titulo_post(), titulo_aleatorio);
    await testController.click(ghostPage.ghost.div_area_libre());



});


When('Click en publish', async function () {
    //await testController.click(ghostPage.ghost.boton_menu_publish());
    await testController.click(ghostPage.ghost.boton_publish());
    await testController.click(ghostPage.ghost.menuPost());



});

Then('Validamos la creacion del post', async function () {

    const verificaMenuPost = await ghostPage.ghost.menuPost().exists;

    await testController.expect(verificaMenuPost).ok();


});

