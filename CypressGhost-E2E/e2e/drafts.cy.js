import AdminMenuPage from "../support/PageObject/AdminMenuPage" 
import HomeLoginPage from "../support/PageObject/HomeLoginPage"

describe ("Funcionalidad despligue menu filtros de  Drafts", () =>{
    
    const homeLoginPage = new HomeLoginPage()
    const adminMenuPage = new AdminMenuPage()
    
    beforeEach (()=>{
        cy.visit('http://localhost:2368/ghost/')
        cy.wait(500)
    })

    context("Login, probar la navegacion al listado de borradores y hacer Logout" , ()=>{
     it("Desplegar menu drafts filtro por tipo y regresa al dashboard", ()=>{
        cy.fixture('example').then(example => {               
            homeLoginPage.getLoginIdBox().type(example.email)
            homeLoginPage.getLoginPasswordBox().type(example.password);
        })
        homeLoginPage.getLoginSignIn().click();
        adminMenuPage.getMenuAdmin().contains('Drafts').click();
        cy.screenshot()
        adminMenuPage.getContentFilterType().click();
        cy.screenshot() 
        adminMenuPage.getMenuAdmin().contains('Dashboard').click();
        cy.screenshot()
        cy.wait(500)
        homeLoginPage.getSignOutMenu().click();
        homeLoginPage.getSignOut().click();        
    })

    it("Desplegar menu drafts  filtro por author  y regresa al dashboard", ()=>{
        cy.fixture('example').then(example => {               
            homeLoginPage.getLoginIdBox().type(example.email)
            homeLoginPage.getLoginPasswordBox().type(example.password);
        })
        homeLoginPage.getLoginSignIn().click();
        adminMenuPage.getMenuAdmin().contains('Drafts').click();
        cy.screenshot()
        adminMenuPage.getContentFilterAuthor().click();
        cy.screenshot() 
        adminMenuPage.getMenuAdmin().contains('Dashboard').click();
        cy.screenshot()
        cy.wait(500)
        homeLoginPage.getSignOutMenu().click();
        homeLoginPage.getSignOut().click();        
    })

    it("Desplegar menu drafts filtro por visibilidad  y regresa al dashboard", ()=>{
        cy.fixture('example').then(example => {               
            homeLoginPage.getLoginIdBox().type(example.email)
            homeLoginPage.getLoginPasswordBox().type(example.password);
        })
        homeLoginPage.getLoginSignIn().click();
        adminMenuPage.getMenuAdmin().contains('Drafts').click();
        cy.screenshot()
        adminMenuPage.getContentFilterVisibility().click();
        cy.screenshot() 
        adminMenuPage.getMenuAdmin().contains('Dashboard').click();
        cy.screenshot()
        cy.wait(500)
        homeLoginPage.getSignOutMenu().click();
        homeLoginPage.getSignOut().click();        
    })

    it("Desplegar menu draft  filtro por tag  y regresa al dashboard", ()=>{
        cy.fixture('example').then(example => {               
            homeLoginPage.getLoginIdBox().type(example.email)
            homeLoginPage.getLoginPasswordBox().type(example.password);
        })
        homeLoginPage.getLoginSignIn().click();
        adminMenuPage.getMenuAdmin().contains('Drafts').click();
        cy.screenshot()
        adminMenuPage.getContentFilterTag().click();
        cy.screenshot() 
        adminMenuPage.getMenuAdmin().contains('Dashboard').click();
        cy.screenshot()
        cy.wait(500)
        homeLoginPage.getSignOutMenu().click();
        homeLoginPage.getSignOut().click();        
    })
    })    
})