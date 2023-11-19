import { SignInPage } from "../pages/signinPage.cy";
import config from "../assets/config.json";
import { takeCypressScreenshot } from "../utils/takeScreenshot";
import { Settingspage } from "../pages/settings-page.cy";

describe("Scenario-17 Edit Title & Description", () => {
  it("Edit Title & Description ", () => {
    let signinPage = new SignInPage();
    signinPage.login(config.user, config.password);


    let settings = new Settingspage();
    settings.editTittleSettgins();
    cy.wait(1000);
    takeCypressScreenshot("Edit title Ghost");

  });
});
