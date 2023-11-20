class Page {

  Page() {
    if (!cy.url().should("include", "/ghost/#/editor/page/")) {
        throw new IllegalStateException(
            "This is not Page Details, the current page is: " + cy.url()
        );
    }
}

createNewPage(page_tittle,content_page,host) {
  cy.contains("Pages").click();
  cy.contains("New page").click();
  cy.get("textarea[placeholder$='Page Title']").clear().type(page_tittle);
  cy.get("div[data-placeholder$='Begin writing your page...']").clear().type(content_page)
  cy.get("div.gh-publishmenu-trigger").click();
  cy.get("button.gh-btn-blue.gh-publishmenu-button").click();
  cy.visit( host+ "ghost/#/pages?type=published")
  
}

editpage(page_tittle,image_path,host){

  cy.contains("Pages").click();
  cy.get('.gh-list > :nth-child(2)').click();
  cy.wait(1000);
  cy.get("textarea[placeholder$='Page Title']").clear().type(page_tittle);
  cy.wait(1000);
  cy.get("button[title$='Settings']").click();
  cy.get("input[class$='x-file--input']").selectFile(image_path, {force: true})
  cy.get("button[aria-label$='Close']").click()
  cy.wait(1000);
  cy.get("div.gh-publishmenu-trigger").click();
  cy.wait(1000);
  cy.get("button.gh-btn-blue.gh-publishmenu-button").click();
  cy.wait(1000);
  cy.visit(host + "ghost/#/pages?type=published")

}

deletePage(){
  cy.contains("Pages").click();
  cy.get('.gh-list > :nth-child(2)').click();
  cy.wait(1000);
  cy.get("button[title$='Settings']").click();
  cy.wait(1000);
  cy.get('button.gh-btn').click()
  cy.wait(1000);
  cy.get('button.gh-btn-red.gh-btn-icon.ember-view').click()
  cy.wait(1000);

}

}

export { Page };
