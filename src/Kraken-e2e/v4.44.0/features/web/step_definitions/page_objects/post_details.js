const expect = require("chai").expect;

const assignTagToPost = async function (driver, tagname) {
  let tagsField = await driver
    .$("#tag-input")
    .$("input[class$='ember-power-select-trigger-multiple-input']");
  await tagsField.setValue(tagname);
  await driver.keys("Enter");
};

const typeAndEnter = async function (driver, element, text) {
  await element.setValue(text);
  await driver.keys("Enter");
};

const assignMultipleTagsToPost = async function (driver) {
  const tagsField = await driver
    .$("#tag-input")
    .$("input[class$='ember-power-select-trigger-multiple-input']");
  const tags = ["tag1", "tag2", "tag3"];
  for (const tag of tags) {
    await typeAndEnter(driver, tagsField, tag);
  }
};

const checkIfPostsExists = async function (driver) {
  let postTitle = await driver.$("h3[class$='gh-content-entry-title']");
  expect(postTitle).to.exist;
};

const fillEditPost = async function (driver, title) {
  let titlePost = await driver.$("textarea[placeholder='Post title']");
  await titlePost.setValue(title);

  let publishTrigger = await driver.$(
    "div.ember-view.ember-basic-dropdown-trigger.gh-btn.gh-btn-editor.gh-publishmenu-trigger"
  );
  await publishTrigger.click();

  let publishButton = await driver.$(
    "button.gh-btn.gh-btn-black.gh-publishmenu-button.gh-btn-icon.ember-view"
  );
  await publishButton.click();

  let publishButtonConfirm = await driver.$(
    "button.gh-btn.gh-btn-black.gh-btn-icon.ember-view"
  );
  await publishButtonConfirm.click();
};

const fillPostName = async function (driver, title) {
  let titlePost = await driver.$("textarea.gh-editor-title");
  await titlePost.setValue(title);
};

const checkNewPostEdited = async function (driver, expectedTitle) {
  const posts = await driver.$$(
    "//ol[contains(@class, 'gh-list')]//li[contains(@class, 'gh-posts-list-item')]"
  );

  for (const post of posts) {
    // Obtener el título y el estado del post
    const titleElement = await post.$(".gh-content-entry-title");

    const title = await titleElement.getText();

    // Comparar con los valores esperados
    if (title.trim() === title) {
      return; // Encontrado y coincide
    }
  }

  // Si llegamos aquí, no se encontró el post con el título y estado esperados
  throw new Error(`No se encontró un post con título '${expectedTitle}'`);
};

const checkNewDraftPost = async function (
  driver,
  expectedTitle,
  expectedStatus
) {
  // Obtener todos los elementos de la lista de posts
  const posts = await driver.$$(
    "//ol[contains(@class, 'gh-list')]//li[contains(@class, 'gh-posts-list-item')]"
  );

  for (const post of posts) {
    // Obtener el título y el estado del post
    const titleElement = await post.$(".gh-content-entry-title");
    const statusElement = await post.$(
      ".gh-post-list-status .gh-content-status-draft, .gh-post-list-status .gh-content-status-published"
    );

    const title = await titleElement.getText();
    const status = await statusElement.getText();

    // Comparar con los valores esperados
    if (
      title.trim() === expectedTitle &&
      status.trim().toLowerCase() === expectedStatus.toLowerCase()
    ) {
      return; // Encontrado y coincide
    }
  }

  // Si llegamos aquí, no se encontró el post con el título y estado esperados
  throw new Error(
    `No se encontró un post con título '${expectedTitle}' y estado '${expectedStatus}'`
  );
};

/**
 * Creates a new post with given information
 * @param {*} driver The driver needed to operate
 * @param {*} title Title of the post
 * @param {*} content Content of the post
 * @param {*} additionalProps Additional properties for creating the post
 */
