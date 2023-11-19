const { Given, When, Then } = require("@cucumber/cucumber");
const {
  login,
  checkSuccesfulUserLogin,
  checkIncorrectPassword,
} = require("./page_objects/login_page.js");
const { takeKrakenScreenshot } = require("./utils/takeScreenShot.js");

Given(
  "I login with {kraken-string} and {kraken-string} - Scenario PE001",
  async function (email, password) {
    await login(this.driver, email, password);
    await takeKrakenScreenshot(this.driver, "Scenario1", "login");
  }
);

Then(
  "I should be redirected to the user dashboard {kraken-string}",
  async function (expectedUrl) {
    await checkSuccesfulUserLogin(this.driver, expectedUrl);
    await takeKrakenScreenshot(
      this.driver,
      "Scenario1",
      "checkSuccesfulUserLogin"
    );
  }
);
