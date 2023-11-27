import { SignInPage } from "../pages/signinPage.cy";
import config from "../assets/config.json";
import { takeCypressScreenshot } from "../utils/takeScreenshot";
import { Page } from "../pages/page.cy";

describe("Scenario-13 Eliminate a page", () => {
  // Given I navigate to page "http://localhost:3001/ghost/#/signin"
  // And I login with "<USER_EMAIL>" and "<USER_PASSWORD>"
  // And I wait
  // When I click on the Pages tab
  // And I wait
  // And I select a random page
  // And I wait
  // And I click on the post settings button
  // And I wait
  // And I click on Delete page botton
  // And I wait
  // And I click on Delete botton
  // Then I navigate to page "http://localhost:3001/ghost/#/pages"
  // And I wait
  // And I shouldn't see the deleted page

  it("Creacion de post ", () => {
    // Ingrensando con usuario y clave correcta
    let signinPage = new SignInPage();
    signinPage.login(config.user, config.password);

    let page = new Page();
    page.deletePage();
    cy.wait(1000);
    takeCypressScreenshot("Eliminate page");
  });
});
