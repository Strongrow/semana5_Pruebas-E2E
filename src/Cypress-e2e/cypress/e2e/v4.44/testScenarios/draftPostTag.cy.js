import DraftMenuPage from "../pageObjectPatron/DraftMenuPage"
import LoginPage from "../pageObjectPatron/LoginPage" 
import LogoutPage from "../pageObjectPatron/LogoutPage"  


describe ("Funcionalidad: Draft V4.44", () =>{
    
    const draftMenuPage = new DraftMenuPage()
    const loginPage = new LoginPage()
    const logoutPage = new LogoutPage()

    beforeEach (()=>{
        loginPage.getVisit()
        cy.wait(500)
    })

    context("Escenario: muestra el menu  por tag  seccion Draft " , ()=>{
     it("Inicia desde el login y despliega opciones del menu", ()=>{
        
        loginPage.getEmailAndPassword()

        draftMenuPage.getMenuAdminDrafts()
        cy.screenshot()
        draftMenuPage.getContentFilterTag()
        cy.screenshot()
        cy.wait(500)
        draftMenuPage.getMenuAdminDashboard()
        cy.screenshot()
        cy.wait(500)
    
        logoutPage.getSignOutMenu().click();
        logoutPage.getSignOut().click();
                  
    })
    })
})