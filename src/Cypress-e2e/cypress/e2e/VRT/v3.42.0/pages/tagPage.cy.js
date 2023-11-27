class TagPage {

  TagPage() {
    if (!cy.url().should("include", "/ghost/#/editor/page/")) {
        throw new IllegalStateException(
            "This is not Page Details, the current page is: " + cy.url()
        );
    }
}


createNewTag(tag,slug,content) {  
  cy.contains("Tags").click();
  cy.contains("New tag").click();
  cy.get("#tag-name").clear().type(tag, { force: true });
  cy.wait(500);
  cy.get('input[name="accent-color"]').type("2eb24b");
  cy.wait(500);
  cy.get("#tag-slug").clear().type(slug, { force: true })
  cy.wait(500);
  cy.get("#tag-description").clear().type(content, { force: true });
  cy.contains("Save").click();
  cy.contains("Tags").click();
}

edittag(tag,slug,content){

  cy.contains("Tags").click();
  cy.get('a[title="Edit tag"]').first().click()
  cy.wait(1000);
  cy.get("#tag-name").clear().type(tag, { force: true });
  cy.wait(500);
  cy.get('input[name="accent-color"]').type("FF0000");
  cy.wait(500);
  cy.get("#tag-slug").clear().type(slug, { force: true })
  cy.wait(500);
  cy.get("#tag-description").clear().type(content, { force: true });
  cy.contains("Save").click();
  cy.contains("Tags").click();

}

deleteTag(){
  cy.contains("Tags").click();
  cy.get('a[title="Edit tag"]').first().click();
  cy.wait(1000);
  cy.contains("Delete tag").click();
  cy.wait(1000);
  cy.get('button.gh-btn.gh-btn-red.gh-btn-icon.ember-view').click();
}

}

export { TagPage };
