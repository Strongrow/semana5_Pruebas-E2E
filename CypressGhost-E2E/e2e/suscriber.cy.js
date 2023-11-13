import AdminMenuPage from "../support/PageObject/AdminMenuPage" 
import HomeLoginPage from "../support/PageObject/HomeLoginPage"

describe ("Funcionalidad de visita al sitio web (embebido) desde el administrador de Ghost ", () =>{
    
    const homeLoginPage = new HomeLoginPage()
    const adminMenuPage = new AdminMenuPage()
    
    beforeEach (()=>{
        cy.visit('http://localhost:2368/ghost/')
        cy.wait(500)
    })

    context("Log in, navegacion con vista al sitio web con logout " , ()=>{
        it("Ingresar al sitio web (embebido) y regresa al dashboard", ()=>{
            cy.fixture('example').then(example => {               
                homeLoginPage.getLoginIdBox().type(example.email)
                homeLoginPage.getLoginPasswordBox().type(example.password);
            })

            homeLoginPage.getLoginSignIn().click();
            adminMenuPage.getMenuAdmin().contains('View site').click(); 
            cy.screenshot()  
            adminMenuPage.getMenuAdmin().contains('Dashboard').click();
            cy.screenshot()
            cy.wait(500)
            homeLoginPage.getSignOutMenu().click();
            homeLoginPage.getSignOut().click();        
       })
    })
})