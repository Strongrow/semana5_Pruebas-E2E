import AdminMenuPage from "../pageObjectPatron/AdminMenuPage"
import LoginPage from "../pageObjectPatron/LoginPage" 
import LogoutPage from "../pageObjectPatron/LogoutPage"  


describe ("Funcionalidad: Scheduled V4.44", () =>{
    
    const adminMenuPage = new AdminMenuPage()
    const loginPage = new LoginPage()
    const logoutPage = new LogoutPage()

    beforeEach (()=>{
        loginPage.getVisit()
        cy.wait(500)
    })

    context("Escenario: muestra la lista de post desde la seccion Scheduled" , ()=>{
     it("Inicia desde el login y lista publicados", ()=>{
        loginPage.getEmailAndPassword()

        adminMenuPage.getMenuAdminSite()
        cy.screenshot()
        cy.wait(500)
        adminMenuPage.getMenuAdminDashboard()
        cy.screenshot()
        cy.wait(500)
    
        logoutPage.getSignOutMenu().click();
        logoutPage.getSignOut().click();
                  
    })
    })
})