import { SignInPage } from "../pages/signinPage.cy";
import config from "../assets/config.json";
import { takeCypressScreenshot } from "../utils/takeScreenshot";

describe("Scenario-2 user correct and password incorrect", () => {

    it("Login", () => {
        // Given user is logged in
        let signinPage = new SignInPage();
        let homePage = signinPage.login(config.user, config.passwordWrong);
        takeCypressScreenshot("login-passwordWrong")
       
    })

})