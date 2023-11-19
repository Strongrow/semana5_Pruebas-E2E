const { Given, When, Then } = require("@cucumber/cucumber");
const { login } = require("./page_objects/login_page.js");
const { clickOnPostsTab } = require("./page_objects/menu_dashboard.js");
const { selectRandomPost } = require("./page_objects/post_list.js");
const {
  fillEditPost,
  checkNewPostEdited,
} = require("./page_objects/post_details.js");
const { takeKrakenScreenshot } = require("./utils/takeScreenShot.js");

Given(
  "I login with {kraken-string} and {kraken-string} - Scenario PE005",
  async function (email, password) {
    await login(this.driver, email, password);
    await takeKrakenScreenshot(this.driver, "ScenarioPE005", "login");
  }
);

When("I click on the Posts tab - Scenario PE005", async function () {
  await clickOnPostsTab(this.driver);
  await takeKrakenScreenshot(this.driver, "ScenarioPE005", "clickOnPostsTab");
});

When("I select a random post", async function () {
  await selectRandomPost(this.driver);
  await takeKrakenScreenshot(this.driver, "ScenarioPE005", "selectRandomPost");
});

When(
  "I edit the selected post with title {kraken-string}",
  async function (title) {
    await fillEditPost(this.driver, title);
    await takeKrakenScreenshot(this.driver, "ScenarioPE005", "fillEditPost");
  }
);

Then(
  "I should see the new post edited called {kraken-string} - Scenario PE005",
  async function (page_title) {
    await checkNewPostEdited(this.driver, page_title);
    await takeKrakenScreenshot(
      this.driver,
      "ScenarioPE005",
      "checkNewPostEdited"
    );
  }
);
