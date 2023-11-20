import { SignInPage } from "../pages/signinPage.cy";
import config from "../assets/config.json";
import { takeCypressScreenshot } from "../utils/takeScreenshot";
import { Page } from "../pages/page.cy";

describe("Scenario-11 Create a new page", () => {
  it("Creacion de page ", () => {
    // Given I navigate to page "http://localhost:3001/ghost/#/signin"
    // And I login with "<USER_EMAIL>" and "<USER_PASSWORD>"
    // And I wait
    // When I click on the Pages tab
    // And create a New Page
    // And I wait
    // And I create a new post with "<POST_TITLE>", "<POST_CONTENT>"
    // Then I navigate to page "http://localhost:3001/ghost/#/pages"
    // And I wait
    // And I should see the new page edited called "<POST_TITLE>"

    // Ingrensando con usuario y clave correcta
    let signinPage = new SignInPage();
    signinPage.login(config.user, config.password);

    let page = new Page();
    page.createNewPage(config.page_tittle, config.content_page, config.host);
    cy.wait(1000);
    takeCypressScreenshot("Create a new page");
  });
});
