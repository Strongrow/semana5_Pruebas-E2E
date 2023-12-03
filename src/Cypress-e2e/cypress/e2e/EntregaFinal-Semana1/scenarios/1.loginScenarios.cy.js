import { SignInPage } from "../pages/signinPage.cy";
import data from "../Apriori/login.json";
import { faker } from '@faker-js/faker';

describe("Login Scenarios", () => {


    context('720p resolution', () => {
        beforeEach(() => {
          // navegador con un monitor de 720p
          cy.viewport(1280, 720)
        })
    
    it("Scenario 1: Login with valid credentials - displays full header'", () => {        
        let signinPage = new SignInPage();
        signinPage.login(data.scenario1.user, data.scenario1.password );
        cy.wait(2000);
        signinPage.checkSesion().should("contain", "Dashboard")
    })

    it("Scenario 2: Login with valid email but invalid password", () => {
        // Given user is logged in
       let signinPage = new SignInPage();
       let pass = faker.name.firstName()
       signinPage.login(data.scenario1.user, pass );
       cy.wait(2000);    
       signinPage.checkForErrors().should("contain", "Your password is incorrect.")
   });

   it("Scenario 3: Login with invalid multiplied credentials", () => {
       // When the user wants to login with invalid multiplied credentials
       let signinPage = new SignInPage();
       signinPage.login(data.scenario2.user, data.scenario2.password);
       // Then the user should see an error message
       signinPage.checkForErrorData().should("contain", "Please fill out the form to sign in.")
   });
    });

/////////////////////////////////////////////////////////////////////////

    context('iphone-5 resolution', () => {
        beforeEach(() => {
            cy.viewport('iphone-6', 'landscape')
        })
        it("Scenario 1: Login with valid credentials - displays full header'", () => {        
            let signinPage = new SignInPage();
            signinPage.login(data.scenario1.user, data.scenario1.password );
            cy.wait(2000);
            signinPage.checkSesion().should("contain", "Dashboard")
        })
    
        it("Scenario 2: Login with valid email but invalid password", () => {
            // Given user is logged in
           let signinPage = new SignInPage();
           let pass = faker.name.firstName()
           signinPage.login(data.scenario1.user, pass );
           cy.wait(2000);    
           signinPage.checkForErrors().should("contain", "Your password is incorrect.")
       });
    
       it("Scenario 3: Login with invalid multiplied credentials", () => {
           // When the user wants to login with invalid multiplied credentials
           let signinPage = new SignInPage();
           signinPage.login(data.scenario2.user, data.scenario2.password);
           // Then the user should see an error message
           signinPage.checkForErrorData().should("contain", "Please fill out the form to sign in.")
       });
        
      })

      

    
});
