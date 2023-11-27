const { Given, When, Then } = require("@cucumber/cucumber");
const { login } = require("./page_objects/login_page.js");
const { clickOnPostsTab } = require("./page_objects/menu_dashboard.js");
const {
  createPost,
  addImage,
  checkPostUpdated,
} = require("./page_objects/post_details.js");
const { clickOnNewPost } = require("./page_objects/post_list.js");
const {
  clickOnCloseSettings,
  publishItem,
} = require("./page_objects/mutual.js");
const { takeKrakenScreenshot } = require("./utils/takeScreenShot.js");

Given(
  "I login with {kraken-string} and {kraken-string} - Scenario PE007",
  async function (email, password) {
    await login(this.driver, email, password);
    await takeKrakenScreenshot(this.driver, "ScenarioPE007", "login");
  }
);

When("I click on the Posts tab - Scenario PE007", async function () {
  await clickOnPostsTab(this.driver);
  await takeKrakenScreenshot(this.driver, "ScenarioPE007", "clickOnPostsTab");
});

When("I click on New Post Button", async function () {
  await clickOnNewPost(this.driver);
  await takeKrakenScreenshot(this.driver, "ScenarioPE007", "clickOnNewPost");
});

When(
  "I create a post with {kraken-string} and {kraken-string}",
  async function (title, content) {
    await createPost(this.driver, title, content);
    await takeKrakenScreenshot(this.driver, "ScenarioPE007", "createPost");
  }
);

When("I add an image with path {kraken-string}", async function (image_path) {
  await addImage(this.driver, image_path);
  await takeKrakenScreenshot(this.driver, "ScenarioPE007", "addImage");
});

When("I click update on the published post", async function () {
  await publishItem(this.driver);
  await takeKrakenScreenshot(this.driver, "ScenarioPE007", "publishItem");
});

Then("the post should be updated with the image", async function () {
  await checkPostUpdated(this.driver);
  await takeKrakenScreenshot(this.driver, "ScenarioPE007", "checkPostUpdated");
});
