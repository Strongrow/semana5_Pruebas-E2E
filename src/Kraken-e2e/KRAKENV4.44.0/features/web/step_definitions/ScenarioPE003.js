const { Given, When, Then } = require("@cucumber/cucumber");
const { login } = require("./page_objects/login_page.js");
const { clickOnPostsTab } = require("./page_objects/menu_dashboard.js");
const {
  createPost,
  checkNewPostEdited,
} = require("./page_objects/post_details.js");
const { clickOnNewPost } = require("./page_objects/post_list.js");
const { takeKrakenScreenshot } = require("./utils/takeScreenShot.js");

Given(
  "I login with {kraken-string} and {kraken-string} - Scenario PE003",
  async function (email, password) {
    await login(this.driver, email, password);
    await takeKrakenScreenshot(this.driver, "ScenarioPE003", "login");
  }
);

When("I click on the Posts tab - Scenario PE003", async function () {
  await clickOnPostsTab(this.driver);
  await takeKrakenScreenshot(this.driver, "ScenarioPE003", "clickOnPostsTab");
});

When("I click on 'New Post' Button", async function () {
  await clickOnNewPost(this.driver);
  await takeKrakenScreenshot(this.driver, "ScenarioPE003", "clickOnNewPost");
});

When(
  "I create a new post with {kraken-string}, {kraken-string} and tag {kraken-string}",
  async function (title, content, tagname) {
    await createPost(this.driver, title, content, { tagname });
    await takeKrakenScreenshot(this.driver, "ScenarioPE003", "createPost");
  }
);

Then(
  "I should see the new post edited called {kraken-string}",
  async function (page_title) {
    await checkNewPostEdited(this.driver, page_title);
    await takeKrakenScreenshot(
      this.driver,
      "ScenarioPE003",
      "checkNewPostEdited"
    );
  }
);
