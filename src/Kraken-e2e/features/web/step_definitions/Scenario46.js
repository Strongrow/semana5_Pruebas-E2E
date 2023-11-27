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
} = require("./page_objects/settings.js");
const { takeKrakenScreenshot } = require("./utils/takeScreenShot.js");
const { clickOnSettings } = require("./page_objects/menu_dashboard.js");

Given(
  "I login with {kraken-string} and {kraken-string} - Scenario PE001",
  async function (email, password) {
    await login(this.driver, email, password);
    await takeKrakenScreenshot(this.driver, "Scenario1", "login");
  }
);

When("I click on settings Tab - Scenario PE001", async function () {
  await clickOnSettings(this.driver);
  await takeKrakenScreenshot(this.driver, "ScenarioPE001", "clickOnSettings");
});

When(
  "I click on settings Title&description - Scenario PE001",
  async function () {
    await clickSettingsTitle(this.driver);
    await takeKrakenScreenshot(this.driver, "ScenarioPE001", "clickSettings");
  }
);

When(
  "I click on card settings Title&description - Scenario PE001",
  async function () {
    await clickCardTitle(this.driver);
    await takeKrakenScreenshot(
      this.driver,
      "ScenarioPE001",
      "clickSettingsTitle"
    );
  }
);

When(
  "I change the Ghost Title with max 22 characters - Scenario PE001",
  async function () {
    await cardTitle22Caracters(this.driver);
    await takeKrakenScreenshot(this.driver, "ScenarioPE001", "createPost");
  }
);

Then(
  "I should see that the fields are the same {kraken-string} - Scenario PE001",
  async function (url) {
    await checkSameTitle(this.driver, url);
    await takeKrakenScreenshot(
      this.driver,
      "Scenario1",
      "checkSuccesfulUserLogin"
    );
  }
);
