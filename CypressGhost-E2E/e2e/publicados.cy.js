import AdminMenuPage from "../support/PageObject/AdminMenuPage" 
import HomeLoginPage from "../support/PageObject/HomeLoginPage"

describe ("Funcionalidad de ingreso con login al menu de la seccion Publicados", () =>{
    
    const homeLoginPage = new HomeLoginPage()
    const adminMenuPage = new AdminMenuPage()
    
    beforeEach (()=>{
        cy.visit('http://localhost:2368/ghost/')
        cy.wait(500)
    })

    context("Ingresar con usuario y contraseña, realiza la prueba y se desloguea " , ()=>{
     it("Desplegar menu publicados, filtro por tipo, y  regresa al dashboard", ()=>{
        cy.fixture('example').then(example => {               
            homeLoginPage.getLoginIdBox().type(example.email)
            homeLoginPage.getLoginPasswordBox().type(example.password);
        })
        homeLoginPage.getLoginSignIn().click();
        adminMenuPage.getMenuAdmin().contains('Published').click();
        cy.screenshot()
        adminMenuPage.getContentFilterType().click();
        cy.screenshot() 
        cy.wait(500)
        adminMenuPage.getMenuAdmin().contains('Dashboard').click();
        cy.screenshot()
        cy.wait(500)
        homeLoginPage.getSignOutMenu().click();
        homeLoginPage.getSignOut().click();       
    })

    it("Desplegar menus publicados, filtro por  visibilidad y regresa al dashboard", ()=>{
        cy.fixture('example').then(example => {               
            homeLoginPage.getLoginIdBox().type(example.email)
            homeLoginPage.getLoginPasswordBox().type(example.password);
        })
        homeLoginPage.getLoginSignIn().click();
        adminMenuPage.getMenuAdmin().contains('Published').click();
        cy.screenshot()
        adminMenuPage.getContentFilterVisibility().click();
        cy.screenshot() 
        cy.wait(500)
        adminMenuPage.getMenuAdmin().contains('Dashboard').click();
        cy.screenshot()
        cy.wait(500)
        homeLoginPage.getSignOutMenu().click();
        homeLoginPage.getSignOut().click();       
    })

    it("Desplegar menus publicados, filtro por autor y  regresa al dashboard", ()=>{
        cy.fixture('example').then(example => {               
            homeLoginPage.getLoginIdBox().type(example.email)
            homeLoginPage.getLoginPasswordBox().type(example.password);
        })
        homeLoginPage.getLoginSignIn().click();
        adminMenuPage.getMenuAdmin().contains('Published').click();
        cy.screenshot()
        adminMenuPage.getContentFilterAuthor().click();
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