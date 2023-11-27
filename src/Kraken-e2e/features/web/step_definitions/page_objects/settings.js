const { expect } = require("chai");
const {
  fakerES,
  fakerZH_TW,
  allLocales,
  allFakers,
} = require("@faker-js/faker");

const clickSettingsTitle = async function (driver) {
  let titleButton = await driver.$(
    "a[class='w-100 flex h-8 cursor-pointer items-center rounded-md px-2 py-1 text-left text-sm transition-all hover:bg-grey-100 focus:bg-grey-100 dark:text-grey-300 dark:hover:bg-grey-925 dark:focus:bg-grey-900 bg-grey-200 dark:bg-grey-900']"
  );
  await titleButton.click();
};

const clickSettingsTimeZone = async function (driver) {
  let timeZoneButton = await driver.$("#timezone");
  await timeZoneButton.click();
};

const clickSettingsPublication = async function (driver) {
  let publicationButton = await driver.$(
    "#publication-language.flex.h-8.cursor-pointer.items-center.rounded-md.px-2.py-1.text-left.text-sm"
  );
  await publicationButton.click();
};
const clickSettingsStaff = async function (driver) {
  let publicationButton = await driver.$("a#staff");
  await publicationButton.click();
};

const clickCardTitle = async function (driver) {
  let titleEditButton = await driver.$(
    "button[class='cursor-pointer  text-green hover:text-green-400 inline-flex items-center justify-center whitespace-nowrap rounded text-sm transition font-bold -m-1 p-1']"
  );
  await titleEditButton.click();
};

const clickCardTimeZone = async function (driver) {
  let timeZoneEditButton = await driver.$(
    "//div[@data-testid='timezone']//button[span[text()='Edit']]"
  );
  await timeZoneEditButton.click();
};

const clickCardPublication = async function (driver) {
  let timeZoneEditButton = await driver.$(
    "//div[@data-testid='publication-language']//button[span[text()='Edit']]"
  );
  await timeZoneEditButton.click();
};

const clickCardStaff = async function (driver) {
  let selector = '[data-testid="users"] button';

  // Esperar a que los botones estén presentes
  await driver.waitUntil(
    async () => {
      const elementos = await driver.$$(selector);
      return elementos.length > 0;
    },
    {
      timeout: 5000,
      timeoutMsg:
        'Botones dentro de [data-testid="users"] no fueron encontrados en el tiempo esperado',
    }
  );

  // Localizar todos los botones y filtrar por el texto
  const botones = await driver.$$(selector);
  for (let boton of botones) {
    let textoBoton = await boton.getText();
    if (textoBoton.includes("Invite people")) {
      await boton.click();
      return; // Sale de la función después de hacer clic en el botón correcto
    }
  }

  throw new Error('El botón "Invite people" no fue encontrado.');
};

