import { SignInPage } from "../pages/signinPage.cy";
import config from "../assets/config.json";
import { takeCypressScreenshot } from "../utils/takeScreenshot";

describe("Scenario-5 Forogot password with user correct", () => {

    it("Login", () => {
        // Given user is logged in
        let signinPage = new SignInPage();
        let homePage = signinPage.forgot(config.userWrong);
        cy.get('.main-error').invoke('text').should('exist');;
        takeCypressScreenshot("forgot-wrong")       
    })

})
