import OptionsOnPage from "../pageObjectPatron/OptionsOnPage"
import LoginPage from "../pageObjectPatron/LoginPage" 
import PrimaryOptionsPage from "../pageObjectPatron/PrimaryOptionsPage"
import DataMockPage from "../pageObjectPatron/DataMockPage"


describe ("Funcionalidad: Crear contenidos en Page", () =>{
    
    const optionsMenuPage = new OptionsOnPage()
    const loginPage = new LoginPage()
    const primaryOptionsPage = new PrimaryOptionsPage()
    const dataMockPage = new DataMockPage()

    beforeEach (()=>{
        //Given, la url del administrador del sitio
        loginPage.getVisit()
        cy.wait(500)
    })

    context("Escenario: muestra la creación del contenido equivocado de tipo CodePen para una  Page " , ()=>{
     it.only("Inicia desde el login, crea el contenido equivocado y se muestra el mensaje de error   ", ()=>{
        
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
        
        //And, se elige la opción File
        primaryOptionsPage.getOptionsCodePenPage()
        cy.screenshot()
        cy.wait(500)

       //And, se crea el contenido
       dataMockPage.getOptionsCreateUpLinkOther()
       cy.screenshot()

        //And, se embebe el link en la pagina 
        primaryOptionsPage.getOptionsConfirm()
        cy.screenshot()
        cy.wait(5500)

        //Then, se verifica el mensaje de error
        primaryOptionsPage.getOptionsConfirmError()
        cy.screenshot()
        cy.wait(500)
           
    })
    })
})