import config from "../assets/config.json";

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
    cy.wait(1000);
    cy.get('p[data-koenig-dnd-droppable="true"]').type(Content);
    cy.wait(1000);
    cy.get('.darkgrey > span').click();
    cy.contains('Continue, final review').click();
    cy.contains('Publish post, right now').click();
       
  }

  createPostlite(postTittle, Content) {

    cy.contains("Posts").click();
    cy.contains("New post").click();
    cy.get("textarea.gh-editor-title").type(postTittle);
    cy.wait(1000);
    cy.get('p[data-koenig-dnd-droppable="true"]').type(Content);      
  }

  selectPostByName(name) {
    cy.contains("h3[class$='gh-content-entry-title']", name).click();
  }

  insertParagraphOnHeader(paragraph) {
    cy.get("button[title$='Settings']").click();
    cy.wait(200);
    cy.contains('Code injection').click();
    cy.get('#post-setting-codeinjection-head > .CodeMirror > .CodeMirror-scroll')
      .type('{meta+a}{backspace}')
      .type(`<p>${paragraph}</p>`);
    cy.get('.back').click();
    cy.get('.settings-menu-open').click();
    cy.get('.darkgrey > span').click();
    cy.contains('Continue, final review').click();
    cy.contains('Publish post, right now').click();

  }

  editMetadataURL(url) {
    cy.get("button[title$='Settings']").click();
    cy.wait(200);
    cy.contains('Meta data').click();
    cy.get("input[class$='post-setting-canonicalUrl ember-text-field gh-input ember-view']").clear().type(url);
    cy.get('label').contains('Meta title').click();
  }

  editPostTime(time) {
    cy.get("button[title$='Settings']").click();
    cy.get("div.gh-date-time-picker-time > input[type=text]").type('{selectall}{backspace}');
    cy.get("div.gh-date-time-picker-time > input[type=text]").type(time,{force: true});
    cy.get("h4").click();
  }

  editScheculeDate(time) {
    cy.get('.darkgrey > span').click();
    cy.contains('Right now').click();
    cy.contains('Schedule for later').click();
    cy.get("input[placeholder$='YYYY-MM-DD']").dblclick().type("a");
    cy.get('.green').click();
  }


  editPostDate() {
    cy.get("button[title$='Settings']").click();
    cy.get("input[placeholder$='YYYY-MM-DD']").dblclick().type("a");
    cy.get("h4").click();
  }




  editMetatitle(title) {
    cy.get("button[title$='Settings']").click();
    cy.wait(200);
    cy.contains('Meta data').click();
    cy.get("#meta-title").clear().type(title);
    cy.get('label').contains('Meta title').click();
  }

  editPostExcerpt(excerpt) {
    cy.get("button[title$='Settings']").click();
    cy.get("textarea#custom-excerpt").type(excerpt, { delay: 1 });
    cy.get("h4").click();
  }

  editXdescription(description) {
    cy.get("button[title$='Settings']").click();
    cy.contains(' X card').click();
    cy.get('#twitter-description').type(description, {delay: 1});
    cy.get('#twitter-title').click();
  }

  editXtittle(description) {
    cy.get("button[title$='Settings']").click();
    cy.contains(' X card').click();
    cy.get('#twitter-title').type(description, {delay: 1});
    cy.get('#twitter-description').click();
  }

  editFacebookDescription(description) {
    cy.get("button[title$='Settings']").click();
    cy.contains(' Facebook card').click();
    cy.get('#og-description').type(description, { delay: 1 });
    cy.get('#og-title').click();
  }
  editFacebooktitle(description) {
    cy.get("button[title$='Settings']").click();
    cy.contains(' Facebook card').click();
    cy.get('#og-title').type(description, { delay: 1 });
    cy.get('#og-description').click();
  }



  selectRandomPost() {
    cy.get("h3[class$='gh-content-entry-title']").its('length').then((len) => {
        cy.get("h3[class$='gh-content-entry-title']")
          .eq(Math.floor(Math.random() * ((len - 1) - 0 + 1)) + 0)
          .click()
      })
  }

  editMetatitle(title) {
    cy.get("button[title$='Settings']").click();
    cy.wait(200);
    cy.contains('Meta data').click();
    cy.get("#meta-title").type('{selectall}{backspace}');
    cy.get("#meta-title").type(title,{force :true});
    cy.get('label').contains('Meta title').click();
  }


  
  addAuthor(author) {
    cy.get("button[title$='Settings']").click();
    cy.wait(200);
    cy.get("#author-list").type('{downarrow}' + author);
    cy.wait(800);
  }
  addtier(tier) {
    cy.get("button[title$='Settings']").click();
    cy.wait(200);    
    cy.get('select[data-test-select="post-visibility"]').select(['tiers']);    
    cy.get('input[class?="ember-power-select-trigger-multiple-input"]').type('{downarrow}' + tier);
    cy.wait(800);
  }

  checkMetatitleNoError() {
    cy.get('.word-count')
      .should('not.have.css', 'color', 'rgb(226, 84, 64)') // Red error indicator
  }

  checkMetatitleError() {
    cy.get('.word-count')
      .should('have.css', 'color', 'rgb(226, 84, 64)') // Red error indicator
      .should('not.have.css', 'color', 'rgb(159, 187, 88)'); // Green indicator
  }


  checkMetadataURLError() {
    return cy.contains('Please enter a valid URL');
  }
  checkAuthorError() {
    return cy.contains('No results found');
  }

  checkTierError() {
    return cy.contains('No results found');
  }

  goToPostList() {    
    cy.visit(config.host + "ghost/#/posts");
    cy.wait(1000);
  }

  getListPosts() {
    return cy.get("h3[class$='gh-content-entry-title']", { timeout: 10000 });
  }

  checkPostExcerptError() {
    return cy.contains('Excerpt cannot be longer than 300 characters.');
  }
  checkPostXdescriptionError() {
    return cy.contains('Twitter Description cannot be longer than 500 characters.');
  }

  checkPostXtitleError() {
    return cy.contains('Twitter Title cannot be longer than 300 characters.');
  }


  checkPostFacebookError() {
    return cy.contains('Facebook Description cannot be longer than 500 characters.');
  }  
  checkPostFacebookTitleError() {
    return cy.contains('Facebook Title cannot be longer than 300 characters.');
  }  


  checkPostTimeError() {
    return cy.contains('Must be in format: "15:00"');
  }

  checkPostDateError() {
    return cy.contains('Invalid date format, must be YYYY-MM-DD');
  }
  clickPostByTitle(title) {
    return cy.get(':nth-child(1) > .gh-card-link > .gh-card-wrapper > .gh-card-title').contains(title).click();
  }

  getParagraphsByText(text) {
    return cy.contains(text, { timeout: 10000 });
  }

}

export { PostPage };
