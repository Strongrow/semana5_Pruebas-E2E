const { Given, When, Then } = require("@cucumber/cucumber");

When("I enter Email in new member {string}", async function (memberEmail) {
  let element = await this.driver.$("#member-email");
  return await element.setValue(memberEmail);
});
When("I enter to edit the email {string}", async function (memberEmail) {
  let element = await this.driver.$("#member-email");
  return await element.setValue(memberEmail);
});
