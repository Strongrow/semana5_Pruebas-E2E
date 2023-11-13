import AdminMenuPage from "../support/PageObject/AdminMenuPage" 
import HomeLoginPage from "../support/PageObject/HomeLoginPage"

describe ("Funcionalidad de ingreso con login al admin de Ghost a la seccion explorar", () =>{
    
    const homeLoginPage = new HomeLoginPage()
    const adminMenuPage = new AdminMenuPage()
    
    beforeEach (()=>{
        cy.visit('http://localhost:2368/ghost/')
        cy.wait(500)
    })

    context("Login,  navegacion al explorador con  fin de sesion " , ()=>{
     it("Ingresar al explorador y regresa al dashboard", ()=>{
        cy.fixture('example').then(example => {               
            homeLoginPage.getLoginIdBox().type(example.email)
            homeLoginPage.getLoginPasswordBox().type(example.password);
        })
        homeLoginPage.getLoginSignIn().click();
        adminMenuPage.getMenuAdmin().contains('Explore').click();
        cy.screenshot() 
        adminMenuPage.getMenuAdmin().contains('Dashboard').click();
        cy.screenshot()
        cy.wait(500)
        homeLoginPage.getSignOutMenu().click();
        homeLoginPage.getSignOut().click();       
    })
    })
})