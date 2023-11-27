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
  cardInviteWithoutPeople,
  checkEmailInvited,
} = require("./page_objects/settings.js");
const { takeKrakenScreenshot } = require("./utils/takeScreenShot.js");
const { clickOnSettings } = require("./page_objects/menu_dashboard.js");

Given(
  "I login with {kraken-string} and {kraken-string} - Scenario 52",
  async function (email, password) {
    await login(this.driver, email, password);
    await takeKrakenScreenshot(this.driver, "Scenario52", "login");
  }
);

When("I click on settings Tab - Scenario 52", async function () {
  await clickOnSettings(this.driver);
  await takeKrakenScreenshot(this.driver, "Scenario52", "clickOnSettings");
});

When("I click on settings Staff - Scenario 52", async function () {
  await clickSettingsStaff(this.driver);
  await takeKrakenScreenshot(this.driver, "Scenario52", "clickSettings");
});

When("I click on card settings Staff - Scenario 52", async function () {
  await clickCardStaff(this.driver);
  await takeKrakenScreenshot(this.driver, "Scenario52", "clickSettingsTitle");
});

When("I Invite new people - Scenario 52", async function () {
  await cardInviteWithoutPeople(this.driver);
  await takeKrakenScreenshot(this.driver, "Scenario52", "createPost");
});

Then("I should see that person invited - Scenario 52", async function () {
  await checkEmailInvited(this.driver);
  await takeKrakenScreenshot(
    this.driver,
    "Scenario52",
    "checkSuccesfulUserLogin"
  );
});
