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

    context("Escenario: muestra el menu por recientes  seccion Published " , ()=>{
     it("Inicia desde el login y despliega opciones del menu", ()=>{
        
        //When, se agrega las credenciales de ingreso y se ingresa al admin
        loginPage.getEmailAndPassword()

        //When, se ingresa a la seccion de Published
        publishedMenuPage.getMenuAdminPublished()
        cy.screenshot()

         //When, Se verifica el despligue de menu filtro por recientes
        publishedMenuPage.getContentFilterSort()
        cy.screenshot()
        cy.wait(500)

        //When, Se regresa a dashboard 
        publishedMenuPage.getMenuAdminDashboard()
        cy.screenshot()
        cy.wait(500)
        
        //Then, se cierra sesion
        logoutPage.getSignOutMenu().click();
        logoutPage.getSignOut().click();
                  
    })
    })
})