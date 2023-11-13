const { Given, When, Then } = require("@cucumber/cucumber");
const { By } = require("selenium-webdriver");

When("I enter Email address {string}", async function (email) {
  let element = await this.driver.$("#identification");
  return await element.setValue(email);
});

When("I enter Password {string}", async function (password) {
  let element = await this.driver.$("#password");
  return await element.setValue(password);
});

When("I click Sign in", async function () {
  let element = await this.driver.$("#ember5");
  return await element.click();
});

When("I click Members", async function () {
  let element = await this.driver.$("#ember20");
  return await element.click();
});

When("I click New member", async function () {
  let element = await this.driver.$(".ember-view.gh-btn.gh-btn-primary");
  return await element.click();
});

When("I enter Name {string}", async function (name) {
  let element = await this.driver.$("#member-name");
  return await element.setValue(name);
});

When("I enter Note {string}", async function (note) {
  let element = await this.driver.$("#member-note");
  return await element.setValue(note);
});

When("I click Save", async function () {
  let element = await this.driver.$(
    ".gh-btn.gh-btn-primary.gh-btn-icon.ember-view"
  );
  return await element.click();
});

When("I click Members in member", async function () {
  let element = await this.driver.$(".active.ember-view");
  return await element.click();
});

When("I click Setting", async function () {
  let element = await this.driver.$(
    ".gh-btn.gh-btn-icon.icon-only.gh-btn-action-icon.open.ember-view"
  );
  return await element.click();
});

When("I click Setting delete", async function () {
  let element = await this.driver.$("[data-test-button='delete-member']");
  return await element.click();
});

When("I click delete", async function () {
  let element = await this.driver.$(
    ".gh-btn.gh-btn-red.gh-btn-icon.ember-view"
  );
  return await element.click();
});

When("I click Setting cancel", async function () {
  let element = await this.driver.$(".gh-btn");
  return await element.click();
});
