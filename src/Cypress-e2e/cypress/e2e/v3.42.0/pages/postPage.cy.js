class PostPage {


  PostPage() {
    if (!cy.url().should("include", "/ghost/#/posts")) {
      throw new IllegalStateException(
        "This is not Post Page current page is: " + cy.url()
      );
    }
  }

  createPost(postTittle, Content, AsociateTag) {

    cy.contains("Posts").click();
    cy.contains("New post").click();
    cy.get("textarea.gh-editor-title").type(postTittle);
    cy.wait(1000);
    cy.get('.koenig-editor__editor').type(Content);
    cy.wait(1000);
    cy.get("button.post-settings").click();
    cy.get("input.ember-power-select-trigger-multiple-input").first().type(`${AsociateTag}{enter}`);
    cy.wait(1000);
    cy.get("button.close.settings-menu-header-action").click();
    cy.get("div.gh-publishmenu-trigger").click();
    cy.get("button.gh-btn-blue.gh-publishmenu-button").click();
   
    
  }

  addImage(image_path) {
    cy.get("button[title$='Settings']").click();
    cy.get("input[class$='x-file--input']").selectFile(image_path, { force: true })
    cy.get("button[aria-label$='Close']").click()
    cy.get("div.gh-publishmenu-trigger").click();
    cy.get("button.gh-btn-blue.gh-publishmenu-button").click();
    return cy.get(".gh-notification-content");
  }

  goPost() {
    cy.get("button.post-settings").click();
    cy.wait(1000);
    cy.visit("http://localhost:3001/ghost/#/posts");

  }

  deletePost(){
    cy.contains("Posts").click();

    cy.get('.posts-list > :nth-child(2)').first().click()
    cy.wait(1000);
    cy.get('button.post-settings').click()
    cy.wait(1000);
    cy.get('button.gh-btn').click()
    cy.wait(1000);
    cy.get('button.gh-btn-red.gh-btn-icon.ember-view').click()
    cy.wait(1000);
  }
  editPost(tittle,content,imagePath){
    cy.contains("Posts").click();
    cy.get('.posts-list > :nth-child(2)').first().click()
    cy.wait(1000);
    cy.get("textarea.gh-editor-title").type(tittle);
    cy.wait(1000);
    cy.get('.koenig-editor__editor').type(content);
    cy.wait(1000);  
    cy.get("div.gh-publishmenu-trigger").click();
    cy.get("button.gh-btn-blue.gh-publishmenu-button").click();
    cy.visit("http://localhost:3001/ghost/#/posts");  
  }


  /*
  selectPost() {
    cy.contains("Posts").click();
    return cy.get("a.gh-list-data.gh-post-list-title").first();
  }

  editPost(postTitle) {
    cy.contains("Posts").click();
    cy.get("a.gh-list-data.gh-post-list-title").first().click();
    cy.get("textarea.gh-editor-title").clear().type(postTitle);
    cy.get("div.gh-publishmenu-trigger").click();
    cy.get("button.gh-btn-blue.gh-publishmenu-button").click();
    return cy.get(".gh-notification-content");
  }*/
}

export { PostPage };
