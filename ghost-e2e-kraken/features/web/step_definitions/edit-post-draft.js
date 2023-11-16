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

When("I push click in menu post", async function () {
    let element = await this.driver.$("[href='#/posts/']");
    return await element.click();
});

When("I click in edit button", async function () {
    let element = await this.driver.$("[data-test-post-id='6545db8b64420c0a1c9a51e0']");
    return await element.click();
});

When("I add text to title {string}", async function (textPost) {
    let element = await this.driver.$("[placeholder='Post title']");
    return await element.setValue(textPost);
});

When("I go to preview", async function () {
    let element = await this.driver.$("[data-test-button='publish-preview']");
    return await element.click();
});