const createPost = async function (
  driver,
  title,
  content,
  additionalProps = {}
) {
  const { tagname, scheduleDate, scheduleHour } = additionalProps;
  let titlePost = await driver.$("textarea.gh-editor-title");
  await titlePost.setValue(title);
  await driver.pause(1000);
  let contentPost = await driver.$("div.koenig-editor__editor");
  await contentPost.setValue(content);
  await driver.pause(1000);

  // Add the tag when its the case
  if (tagname) {
    // Open settings
    const settingsButton = await driver.$("button[title$='Settings']");
    await settingsButton.click();
    await driver.pause(1000);

    // Add tag
    let tagsField = await driver
      .$("#tag-input")
      .$("input[class$='ember-power-select-trigger-multiple-input']");
    await driver.pause(1000);
    await tagsField.setValue(tagname);
    await driver.pause(1000);
    await driver.keys("Enter");
    await driver.pause(1000);

    // Close settings
    const closeButton = await driver.$("button[title$='Settings']");
    await closeButton.click();
  }

  await driver.pause(1000);
  let publishTrigger = await driver.$(
    "div.ember-view.ember-basic-dropdown-trigger.gh-btn.gh-btn-editor.gh-publishmenu-trigger"
  );
  await publishTrigger.click();

  // Add schedule when its the case
  if (scheduleDate && scheduleHour) {
    await driver.pause(2000);
    let radioButtons = await driver.$$(
      "div[class$='gh-publishmenu-radio-button'"
    );
    const scheduleRadioButton = radioButtons[1];
    await scheduleRadioButton.click();
    await driver.pause(1000);

    let dateInput = await driver
      .$("div[class$='gh-date-time-picker-date '")
      .$("input");
    await dateInput.setValue(scheduleDate);
    await driver.pause(2000);

    await driver.keys("Tab");
    await driver.keys(scheduleHour);

    await driver.pause(2000);
  }

  let publishButton = await driver.$(
    "button.gh-btn.gh-btn-black.gh-publishmenu-button.gh-btn-icon.ember-view"
  );
  await publishButton.click();

  let publishButtonConfirm = await driver.$(
    "button.gh-btn.gh-btn-black.gh-btn-icon.ember-view"
  );
  await publishButtonConfirm.click();
};
const createPostDraft = async function (driver, title, content) {
  let titlePost = await driver.$("textarea.gh-editor-title");
  await titlePost.setValue(title);
  await driver.pause(1000);
  let contentPost = await driver.$("div.koenig-editor__editor");
  await contentPost.setValue(content);

  await driver.pause(1000);
  let publishTrigger = await driver.$("a[href='#/posts/']");
  await publishTrigger.click();
};
const addImage = async function (driver, image_path) {
  let settingsButton = await driver.$(
    "button.gh-editor-feature-image-add-button"
  );
  await settingsButton.click();
  let imageSelector = await driver.$("input[class$='x-file--input']");
  await imageSelector.setValue(image_path);
};

const checkPostUpdated = async function (driver) {
  let updatedMessage = await driver.$("span[class$='gh-notification-title']");
  expect((await updatedMessage.getText()) == "Updated").to.be.true;
};

const selectPostToDelete = async function (driver, title) {
  let publishedPosts = await driver.$$("h3[class$='gh-content-entry-title']");
  for (let post of publishedPosts) {
    if ((await post.getText()) === title) {
      await post.click();
      break;
    }
  }
};

const deletePost = async function (driver) {
  let settingsButton = await driver.$("button[title$='Settings']");
  await settingsButton.click();
  let deleteButton = await driver.$(
    "button.gh-btn.gh-btn-hover-red.gh-btn-icon.settings-menu-delete-button"
  );
  await deleteButton.click();
};

const clickConfirmDelete = async function (driver) {
  let redButton = await driver.$(
    "button.gh-btn.gh-btn-red.gh-btn-icon.ember-view"
  );
  await redButton.click();
};

module.exports = {
  assignTagToPost,
  assignMultipleTagsToPost,
  checkIfPostsExists,
  fillEditPost,
  fillPostName,
  checkNewPostEdited,
  createPost,
  addImage,
  checkPostUpdated,
  selectPostToDelete,
  deletePost,
  clickConfirmDelete,
  createPostDraft,
  checkNewDraftPost,
};
