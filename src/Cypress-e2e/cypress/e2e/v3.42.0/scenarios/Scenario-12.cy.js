import { SignInPage } from "../pages/signinPage.cy";
import config from "../assets/config.json";
import { takeCypressScreenshot } from "../utils/takeScreenshot";
import {Page} from "../pages/page.cy"

describe("Scenario-12 Edit a page", () => {

    it("Creacion de post ", () => {
        // Ingrensando con usuario y clave correcta
        let signinPage = new SignInPage();
        signinPage.login(config.user,config.password);

        let page = new Page();
        page.editpage(config.page_tittle_edit,config.image_path,config.host);
        cy.wait(1000);
        takeCypressScreenshot("Editd a new page")

        })      
})
