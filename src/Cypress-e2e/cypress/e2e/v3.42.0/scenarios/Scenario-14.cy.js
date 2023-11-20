import { SignInPage } from "../pages/signinPage.cy";
import config from "../assets/config.json";
import { takeCypressScreenshot } from "../utils/takeScreenshot";
import { TagPage } from "../pages/tagPage.cy";

describe("Scenario-14 Creacion de Tag", () => {
  it("Create new tag", () => {
    let signinPage = new SignInPage();
    signinPage.login(config.user, config.password);
    let tag = new TagPage();
    tag.createNewTag(config.new_tag,config.slug_tag,config.content_page)
    cy.wait(1000);
    takeCypressScreenshot("CreateNewTag");

  });
});
