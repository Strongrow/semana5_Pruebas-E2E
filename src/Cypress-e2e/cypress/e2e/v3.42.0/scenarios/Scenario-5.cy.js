import { SignInPage } from "../pages/signinPage.cy";
import config from "../assets/config.json";
import { takeCypressScreenshot } from "../utils/takeScreenshot";

describe("Scenario-5 Forogot password with user correct", () => {

    it("Login", () => {
        // Given the user has the user nut not the password 
        // When user use button Forgot
        // Then user recive email 
        let signinPage = new SignInPage();
        let homePage = signinPage.forgot(config.userWrong);
        cy.get('.main-error').invoke('text').should('exist');;
        takeCypressScreenshot("forgot-wrong")       
    })

})
