const { Given, When, Then } = require("@cucumber/cucumber");
const { login } = require("./page_objects/login_page.js");
const {
  clickSettingsPublication,
  clickCardPublication,
  cardPublication,
  checkSameSite,
} = require("./page_objects/settings.js");
const { takeKrakenScreenshot } = require("./utils/takeScreenShot.js");
const { clickOnSettings } = require("./page_objects/menu_dashboard.js");

Given(
  "I login with {kraken-string} and {kraken-string} - Scenario 49",
  async function (email, password) {
    await login(this.driver, email, password);
    await takeKrakenScreenshot(this.driver, "Scenario49", "login");
  }
);

When("I click on settings Tab - Scenario 49", async function () {
  await clickOnSettings(this.driver);
  await takeKrakenScreenshot(this.driver, "Scenario49", "clickOnSettings");
});

When(
  "I click on settings Publication Language - Scenario 49",
  async function () {
    await clickSettingsPublication(this.driver);
    await takeKrakenScreenshot(this.driver, "Scenario49", "clickSettings");
  }
);

When(
  "I click on card settings Publication Language - Scenario 49",
  async function () {
    await clickCardPublication(this.driver);
    await takeKrakenScreenshot(this.driver, "Scenario49", "clickSettingsTitle");
  }
);

When("I change the site Language - Scenario 49", async function () {
  await cardPublication(this.driver);
  await takeKrakenScreenshot(this.driver, "Scenario47", "createPost");
});

Then("I should see that site Language saved - Scenario 49", async function () {
  await checkSameSite(this.driver);
  await takeKrakenScreenshot(
    this.driver,
    "Scenario1",
    "checkSuccesfulUserLogin"
  );
});
