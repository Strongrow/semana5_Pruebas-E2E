import OptionsOnPage from "../pageObjectPatron/OptionsOnPage"
import LoginPage from "../pageObjectPatron/LoginPage" 
import PrimaryOptionsPage from "../pageObjectPatron/PrimaryOptionsPage"


describe ("Funcionalidad: Crear contenidos en Page", () =>{
    
    const optionsMenuPage = new OptionsOnPage()
    const loginPage = new LoginPage()
    const primaryOptionsPage = new PrimaryOptionsPage()

    beforeEach (()=>{
        //Given, la url del administrador del sitio
        loginPage.getVisit()
        cy.wait(500)
    })

    context("Escenario: muestra la creación del contenido de tipo Titulo predeterminado para una  Page " , ()=>{
     it.only("Inicia desde el login, crea el contenido  y publica la page  ", ()=>{
        
        //When, se agrega las credenciales de ingreso y se ingresa al admin
        loginPage.getEmailAndPassword()

        //When, se ingresa a la seccion Page
        optionsMenuPage.getMenuAdminPage()
        cy.screenshot()
        cy.wait(500)

        // And, se da click en Crear new Page
        optionsMenuPage.getCreateNewPage()
        cy.screenshot()
        cy.wait(500)

        //When, se agrega titulo a la page
        optionsMenuPage.getTitleNewPage()
        cy.screenshot()
        cy.wait(500)

        //And, se da click en publicacion
        optionsMenuPage.getPublishOptionsButton()
        cy.screenshot()
        cy.wait(500)

        //And, guarda el menu de Setting
        primaryOptionsPage.getOptionsUrlChange()
        cy.screenshot()
        cy.wait(500)

        //Then, se confirma que se regresa a la publicación de la Page
        optionsMenuPage.getPublishOptionsButton()
        cy.screenshot()
        cy.wait(500)
        
    })
    })
})