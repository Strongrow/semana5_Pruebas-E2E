const { expect } = require("chai");
const { fakerES, fakerZH_TW } = require("@faker-js/faker");

const clickSettingsTitle = async function (driver) {
  let titleButton = await driver.$(
    "a[class='w-100 flex h-8 cursor-pointer items-center rounded-md px-2 py-1 text-left text-sm transition-all hover:bg-grey-100 focus:bg-grey-100 dark:text-grey-300 dark:hover:bg-grey-925 dark:focus:bg-grey-900 bg-grey-200 dark:bg-grey-900']"
  );
  await titleButton.click();
};

const clickCardTitle = async function (driver) {
  let titleEditButton = await driver.$(
    "button[class='cursor-pointer  text-green hover:text-green-400 inline-flex items-center justify-center whitespace-nowrap rounded text-sm transition font-bold -m-1 p-1']"
  );
  await titleEditButton.click();
};

const cardTitle22Caracters = async function (driver) {
  let randomTitle = fakerES.string.alpha(22);
  let randomDescription = fakerES.string.alpha(22);
  console.log(randomTitle);
  console.log(randomDescription);

  let titleElement = await driver.$("input[placeholder='Site title']");

  await titleElement.setValue(randomTitle);

  let descriptionElement = await driver.$(
    "input[placeholder='Site description']"
  );
  await descriptionElement.setValue(randomDescription);

  let saveCardTitleDescp = await driver.$(
    "button[class='cursor-pointer  text-green hover:text-green-400 inline-flex items-center justify-center whitespace-nowrap rounded text-sm transition font-bold -m-1 p-1']"
  );
  await saveCardTitleDescp.click();
};

const checkSameTitle = async function (driver, expectedUrl) {
  let titleEditButton = await driver.$("//button[span[text()='Edit']]");
  await titleEditButton.click();
  // Obtener los elementos
  let elemento1 = await driver.$("input[placeholder='Site title']").getValue();

  let cancelBotton = await driver.$("//button[span[text()='Cancel']]");
  await cancelBotton.click();

  let backDashoard = await driver.$("[data-testid='exit-settings']");
  await backDashoard.click();

  /* await driver.switchToWindow(expectedUrl); */
  let elemento2 = await driver.$(".gh-nav-menu-details-sitetitle");
  await elemento2.waitForDisplayed();
  let siteTitleText = await elemento2.getText();

  expect(elemento1).to.equal(
    siteTitleText,
    "Los textos de los elementos no son iguales"
  );
  console.log(elemento1);
  console.log(siteTitleText);
};

module.exports = {
  clickSettingsTitle,
  clickCardTitle,
  cardTitle22Caracters,
  checkSameTitle,
};
