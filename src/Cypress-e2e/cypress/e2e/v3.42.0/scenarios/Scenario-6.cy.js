import { SignInPage } from "../pages/signinPage.cy";
import config from "../assets/config.json";
import { takeCypressScreenshot } from "../utils/takeScreenshot";

describe("Scenario-6 Forgot password with user incorrect", () => {

    it("Login", () => {
        // Given the user has the user but not the password 
        // When user use button Forgot
        // Then user recive email 
        let signinPage = new SignInPage();
        let homePage = signinPage.forgot(config.user);
        cy.get('.main-error').invoke('text').should('exist');;
        takeCypressScreenshot("forgot-good")       
    })

})
