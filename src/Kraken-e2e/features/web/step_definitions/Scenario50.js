const { Given, When, Then } = require("@cucumber/cucumber");
const { login } = require("./page_objects/login_page.js");
const {
  clickSettingsPublication,
  clickCardPublication,
  cardPublication,
  checkSameSite,
  cardPublicationEmpty,
} = require("./page_objects/settings.js");
const { takeKrakenScreenshot } = require("./utils/takeScreenShot.js");
const { clickOnSettings } = require("./page_objects/menu_dashboard.js");

Given(
  "I login with {kraken-string} and {kraken-string} - Scenario 50",
  async function (email, password) {
    await login(this.driver, email, password);
    await takeKrakenScreenshot(this.driver, "Scenario50", "login");
  }
);

When("I click on settings Tab - Scenario 50", async function () {
  await clickOnSettings(this.driver);
  await takeKrakenScreenshot(this.driver, "Scenario50", "clickOnSettings");
});

When(
  "I click on settings Publication Language - Scenario 50",
  async function () {
    await clickSettingsPublication(this.driver);
    await takeKrakenScreenshot(this.driver, "Scenario50", "clickSettings");
  }
);

When(
  "I click on card settings Publication Language - Scenario 50",
  async function () {
    await clickCardPublication(this.driver);
    await takeKrakenScreenshot(this.driver, "Scenario50", "clickSettingsTitle");
  }
);

When("I change the site Language - Scenario 50", async function () {
  await cardPublicationEmpty(this.driver);
  await takeKrakenScreenshot(this.driver, "Scenario47", "createPost");
});

Then("I should see that site Language saved - Scenario 50", async function () {
  await checkSameSite(this.driver);
  await takeKrakenScreenshot(
    this.driver,
    "Scenario1",
    "checkSuccesfulUserLogin"
  );
});
