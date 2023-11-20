import PublishedMenuPage from "../pageObjectPatron/PublishedMenuPage"
import LoginPage from "../pageObjectPatron/LoginPage" 
import LogoutPage from "../pageObjectPatron/LogoutPage"  


describe ("Funcionalidad: Published V4.44", () =>{
    
    const publishedMenuPage = new PublishedMenuPage()
    const loginPage = new LoginPage()
    const logoutPage = new LogoutPage()

    beforeEach (()=>{

        //Given, la url del administrador del sitio
        loginPage.getVisit()
        cy.wait(500)
    })

    context("Escenario: muestra el menu  por tag  seccion Published " , ()=>{
     it("Inicia desde el login y despliega opciones del menu", ()=>{
        
        loginPage.getEmailAndPassword()

        publishedMenuPage.getMenuAdminPublished()
        cy.screenshot()
        publishedMenuPage.getContentFilterTag()
        cy.screenshot()
        cy.wait(500)
        publishedMenuPage.getMenuAdminDashboard()
        cy.screenshot()
        cy.wait(500)
        
        //Then, se cierra sesion
        logoutPage.getSignOutMenu().click();
        logoutPage.getSignOut().click();
                  
    })
    })
})