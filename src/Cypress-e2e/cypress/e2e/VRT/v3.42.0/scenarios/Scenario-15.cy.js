import { SignInPage } from "../pages/signinPage.cy";
import config from "../assets/config.json";
import { takeCypressScreenshot } from "../utils/takeScreenshot";
import { TagPage } from "../pages/tagPage.cy";

describe("Scenario-15 Edit Tag", () => {
  // Given I navigate to page "http://localhost:3001/ghost/#/signin"
  // And I login with "<USER_EMAIL>" and "<USER_PASSWORD>"
  // And I wait
  // When I click on the Tags tab
  // And I wait
  // And I select a random Tag
  // And I wait
  // And I edit the selected Tag with title "<POST_CHANGE_TITLE>"
  // Then I navigate to page "http://localhost:3001/ghost/#/tags"
  // And I wait
  // And I should see the new Tag edited called "<POST_TITLE>"
  it("Edit tag", () => {
    let signinPage = new SignInPage();
    signinPage.login(config.user, config.password);
    let tag = new TagPage();
    tag.edittag(config.new_tag_edit, config.slug_tag_edit, config.content_page);
    cy.wait(1000);
    takeCypressScreenshot("EditTag");
  });
});
