const { expect } = require("chai");
const { until, executeScript } = require("selenium-webdriver");

const login = async function (driver, email, password) {
  let emailElement = await driver.$("[class$='gh-input email']");
  await emailElement.setValue(email);
  let passwordElement = await driver.$("#password");
  await passwordElement.setValue(password);
  let loginButton = await driver.$("#ember5");
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
