import { SignInPage } from "../pages/signinPage.cy";
import config from "../assets/config.json";
import { takeCypressScreenshot } from "../utils/takeScreenshot";
import { Page } from "../pages/page.cy";

describe("Scenario-12 Edit a page", () => {
  // Given I navigate to page "http://localhost:3001/ghost/#/signin"
  // And I login with "<USER_EMAIL>" and "<USER_PASSWORD>"
  // And I wait
  // When I click on the Pages tab
  // And I wait
  // And I select a random page
  // And I wait
  // And I edit the selected post with title "<POST_CHANGE_TITLE>"
  // Then I navigate to page "http://localhost:3001/ghost/#/pages"
  // And I wait
  // And I should see the new page edited called "<POST_TITLE>"

  it("Creacion de post ", () => {
    // Ingrensando con usuario y clave correcta
    let signinPage = new SignInPage();
    signinPage.login(config.user, config.password);

    let page = new Page();
    page.editpage(config.page_tittle_edit, config.image_path, config.host);
    cy.wait(1000);
    takeCypressScreenshot("Editd a new page");
  });
});
