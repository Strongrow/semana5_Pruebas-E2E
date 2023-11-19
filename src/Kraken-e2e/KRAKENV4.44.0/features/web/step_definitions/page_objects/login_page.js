const { expect } = require("chai");
const { until, executeScript } = require("selenium-webdriver");

const login = async function (driver, email, password) {
  let emailElement = await driver.$("#ember7");
  await emailElement.setValue(email);
  let passwordElement = await driver.$("#ember9");
  await passwordElement.setValue(password);
  let loginButton = await driver.$("#ember11");
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
