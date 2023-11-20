import { SignInPage } from "../pages/signinPage.cy";
import config from "../assets/config.json";
import { takeCypressScreenshot } from "../utils/takeScreenshot";
import { TagPage } from "../pages/tagPage.cy";

describe("Scenario-16 Delete Tag", () => {
  it("Delete tag", () => {
    let signinPage = new SignInPage();
    signinPage.login(config.user, config.password);
    let tag = new TagPage();
    tag.deleteTag()
    cy.wait(1000);
    takeCypressScreenshot("Delete Tag");

  });
});
