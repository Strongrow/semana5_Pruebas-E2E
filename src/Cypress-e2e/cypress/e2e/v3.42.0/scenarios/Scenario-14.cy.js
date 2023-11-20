import { SignInPage } from "../pages/signinPage.cy";
import config from "../assets/config.json";
import { takeCypressScreenshot } from "../utils/takeScreenshot";
import { TagPage } from "../pages/tagPage.cy";

describe("Scenario-14 Creacion de Tag", () => {
  // Given I navigate to page "http://localhost:3001/ghost/#/signin"
  // And I login with "<USER_EMAIL>" and "<USER_PASSWORD>"
  // And I wait
  // When I click on the Tags tab
  // And create a New Tag
  // And I wait
  // And I create a new Tag with "<POST_TITLE>", "<POST_CONTENT>"
  // And I wait
  // And I click on Save botton
  // And I wait
  // Then I navigate to page "http://localhost:3001/ghost/#/tags"
  // And I wait
  // And I should see the new Tag edited called "<POST_TITLE>"

  it("Create new tag", () => {
    let signinPage = new SignInPage();
    signinPage.login(config.user, config.password);
    let tag = new TagPage();
    tag.createNewTag(config.new_tag, config.slug_tag, config.content_page);
    cy.wait(1000);
    takeCypressScreenshot("CreateNewTag");
  });
});
