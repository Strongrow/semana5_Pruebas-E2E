const { Given, When, Then } = require("@cucumber/cucumber");
const { login } = require("./page_objects/login_page.js");
const { clickOnPostsTab } = require("./page_objects/menu_dashboard.js");
const {
  createPostDraft,
  checkNewDraftPost,
} = require("./page_objects/post_details.js");
const { clickOnNewPost } = require("./page_objects/post_list.js");
const { takeKrakenScreenshot } = require("./utils/takeScreenShot.js");

Given(
  "I login with {kraken-string} and {kraken-string} - Scenario PE006",
  async function (email, password) {
    await login(this.driver, email, password);
    await takeKrakenScreenshot(this.driver, "ScenarioPE006", "login");
  }
);

When("I click on the Posts tab - Scenario PE006", async function () {
  await clickOnPostsTab(this.driver);
  await takeKrakenScreenshot(this.driver, "ScenarioPE006", "clickOnPostsTab");
});

When("I click on 'New Post' Button - Scenario PE006", async function () {
  await clickOnNewPost(this.driver);
  await takeKrakenScreenshot(this.driver, "ScenarioPE006", "clickOnNewPost");
});

When(
  "I create a new post with {kraken-string} and {kraken-string}",
  async function (title, content) {
    await createPostDraft(this.driver, title, content);
    await takeKrakenScreenshot(this.driver, "ScenarioPE006", "createPost");
  }
);

Then(
  "I should see the new post edited called {kraken-string} and {string}",
  async function (page_title, status) {
    await checkNewDraftPost(this.driver, page_title, status);
    await takeKrakenScreenshot(
      this.driver,
      "ScenarioPE003",
      "checkNewPostEdited"
    );
  }
);
