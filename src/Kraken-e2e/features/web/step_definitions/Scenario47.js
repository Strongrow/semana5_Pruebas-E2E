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
  cardTitle350Caracters,
  checkNotSaveTitle,
} = require("./page_objects/settings.js");
const { takeKrakenScreenshot } = require("./utils/takeScreenShot.js");
const { clickOnSettings } = require("./page_objects/menu_dashboard.js");

Given(
  "I login with {kraken-string} and {kraken-string} - Scenario PE002",
  async function (email, password) {
    await login(this.driver, email, password);
    await takeKrakenScreenshot(this.driver, "Scenario47", "login");
  }
);

When("I click on settings Tab - Scenario PE002", async function () {
  await clickOnSettings(this.driver);
  await takeKrakenScreenshot(this.driver, "Scenario47", "clickOnSettings");
});

When(
  "I click on settings Title&description - Scenario PE002",
  async function () {
    await clickSettingsTitle(this.driver);
    await takeKrakenScreenshot(this.driver, "Scenario47", "clickSettings");
  }
);

When(
  "I click on card settings Title&description - Scenario PE002",
  async function () {
    await clickCardTitle(this.driver);
    await takeKrakenScreenshot(this.driver, "Scenario47", "clickSettingsTitle");
  }
);

When(
  "I change the Ghost Title with max 350 characters - Scenario PE002",
  async function () {
    await cardTitle350Caracters(this.driver);
    await takeKrakenScreenshot(this.driver, "Scenario47", "createPost");
  }
);

Then("I should see that the Title saved - Scenario PE002", async function () {
  await checkNotSaveTitle(this.driver);
  await takeKrakenScreenshot(
    this.driver,
    "Scenario1",
    "checkSuccesfulUserLogin"
  );
});
