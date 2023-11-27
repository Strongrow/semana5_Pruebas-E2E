import OptionsOnPage from "../pageObjectPatron/OptionsOnPage"
import LoginPage from "../pageObjectPatron/LoginPage" 
import PrimaryOptionsPage from "../pageObjectPatron/PrimaryOptionsPage"
import DataFakerPage from "../pageObjectPatron/DataFakerPage"


describe ("Funcionalidad: Crear contenidos en Page", () =>{
    
    const optionsMenuPage = new OptionsOnPage()
    const loginPage = new LoginPage()
    const primaryOptionsPage = new PrimaryOptionsPage()
    const dataFakerPage = new DataFakerPage()

    beforeEach (()=>{
        //Given, la url del administrador del sitio
        loginPage.getVisit()
        cy.wait(500)
    })

    context("Escenario: muestra la creación del contenido de tipo Callout para una  Page " , ()=>{
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

        //And, se da click para visibilizar las opciones
        optionsMenuPage.getContentButtonPage()
        cy.screenshot()
        cy.wait(500)

        //when, se da click en el boton +
        optionsMenuPage.getOptionsButtonPage()
        cy.screenshot()
        cy.wait(500)

        //And, se elige la opción otro
        primaryOptionsPage.getOptionsOtherPage()
        cy.screenshot()
        cy.wait(500)

        //And, se agrega el contenido
        dataFakerPage.getOptionsCreateVideoOther()
        cy.screenshot()
        cy.wait(500) 

        //And, se embebe el link en la pagina 
        primaryOptionsPage.getOptionsConfirm()
        cy.screenshot()
        cy.wait(5500)

        //When, se da click en publicacion
        optionsMenuPage.getPublishButton()
        cy.screenshot()
        cy.wait(500)

        //And, se da click en el boton continuar 
        optionsMenuPage.getContinueButton()
        cy.screenshot()
        cy.wait(500)

        //Then, se confirma la publicación de la Page
        optionsMenuPage.getConfirmPublishPage()
        cy.screenshot()
        cy.wait(500)
           
    })
    })
})