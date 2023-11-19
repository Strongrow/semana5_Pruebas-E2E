import { SignInPage } from "../pages/signinPage.cy";
import config from "../assets/config.json";
import { takeCypressScreenshot } from "../utils/takeScreenshot";

describe("Scenario-6 Forogot password with user incorrect", () => {

    it("Login", () => {
        // Given user is logged in
        let signinPage = new SignInPage();
        let homePage = signinPage.forgot(config.user);
        cy.get('.main-error').invoke('text').should('exist');;
        takeCypressScreenshot("forgot-good")       
    })

})
