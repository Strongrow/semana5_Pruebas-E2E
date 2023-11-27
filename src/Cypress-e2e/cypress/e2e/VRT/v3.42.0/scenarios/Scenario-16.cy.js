import { SignInPage } from "../pages/signinPage.cy";
import config from "../assets/config.json";
import { takeCypressScreenshot } from "../utils/takeScreenshot";
import { TagPage } from "../pages/tagPage.cy";

describe("Scenario-16 Delete Tag", () => {
  // Given I navigate to page "http://localhost:3001/ghost/#/signin"
  // And I login with "<USER_EMAIL>" and "<USER_PASSWORD>"
  // And I wait
  // When I click on the Tags tab
  // And I wait
  // And I select a random Tag
  // And I wait
  // And I click on Delete tag botton
  // And I wait
  // Then I navigate to page "http://localhost:3001/ghost/#/tags"
  // And I wait
  // And I shouldn't see the deleted tag

  it("Delete tag", () => {
    let signinPage = new SignInPage();
    signinPage.login(config.user, config.password);
    let tag = new TagPage();
    tag.deleteTag();
    cy.wait(1000);
    takeCypressScreenshot("Delete Tag");
  });
});
