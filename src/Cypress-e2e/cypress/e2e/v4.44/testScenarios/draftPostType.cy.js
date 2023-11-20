import DraftMenuPage from "../pageObjectPatron/DraftMenuPage"
import LoginPage from "../pageObjectPatron/LoginPage" 
import LogoutPage from "../pageObjectPatron/LogoutPage"  


describe ("Funcionalidad: Draft V4.44", () =>{
    
    const draftMenuPage = new DraftMenuPage()
    const loginPage = new LoginPage()
    const logoutPage = new LogoutPage()

    beforeEach (()=>{

        //Given, la url del administrador del sitio
        loginPage.getVisit()
        cy.wait(500)
    })

    context("Escenario: muestra el menu por tipo  seccion Draft " , ()=>{
     it("Inicia desde el login y despliega opciones del menu", ()=>{
        
        //When, se agrega las credenciales de ingreso y se ingresa al admin
        loginPage.getEmailAndPassword()

        draftMenuPage.getMenuAdminDrafts()
        cy.screenshot()
        draftMenuPage.getContentFilterType()
        cy.screenshot()
        cy.wait(500)

        //When, Se regresa a dashboard 
        draftMenuPage.getMenuAdminDashboard()
        cy.screenshot()
        cy.wait(500)
        
        //Then, se cierra sesion
        logoutPage.getSignOutMenu().click();
        logoutPage.getSignOut().click();
                  
    })
    })
})