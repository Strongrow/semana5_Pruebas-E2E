const { Given, When, Then } = require("@cucumber/cucumber");
const {
  login,
  checkIncorrectPasswordEmail,
} = require("./page_objects/login_page.js");
const { takeKrakenScreenshot } = require("./utils/takeScreenShot.js");

Given(
  /I login with (.+) and (.+) - Scenario PE002/,
  async function (email, password) {
    await login(this.driver, email, password);
    await takeKrakenScreenshot(this.driver, "Scenario1", "login");
  }
);

Then("I should be genereted error in the email", async function () {
  await checkIncorrectPasswordEmail(this.driver);
  await takeKrakenScreenshot(
    this.driver,
    "ScenarioPE002",
    "checkIncorrectPasswordEmail"
  );
});
