const { Given, When, Then } = require("@cucumber/cucumber");
const { By } = require("selenium-webdriver");

When("I enter the email {string}", async function (email) {
  let element = await this.driver.$("#identification");
  return await element.setValue(email);
});

When("I enter the password {string}", async function (password) {
  let element = await this.driver.$("#password");
  return await element.setValue(password);
});


When("I push click in sing in button", async function () {
  let element = await this.driver.$("[data-test-button='sign-in']");
  return await element.click();
});

When("I push click in menu tags", async function () {
    let element = await this.driver.$("[href='#/tags/']");
    return await element.click();
  });
  

  When("I push click in new tag button", async function () {
    let element = await this.driver.$("[href='#/tags/new/']");
    return await element.click();
  });

  When("I enter the name of tag {string}", async function (nameTag) {
    let element = await this.driver.$("input#tag-name");
    return await element.setValue(nameTag);
  });

  When("I enter the color of tag {string}", async function (colorTag) {
    let element = await this.driver.$("[data-test-input='accentColor']");
    return await element.setValue(colorTag);
  });

  When("I enter the description of tag {string}", async function (descriptionTag) {
    let element = await this.driver.$("[data-test-input='tag-description']");
    return await element.setValue(descriptionTag);
  });

  
  When("I push de button save", async function () {
    let element = await this.driver.$("[data-test-button='save']");
    return await element.click();
  });

  When("I go to tags list", async function () {
    let element = await this.driver.$("[href='#/tags/']");
    return await element.click();
  });

  
