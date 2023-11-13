import AdminMenuPage from "../support/PageObject/AdminMenuPage" 
import HomeLoginPage from "../support/PageObject/HomeLoginPage"

describe ("Funcionalidad mostrar todos los posts desde la seccion Scheduled", () =>{
    
    const homeLoginPage = new HomeLoginPage()
    const adminMenuPage = new AdminMenuPage()

    beforeEach (()=>{
        cy.visit('http://localhost:2368/ghost/')
        cy.wait(500)
    })

    context("Login,  navegacion al Sheduled  y logout " , ()=>{
     it("Dar click se  muestra los post publicados desde seccion y regresa al dashboard", ()=>{
        cy.fixture('example').then(example => {               
            homeLoginPage.getLoginIdBox().type(example.email)
            homeLoginPage.getLoginPasswordBox().type(example.password);
        })
        homeLoginPage.getLoginSignIn().click();
        adminMenuPage.getMenuAdmin().contains('Scheduled').click()
        cy.screenshot()
        adminMenuPage.getAllPost().contains('Show all posts').click();
        cy.screenshot() 
        cy.wait(500)
        adminMenuPage.getMenuAdmin().contains('Dashboard').click();
        cy.screenshot()
        cy.wait(500)
        homeLoginPage.getSignOutMenu().click();
        homeLoginPage.getSignOut().click();
                
    })
    })
})