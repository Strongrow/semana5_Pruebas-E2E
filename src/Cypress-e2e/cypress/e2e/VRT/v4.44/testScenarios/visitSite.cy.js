import AdminMenuPage from "../pageObjectPatron/AdminMenuPage"
import LoginPage from "../pageObjectPatron/LoginPage" 
import LogoutPage from "../pageObjectPatron/LogoutPage"  


describe ("Funcionalidad: Visit site V4.44", () =>{
    
    const adminMenuPage = new AdminMenuPage()
    const loginPage = new LoginPage()
    const logoutPage = new LogoutPage()

    beforeEach (()=>{

        //Given, la url del administrador del sitio
        loginPage.getVisit()
        cy.wait(500)
    })

    context("Escenario: muestra la lista de post desde la seccion Visit Site" , ()=>{
     it("Inicia desde el login y va a la pagina del sitio", ()=>{
        
        //When, se agrega las credenciales de ingreso y se ingresa al admin
        loginPage.getEmailAndPassword()

        //When, se ingresa a la seccion de 
        adminMenuPage.getMenuAdminSite()
        cy.screenshot()
        cy.wait(500)

        //When, Se regresa a dashboard 
        adminMenuPage.getMenuAdminDashboard()
        cy.screenshot()
        cy.wait(500)
    
        //Then, se cierra sesion
        logoutPage.getSignOutMenu().click();
        logoutPage.getSignOut().click();
                  
    })
    })
})