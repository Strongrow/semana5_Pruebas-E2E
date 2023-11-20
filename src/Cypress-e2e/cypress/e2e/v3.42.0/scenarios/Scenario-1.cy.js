import { SignInPage } from "./../pages/signinPage.cy";
import config from "../assets/config.json";
import { takeCypressScreenshot } from "../utils/takeScreenshot";

describe("Scenario-1", () => {

    it("Login", () => {
        // Given the user has the credentials 
        // When user enters credentials
        // Then user is logged in
        let signinPage = new SignInPage();
        signinPage.login(config.user, config.password);
        takeCypressScreenshot("login")
       
    })

})