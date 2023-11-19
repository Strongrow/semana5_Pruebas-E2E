const expect = require("chai").expect;

const clickSaveOrUpdateButton = async (driver) => {
  let saveButton = await driver.$(
    "button[class$='gh-btn gh-btn-blue gh-btn-icon ember-view']"
  );
  await saveButton.click();
};

const clickOnSettingsButton = async (driver) => {
  let settingsButton = await driver.$("button[title$='Settings']");
  await settingsButton.click();
};

const clickOnCloseSettings = async (driver) => {
  let settingsButton = await driver.$("button[aria-label$='Close']");
  await settingsButton.click();
};

const uploadAnImage = async (driver, image_path) => {
  let imageSelector = await driver.$("input[class$='x-file--input']");
  await imageSelector.setValue(image_path);
};

const publishItem = async (driver) => {
  let publishTrigger = await driver.$(
    "div.ember-view.ember-basic-dropdown-trigger.gh-btn.gh-btn-editor.gh-publishmenu-trigger"
  );
  await publishTrigger.click();

  let publishButton = await driver.$(
    "button.gh-btn.gh-btn-black.gh-publishmenu-button.gh-btn-icon.ember-view"
  );
  await publishButton.click();

  let publishButtonConfirm = await driver.$(
    "button.gh-btn.gh-btn-black.gh-btn-icon.ember-view"
  );
  await publishButtonConfirm.click();
};

const checkNotFound = async function (driver) {
  let notFoundMessage = await driver.$(".error-code-size");
  expect(await notFoundMessage.getText()).to.equal("404");
};

const checkPageFound = async function (driver) {
  let body = await driver.$("body");
  expect(await body.getText()).not.contains("404");
};

const typeEscape = async function (driver) {
  let body = await driver.$("body");
  await body.click();
  await driver.keys(["Escape"]);
};

module.exports = {
  clickSaveOrUpdateButton,
  clickOnSettingsButton,
  clickOnCloseSettings,
  uploadAnImage,
  typeEscape,
  publishItem,
  checkNotFound,
  checkPageFound,
};
