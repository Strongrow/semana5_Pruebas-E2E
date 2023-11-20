import { SignInPage } from "../pages/signinPage.cy";
import config from "../assets/config.json";
import { takeCypressScreenshot } from "../utils/takeScreenshot";
import { Page } from "../pages/page.cy";


describe("Scenario-13 Eliminate a page", () => {

    it("Creacion de post ", () => {
        // Ingrensando con usuario y clave correcta
        let signinPage = new SignInPage();
        signinPage.login(config.user,config.password);

        let page = new Page();
        page.deletePage();
        cy.wait(1000);
        takeCypressScreenshot("Eliminate page")

        })      
})
