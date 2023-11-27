const { Given, When, Then } = require("@cucumber/cucumber");
const {
  login,
  checkSuccesfulUserLogin,
  checkIncorrectPassword,
} = require("./page_objects/login_page.js");
const {
  clickSettingsTitle,
  cardTitle22Caracters,
  clickCardTitle,
  checkSameTitle,
  clickSettingsTimeZone,
  clickCardTimeZone,
  selectRandomTimeZone,
  selectListTimeZone,
  checkTimeZoneSelected,
} = require("./page_objects/settings.js");
const { takeKrakenScreenshot } = require("./utils/takeScreenShot.js");
const { clickOnSettings } = require("./page_objects/menu_dashboard.js");

Given(
  "I login with {kraken-string} and {kraken-string} - Scenario 48",
  async function (email, password) {
    await login(this.driver, email, password);
    await takeKrakenScreenshot(this.driver, "Scenario48", "login");
  }
);

When("I click on settings Tab - Scenario 48", async function () {
  await clickOnSettings(this.driver);
  await takeKrakenScreenshot(this.driver, "Scenario48", "clickOnSettings");
});

When("I click on settings Site timezone - Scenario 48", async function () {
  await clickSettingsTimeZone(this.driver);
  await takeKrakenScreenshot(this.driver, "Scenario48", "clickSettings");
});

When("I click on card settings Site timezone - Scenario 48", async function () {
  await clickCardTimeZone(this.driver);
  await takeKrakenScreenshot(this.driver, "Scenario47", "clickSettingsTitle");
});

When("I Select de List time zone - Scenario 48", async function () {
  await selectListTimeZone(this.driver);
  await takeKrakenScreenshot(this.driver, "Scenario48", "clickSettingsTitle");
});

Then(
  "I should see the time for the selected time zone - Scenario 48",
  async function () {
    await checkTimeZoneSelected(this.driver);
    await takeKrakenScreenshot(
      this.driver,
      "Scenario48",
      "checkTimeZoneSelected"
    );
  }
);
