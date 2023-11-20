import { SignInPage } from "../pages/signinPage.cy";
import config from "../assets/config.json";
import { takeCypressScreenshot } from "../utils/takeScreenshot";
import { TagPage } from "../pages/tagPage.cy";

describe("Scenario-15 Edit Tag", () => {
  it("Edit tag", () => {
    let signinPage = new SignInPage();
    signinPage.login(config.user, config.password);
    let tag = new TagPage();
    tag.edittag(config.new_tag_edit,config.slug_tag_edit,config.content_page)
    cy.wait(1000);
    takeCypressScreenshot("EditTag");

  });
});
