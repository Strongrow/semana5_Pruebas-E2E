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

/* 
When("I click on the Posts tab - Scenario one", async function () {
  await clickOnPostsTab(this.driver);
  await takeKrakenScreenshot(this.driver, "Scenario1", "clickOnPostsTab");
});

When("I click on 'New Post' Button", async function () {
  await clickOnNewPost(this.driver);
  await takeKrakenScreenshot(this.driver, "Scenario1", "clickOnNewPost");
});

When(
  "I create a new post with {kraken-string}, {kraken-string} and tag {kraken-string}",
  async function (title, content, tagname) {
    await createPost(this.driver, title, content, { tagname });
    await takeKrakenScreenshot(this.driver, "Scenario1", "createPost");
  }
);

Then(
  "I should see the new post created called {kraken-string}",
  async function (page_title) {
    await checkNewPostEdited(this.driver, page_title);
    await takeKrakenScreenshot(this.driver, "Scenario1", "checkNewPostEdited");
  }
);
 */
