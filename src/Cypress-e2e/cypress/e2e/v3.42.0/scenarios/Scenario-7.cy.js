import { SignInPage } from "../pages/signinPage.cy";
import config from "../assets/config.json";
import { takeCypressScreenshot } from "../utils/takeScreenshot";
import { PostPage } from "../pages/postPage.cy";

describe("Scenario-7 create a post without a image ", () => {

    it("Creacion de post", () => {
        // Given user is logged in
        let signinPage = new SignInPage();
        signinPage.login(config.user,config.password);
        // When user enters the data for the post
        let postPage = new PostPage();
        postPage.createPost(config.new_title,config.new_content) 
        // Then post is created correctly
        cy.visit(config.host + "ghost/#/posts");
        takeCypressScreenshot("createNewPost");  
        })      
    })


