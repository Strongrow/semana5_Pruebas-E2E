const { Given, When, Then } = require("@cucumber/cucumber");

const { login } = require("./page_objects/login_page.js");
const { clickOnPostsTab } = require("./page_objects/menu_dashboard.js");
const {
  clickOnSettingsButton,
  typeEscape,
  publishItem,
} = require("./page_objects/mutual.js");
const { clickOnNewPost } = require("./page_objects/post_list.js");
const {
  assignMultipleTagsToPost,
  checkIfPostsExists,
  fillPostName,
} = require("./page_objects/post_details.js");
const { takeKrakenScreenshot } = require("./utils/takeScreenShot.js");

Given(
  "I login with {kraken-string} and {kraken-string} - Scenario PE024",
  async function (email, password) {
    await login(this.driver, email, password);
    await takeKrakenScreenshot(this.driver, "ScenarioPE024", "login");
  }
);

When("I click on the Posts tab - Scenario PE024", async function () {
  await clickOnPostsTab(this.driver);
  await takeKrakenScreenshot(this.driver, "ScenarioPE024", "goToPosts");
});

When("I create a new post - Scenario PE024", async function () {
  await clickOnNewPost(this.driver);
  await takeKrakenScreenshot(this.driver, "ScenarioPE024", "createPost");
});

When("I fill post with name {kraken-string}", async function (postName) {
  await fillPostName(this.driver, postName);
  await takeKrakenScreenshot(this.driver, "ScenarioPE024", "fillPost");
});

When("I click on the post settings button - Scenario PE024", async function () {
  await clickOnSettingsButton(this.driver);
  await takeKrakenScreenshot(this.driver, "ScenarioPE024", "clickPostSettings");
});

When("I assign multiple tags to the post", async function () {
  await assignMultipleTagsToPost(this.driver);
  await takeKrakenScreenshot(
    this.driver,
    "ScenarioPE024",
    "addMultipleTagsToPost"
  );
});

When("I click on close post settings - Scenario PE024", async function () {
  await typeEscape(this.driver);
  await takeKrakenScreenshot(this.driver, "ScenarioPE024", "closePostSettings");
});

When("I click update the post - Scenario PE024", async function () {
  await publishItem(this.driver);
  await takeKrakenScreenshot(
    this.driver,
    "ScenarioPE024",
    "clickPostUpdateBtn"
  );
});

Then(
  "the post should be updated with the tag slug {kraken-string} - Scenario PE024",
  async function (slug) {
    await checkIfPostsExists(this.driver, slug);
    await takeKrakenScreenshot(
      this.driver,
      "ScenarioPE024",
      "checkPostTagSlug"
    );
  }
);
