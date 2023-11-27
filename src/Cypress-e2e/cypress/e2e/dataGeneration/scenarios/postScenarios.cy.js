import { SignInPage } from "../pages/signinPage.cy";
import config from "../assets/config.json";
import { PostPage } from "../pages/postPage.cy";
import data from "../Apriori/posts.json";

describe("Post Scenarios", () => {

    
    it("Scenario 21: Add a non existing author", () => {

        // Given user is logged in
        let signinPage = new SignInPage();
        signinPage.login(config.user, config.password);
        cy.wait(5000);
        // When the user wants to edit a post
        cy.visit(config.host + "ghost/#/posts");
        cy.wait(1000);

        // And the user select random post
        let postsPage = new PostPage();
        postsPage.selectRandomPost();

        // And the user edit post with canonical URL in metadata
        postsPage.addAuthor(data.scenario21.label);
        // Then the edited post is displayed in the post a message error
        postsPage.checkAuthorError().should('exist');
      
   })
5414919666
   it("Scenario 22: Add invalid canonical URL to post metadata google ", () => {
       // Given user is logged in
       let signinPage = new SignInPage();
       signinPage.login(config.user, config.password);
       cy.wait(3000);
       // When the user wants to edit a post
       cy.visit(config.host + "ghost/#/posts");
       cy.wait(1000);

       // And the user selects a random post
       let postsPage = new PostPage();
        postsPage.selectRandomPost();

       // And the user edit post with invalid canonical URL in metadata
       postsPage.editMetadataURL(data.scenario22.url);
       // Then there is an error message on settings
       postsPage.checkMetadataURLError().should('exist');
   });
  

   it("Scenario 23: Add valid canonical URL to post metadata google", () => {
      // Given user is logged in
      let signinPage = new SignInPage();
      signinPage.login(config.user, config.password);
      cy.wait(3000);
      // When the user wants to edit a post
      cy.visit(config.host + "ghost/#/posts");
      cy.wait(1000);

      // And the user selects a random post
      let postsPage = new PostPage();
       postsPage.selectRandomPost();

      // And the user edit post with invalid canonical URL in metadata
      postsPage.editMetadataURL(data.scenario23.url);
      // Then there is an error message on settings
      // postsPage.checkMetadataURLError().should('exist');
   });

   it("Scenario 24: Edit a post with invalid time", () => {
       // Given user is logged in
       let signinPage = new SignInPage();
       signinPage.login(config.user, config.password);
       cy.wait(3000);
       // When the user wants to edit a post
       cy.visit(config.host + "ghost/#/posts");
       cy.wait(1000);

       // And the user selects a random post
       let postsPage = new PostPage();
        postsPage.selectRandomPost();

       // And the user edit post with time
       postsPage.editPostTime(data.scenario24.time);
       // Then the edited post is displayed in the post a message error
       postsPage.checkPostTimeError().should("contain", 'Must be in format: "15:00"');
   }); 
   
   it("Scenario 25: Edit a post with valid post time", () => {
       // Given user is logged in
       let signinPage = new SignInPage();
       signinPage.login(config.user, config.password);
       cy.wait(3000);
       // When the user wants to edit a post
       cy.visit(config.host + "ghost/#/posts");
       cy.wait(1000);

       // And the user selects a random post
       let postsPage = new PostPage();
        postsPage.selectRandomPost();

       // And the user edit post with time
       postsPage.editPostTime(data.scenario25.time);
       // Then the edited post is displayed in the post a message error


       postsPage.checkPostTimeError().should("not.exist");
   }); 
 
   it("Scenario 26: Create valid Post", () => {

       // Given user is logged in
       let signinPage = new SignInPage();
       signinPage.login(config.user, config.password);
       cy.wait(3000);

      // And the user selects a random post
       let postsPage = new PostPage();
       postsPage.createPost(data.scenario26.title,data.scenario26.content)

       // back to post list

       cy.get('.gh-publish-title > .green').should("contain",'Boom. It’s out there.')

   });

  
   it("Scenario 27: Create post with valid metatitle", () => {
       // Given user is logged in
       let signinPage = new SignInPage();
       signinPage.login(config.user, config.password);
       cy.wait(2000);

       cy.visit(config.host + "ghost/#/posts");
       cy.wait(1000);

       // And the user selects a random post
       let postsPage = new PostPage();
        postsPage.selectRandomPost();

       // And edits post with an valid metatitle
       postsPage.editMetatitle(data.scenario27.title);
       // Then there is no error message on settings
       postsPage.checkMetatitleNoError();


   });
   it("Scenario 28: Edit Post with Excerpt of more than 301 characters", () => {
        // Given user is logged in
        let signinPage = new SignInPage();
        signinPage.login(config.user, config.password);
        cy.wait(2000);

        cy.visit(config.host + "ghost/#/posts");
        cy.wait(1000);
 
        // And the user selects a random post
        let postsPage = new PostPage();
         postsPage.selectRandomPost();


       // And the user edit post with excerpt
       postsPage.editPostExcerpt(data.scenario28.excerpt);

       // Then the edited post is displayed in the post a message error
       postsPage.checkPostExcerptError().should("contain", 'Excerpt cannot be longer than 300 characters.');
   });

   it("Scenario 29: Add valid injected code at header from post settings", () => {
       // Given user is logged in
       // Given user is logged in
       let signinPage = new SignInPage();
       signinPage.login(config.user, config.password);
       cy.wait(2000);

       cy.visit(config.host + "ghost/#/posts");
       cy.wait(1000);

       let postsPage = new PostPage();
       postsPage.createPostlite("Post with code", config.content_page)
       // When the user goes to the post list
       cy.visit(config.host + "ghost/#/posts");
       // And selects the created post
       postsPage.selectPostByName("Post with code");
       // And inserts a paragraph on page header using code injection

       postsPage.insertParagraphOnHeader(data.scenario29.paragraph);
       // Then post at website should contain that header
       cy.visit(config.host);
       postsPage.clickPostByTitle("Post with code");
       postsPage.getParagraphsByText(data.scenario29.paragraph).should('exist');
   });


   it("Scenario 30: Create post with invalid metatitle", () => {
       // Given user is logged in
       let signinPage = new SignInPage();
       signinPage.login(config.user, config.password);
       cy.wait(2000);

       cy.visit(config.host + "ghost/#/posts");
       cy.wait(1000);
       // And the user selects a random post
       let postsPage = new PostPage();
       postsPage.selectRandomPost();

       // And edits post with an invalid metatitle
       postsPage.editMetatitle(data.scenario30.title);
       // Then there is an error message on settings
       postsPage.checkMetatitleError();
   });



it("Scenario 31: Edit a post with invalid date", () => {
   // Given user is logged in
   let signinPage = new SignInPage();
   signinPage.login(config.user, config.password);
   cy.wait(3000);
   // When the user wants to edit a post
   cy.visit(config.host + "ghost/#/posts");
   cy.wait(1000);

   // And the user selects a random post
   let postsPage = new PostPage();
    postsPage.selectRandomPost();

   // And the user edit post with time
   postsPage.editPostDate(); 
   // Then the edited post is displayed in the post a message error
   postsPage.checkPostDateError().should("contain", 'Invalid date format, must be YYYY-MM-DD');
}); 


    it("Scenario 32: Edit a post with invalid tier", () => {
     // Given user is logged in
     let signinPage = new SignInPage();
     signinPage.login(config.user, config.password);
     cy.wait(5000);
     // When the user wants to edit a post
     cy.visit(config.host + "ghost/#/posts");
     cy.wait(1000);

     // And the user select random post
     let postsPage = new PostPage();
     postsPage.selectRandomPost();
     // And the user edit post with canonical URL in metadata
     postsPage.addtier(data.scenario21.label); 
     // Then the edited post is displayed in the post a message error
     postsPage.checkAuthorError().should('exist');
}); 

it("Scenario 33: Edit Post with x descripcion of more than 500 characters", () => {
     // Given user is logged in
     let signinPage = new SignInPage();
     signinPage.login(config.user, config.password);
     cy.wait(5000);
     // When the user wants to edit a post
     cy.visit(config.host + "ghost/#/posts");
     cy.wait(1000);
    // And the user selects a random post
    let postsPage = new PostPage();
     postsPage.selectRandomPost();


   // And the user edit post with excerpt
   postsPage.editXdescription(data.scenario31.excerpt);

   // Then the edited post is displayed in the post a message error
   postsPage.checkPostXdescriptionError().should("contain", 'Twitter Description cannot be longer than 500 characters.');

})




it("Scenario 34: Edit Post with Facebook description of more than 500 characters", () => {
    // Given user is logged in
    let signinPage = new SignInPage();
    signinPage.login(config.user, config.password);
    cy.wait(5000);
    // When the user wants to edit a post
    cy.visit(config.host + "ghost/#/posts");
    cy.wait(1000);
   // And the user selects a random post
   let postsPage = new PostPage();
    postsPage.selectRandomPost();


  // And the user edit post with excerpt
  postsPage.editFacebookDescription(data.scenario31.excerpt); 

  // Then the edited post is displayed in the post a message error
  postsPage.checkPostFacebookError().should("contain", 'Facebook Description cannot be longer than 500 characters.');

})


it("Scenario 35: Edit Post with x title of more than 301 characters", () => {
    // Given user is logged in
    let signinPage = new SignInPage();
    signinPage.login(config.user, config.password);
    cy.wait(5000);
    // When the user wants to edit a post
    cy.visit(config.host + "ghost/#/posts");
    cy.wait(1000);
   // And the user selects a random post
   let postsPage = new PostPage();
    postsPage.selectRandomPost();


  // And the user edit post with excerpt
  postsPage.editXtittle(data.scenario31.excerpt); 

  // Then the edited post is displayed in the post a message error
  postsPage.checkPostXtitleError().should("contain", 'Twitter Title cannot be longer than 300 characters.');

})



it("Scenario 36: Edit Post invalid  with Facebook card - title of more than 301 characters", () => {
    // Given user is logged in
    let signinPage = new SignInPage();
    signinPage.login(config.user, config.password);
    cy.wait(5000);
    // When the user wants to edit a post
    cy.visit(config.host + "ghost/#/posts");
    cy.wait(1000);
   // And the user selects a random post
   let postsPage = new PostPage();
    postsPage.selectRandomPost();


  // And the user edit post with excerpt
  postsPage.editFacebooktitle(data.scenario31.excerpt); 

  // Then the edited post is displayed in the post a message error
  postsPage.checkPostFacebookTitleError().should("contain", 'Facebook Title cannot be longer than 300 characters.');

})


it("Scenario 37: Schedule for later with invalid date", () => {
    // Given user is logged in
    let signinPage = new SignInPage();
    signinPage.login(config.user, config.password);
    cy.wait(3000);
    // When the user wants to edit a post
    cy.visit(config.host + "ghost/#/posts");
    cy.wait(1000);

    // And the user selects a random post
    let postsPage = new PostPage();
     postsPage.selectRandomPost();

    // And the user edit post with time
    postsPage.editScheculeDate(data.scenario24.time);
    // Then the edited post is displayed in the post a message error
    postsPage.checkPostDateError().should("contain", 'Invalid date format, must be YYYY-MM-DD');
}); 






})
