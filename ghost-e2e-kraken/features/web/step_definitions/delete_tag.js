const { Given, When, Then } = require("@cucumber/cucumber");
const { By } = require("selenium-webdriver");

When("Enter the email {string}", async function (email) {
    let element = await this.driver.$("#identification");
    return await element.setValue(email);
});

When("Enter the password {string}", async function (password) {
    let element = await this.driver.$("#password");
    return await element.setValue(password);
});


When("Push click in sing in button", async function () {
    let element = await this.driver.$("[data-test-button='sign-in']");
    return await element.click();
});

When("Push click in menu tags", async function () {
    let element = await this.driver.$("[href='#/tags/']");
    return await element.click();
});


When("I push click in tag list", async function () {
    let element = await this.driver.$("[href='#/tags/nuevo-tag-3/']");
    return await element.click();
});

When("I push click in delete button", async function () {
    let element = await this.driver.$("[data-test-button='delete-tag']");
    return await element.click();
});

When("I click in confirm pop-up", async function () {
    let element = await this.driver.$("[data-test-button='confirm']");
    return await element.click();
});

When("I go to the tags", async function () {
    let element = await this.driver.$("[href='#/tags/']");
    return await element.click();
});

