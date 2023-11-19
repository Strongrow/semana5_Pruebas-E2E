const { expect } = require("chai");
const { until, executeScript } = require("selenium-webdriver");

const login = async function (driver, email, password) {
  let emailElement = await driver.$("#ember8");
  await emailElement.setValue(email);
  let passwordElement = await driver.$("#ember10");
  await passwordElement.setValue(password);
  let loginButton = await driver.$("#ember12");
  await loginButton.click();
};

const checkIncorrectPasswordEmail = async function (driver) {
  let incorrectPassword = await driver.$("p[class$='main-error']");
  expect(incorrectPassword).to.exist;
};

const checkSuccesfulUserLogin = async function (driver) {
  let urlElement = await driver.$("a[href='#/site/']");
  let isUrlElementPresent = await urlElement.isDisplayed();
  expect(isUrlElementPresent).to.be.true;
};

module.exports = {
  login,
  checkIncorrectPasswordEmail,
  checkSuccesfulUserLogin,
};
