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

    context("Escenario: muestra la creación de ua fecha fuera del formato requerido  " , ()=>{
     it.only("Inicia desde el login, se crea la fecha errada ", ()=>{
        
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

        //When, se da click en publicacion
        optionsMenuPage.getPublishOptionsButton()
        cy.screenshot()
        cy.wait(500)

        //and se busca el error de formato
        dataMockPage.getOptionsPageDateError()
        cy.screenshot()
        cy.wait(500)

        //Then, se verifica el mensaje de error
        primaryOptionsPage.getOptionsChange()
        cy.screenshot()
        cy.wait(500)

    })
    })
})