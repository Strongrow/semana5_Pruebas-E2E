class PostPage {


  PostPage() {
    if (!cy.url().should("include", "/ghost/#/posts")) {
      throw new IllegalStateException(
        "This is not Post Page current page is: " + cy.url()
      );
    }
  }

  createPost(postTittle, Content) {
    cy.contains("Posts").click();
    cy.contains("New post").click();
    cy.get("textarea.gh-editor-title").type(postTittle);
    cy.get("article").type(Content);
    cy.get("button.settings-menu-toggle.gh-btn.gh-btn-editor.gh-btn-icon.icon-only.gh-btn-action-icon").click();
    cy.get('.settings-menu-open').click();  
    cy.contains("Publish").click();
    cy.get("button[class='gh-btn gh-btn-black gh-publishmenu-button gh-btn-icon ember-view']").click();
    cy.get("button[class='gh-btn gh-btn-black gh-btn-icon ember-view']").click();
    cy.visit("http://localhost:3002/ghost/#/posts");  
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
    cy.get('.post-view-link').click();
    cy.wait(1000);

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
  editPost(tittle,content){
    cy.contains("Posts").click();
    cy.get('.posts-list > :nth-child(2)').first().click()
    cy.wait(1000);
    cy.get("textarea.gh-editor-title").type(tittle);
    cy.wait(1000);
    cy.get('.koenig-editor__editor').type(content);
    cy.contains("Update").click();
    cy.get("button[class='gh-btn gh-btn-black gh-publishmenu-button gh-btn-icon ember-view']").click();    
    cy.visit("http://localhost:3002/ghost/#/posts");  
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
