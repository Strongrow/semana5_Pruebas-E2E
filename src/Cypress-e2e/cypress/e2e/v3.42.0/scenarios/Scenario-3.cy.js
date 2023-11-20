import { SignInPage } from "../pages/signinPage.cy";
import config from "../assets/config.json";
import { takeCypressScreenshot } from "../utils/takeScreenshot";

describe("Scenario-3 user wrong and password correct", () => {

    it("Login", () => {
        // Given the user has the credentials 
        // When user use wrong and password correct
        // Then user is not logged in
        let signinPage = new SignInPage();
        let homePage = signinPage.login(config.userWrong, config.password);
        takeCypressScreenshot("login-wrong")
       
    })

})