const selectListTimeZone = async function (driver) {
  let dropdownInput = await driver.$("div.css-cp01gg-control");
  await dropdownInput.click();
  let activeDescendantValue = await dropdownInput.getAttribute(
    "aria-activedescendant"
  );
  console.log(activeDescendantValue);
  const maxOptions = 65; // Número máximo de opciones
  let randomIndex = Math.floor(Math.random() * (maxOptions + 1));

  let randomOptionSelector = `react-select-2-option-${randomIndex}`;
  let randomOption = await driver.$(`#${randomOptionSelector}`);
  /*   await randomOption.scrollIntoView(); */
  await randomOption.waitForDisplayed();
  await randomOption.click();

  let saveButton = await driver.$("button.text-green.inline-flex.items-center");
  await saveButton.waitForDisplayed();

  // Hacer clic en el botón
  await saveButton.click();
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

const cardPublication = async function (driver) {
  let randomSiteLen = fakerES.string.alpha(2);

  console.log(randomSiteLen);

  let publicationElement = await driver.$("input[placeholder='Site language']");

  await publicationElement.setValue(randomSiteLen);

  let saveCardPublication = await driver.$(
    "[data-testid='publication-language'] button.text-green"
  );
  await saveCardPublication.click();
};

const cardPublicationEmpty = async function (driver) {
  const randomSiteLen = "";

  console.log(randomSiteLen);

  let publicationElement = await driver.$("input[placeholder='Site language']");

  await publicationElement.doubleClick(); // Selecciona todo el texto (alternativa a CTRL + A)
  await publicationElement.keys(["Backspace"]);
  /* await publicationElement.setValue(randomSiteLen); */

  let saveCardPublication = await driver.$(
    "[data-testid='publication-language'] button.text-green"
  );
  await saveCardPublication.click();
};

const cardInvitePeople = async function (driver, email) {
  let inviteElement = await driver.$("input[placeholder='jamie@example.com']");

  await inviteElement.click(); // Selecciona todo el texto (alternativa a CTRL + A)
  await inviteElement.setValue(email);
  /* await publicationElement.setValue(randomSiteLen); */

  let sendInvitation = "button.cursor-pointer.bg-black.text-white";

  // Esperar a que los botones estén presentes
  await driver.waitUntil(
    async () => {
      const botones = await driver.$$(sendInvitation);
      return botones.length > 0;
    },
    {
      timeout: 5000,
      timeoutMsg: "El botón no fue encontrado en el tiempo esperado",
    }
  );

  // Localizar todos los botones y filtrar por el texto
  const botones = await driver.$$(sendInvitation);
  for (let boton of botones) {
    let textoBoton = await boton.getText();
    if (textoBoton.includes("Send invitation now")) {
      await boton.click();
      break; // Rompe el bucle una vez que se encuentra y hace clic en el botón correcto
    }
  }
};

const cardInviteWithoutPeople = async function (driver) {
  let inviteElement = await driver.$("input[placeholder='jamie@example.com']");

  await inviteElement.click();
  let email = allFakers.es.internet.email();

  // Selecciona todo el texto (alternativa a CTRL + A)
  await inviteElement.setValue(email);
  /* await publicationElement.setValue(randomSiteLen); */

  let sendInvitation = "button.cursor-pointer.bg-black.text-white";

  // Esperar a que los botones estén presentes
  await driver.waitUntil(
    async () => {
      const botones = await driver.$$(sendInvitation);
      return botones.length > 0;
    },
    {
      timeout: 5000,
      timeoutMsg: "El botón no fue encontrado en el tiempo esperado",
    }
  );

  // Localizar todos los botones y filtrar por el texto
  const botones = await driver.$$(sendInvitation);
  for (let boton of botones) {
    let textoBoton = await boton.getText();
    if (textoBoton.includes("Send invitation now")) {
      await boton.click();
      break; // Rompe el bucle una vez que se encuentra y hace clic en el botón correcto
    }
  }
  return email;
};

const cardTitle350Caracters = async function (driver) {
  let randomTitle = fakerES.string.alpha(350);
  let randomDescription = fakerES.string.alpha(350);
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
const checkSameSite = async function (driver) {
  let siteCheck = await driver.$(
    "[data-testid='publication-language'] button.text-green"
  );
  let text = await siteCheck.getText();

  if (text === "Edit") {
    console.log("Los textos son iguales.");
    return true;
  } else {
    console.log("Los textos son diferentes.");
    return false;
  }
};

const checkSameMessage = async function (driver) {
  let siteCheck = await driver.$(
    ".mt-1.inline-block.text-xs.text-red.dark\\:text-red-500.order-3"
  );
  let text = await siteCheck.getText();

  if (text === "A user with that email address was already invited.") {
    console.log("Los textos son iguales.");
    return true;
  } else {
    console.log("Los textos son diferentes.");
    return false;
  }
};
const checkEmailInvited = async function (driver) {
  const email = console.log(email);
  let siteCheck = await driver.$("#users-invited");
  await siteCheck.click();

  if (text === "A user with that email address was already invited.") {
    console.log("Los textos son iguales.");
    return true;
  } else {
    console.log("Los textos son diferentes.");
    return false;
  }
};

const checkNotSaveTitle = async function (driver) {
  let isEditButtonVisible;
  try {
    let titleEditButton = await driver.$(
      "//h5[text()='Title & description']/ancestor::div[contains(@class, 'setting-group')]//button[span[text()='Edit']]"
    );
    isEditButtonVisible = await titleEditButton.isDisplayed();
  } catch (error) {
    // Si el botón no se encuentra, es posible que obtengas un error
    isEditButtonVisible = false;
  }

  let saveButton = await driver.$("//button[span[text()='Save']]"); // Reemplaza con el selector correcto
  let isSaveButtonVisible = await saveButton.isDisplayed();

  expect(isSaveButtonVisible).to.be.true;

  expect(isEditButtonVisible).to.be.false;
};

const checkTimeZoneSelected = async function (driver) {
  const maxOptions = 65; // Número máximo de opciones
  let textosCapturados = []; // Array para almacenar los textos capturados

  for (let i = 0; i < 5; i++) {
    // Ejemplo: Iterar 5 veces
    let dropdownInput = await driver.$("div.css-cp01gg-control");
    await dropdownInput.click();

    let randomIndex = Math.floor(Math.random() * maxOptions);
    let randomOptionSelector = `react-select-2-option-${randomIndex}`;
    let randomOption = await driver.$(`#${randomOptionSelector}`);
    await randomOption.waitForDisplayed();
    await randomOption.click();

    let saveButton = await driver.$(
      "button.text-green.inline-flex.items-center"
    );
    await saveButton.waitForDisplayed();
    await saveButton.click();

    // Espera para asegurar que el texto se ha actualizado
    await driver.pause(1000); // Ajusta el tiempo de espera según sea necesario

    // Captura el texto del elemento
    let elementoTexto = await driver.$("//div[contains(text(), 'GMT')]");
    let textoElemento = await elementoTexto.getText();

    console.log(textoElemento);

    // Verificar si el texto es diferente y almacenarlo
    if (!textosCapturados.includes(textoElemento)) {
      textosCapturados.push(textoElemento);
    }
  }

  return textosCapturados;
};

module.exports = {
  clickSettingsTitle,
  clickCardTitle,
  cardTitle22Caracters,
  checkSameTitle,
  cardTitle350Caracters,
  checkNotSaveTitle,
  clickSettingsTimeZone,
  clickCardTimeZone,
  selectListTimeZone,
  checkTimeZoneSelected,
  clickCardPublication,
  clickSettingsPublication,
  cardPublication,
  checkSameSite,
  cardPublicationEmpty,
  clickSettingsStaff,
  clickCardStaff,
  cardInvitePeople,
  checkSameMessage,
  cardInviteWithoutPeople,
  checkEmailInvited,
};
