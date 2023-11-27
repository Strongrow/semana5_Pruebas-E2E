const { Given, When, Then } = require("@cucumber/cucumber");
const { login } = require("./page_objects/login_page.js");
const {
  clickSettingsPublication,
  clickCardPublication,
  cardPublication,
  checkSameSite,
  cardPublicationEmpty,
  clickSettingsStaff,
  clickCardStaff,
  cardInvitePeople,
  checkSameMessage,
} = require("./page_objects/settings.js");
const { takeKrakenScreenshot } = require("./utils/takeScreenShot.js");
const { clickOnSettings } = require("./page_objects/menu_dashboard.js");

Given(
  "I login with {kraken-string} and {kraken-string} - Scenario 51",
  async function (email, password) {
    await login(this.driver, email, password);
    await takeKrakenScreenshot(this.driver, "Scenario51", "login");
  }
);

When("I click on settings Tab - Scenario 51", async function () {
  await clickOnSettings(this.driver);
  await takeKrakenScreenshot(this.driver, "Scenario51", "clickOnSettings");
});

When("I click on settings Staff - Scenario 51", async function () {
  await clickSettingsStaff(this.driver);
  await takeKrakenScreenshot(this.driver, "Scenario51", "clickSettings");
});

When("I click on card settings Staff - Scenario 51", async function () {
  await clickCardStaff(this.driver);
  await takeKrakenScreenshot(this.driver, "Scenario51", "clickSettingsTitle");
});

When(
  "I Invite new people with {kraken-string} - Scenario 51",
  async function (invemail) {
    await cardInvitePeople(this.driver, invemail);
    await takeKrakenScreenshot(this.driver, "Scenario51", "createPost");
  }
);

Then(
  "I should see that person wasn't invited - Scenario 51",
  async function () {
    await checkSameMessage(this.driver);
    await takeKrakenScreenshot(
      this.driver,
      "Scenario51",
      "checkSuccesfulUserLogin"
    );
  }
);
