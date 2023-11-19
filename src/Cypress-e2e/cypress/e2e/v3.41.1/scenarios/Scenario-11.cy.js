import { SignInPage } from "../pages/signinPage.cy";
import config from "../assets/config.json";
import { takeCypressScreenshot } from "../utils/takeScreenshot";
import {Page} from "../pages/page.cy"


describe("Scenario-11 Create a new page", () => {

    it("Creacion de page ", () => {
        // Ingrensando con usuario y clave correcta
        let signinPage = new SignInPage();
        signinPage.login(config.user,config.password);

        let page = new Page();
        page.createNewPage(config.page_tittle,config.content_page,config.host);
        cy.wait(1000);
        takeCypressScreenshot("Create a new page")

        })      
})
