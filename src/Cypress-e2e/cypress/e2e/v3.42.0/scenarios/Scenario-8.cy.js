import { SignInPage } from "../pages/signinPage.cy";
import config from "../assets/config.json";
import { takeCypressScreenshot } from "../utils/takeScreenshot";
import {PostPage} from "../pages/postPage.cy";

describe("Scenario-8 Create new post with image", () => {

    it("Creacion de post ", () => {
        // Given user is logged in
        let signinPage = new SignInPage();
        signinPage.login(config.user,config.password);
        // When user enters title & content 
        let postPage = new PostPage();
        postPage.createPost(config.new_title,config.new_content) 
        // When user enter the image
        postPage.addImage(config.image_path);
        // When user save de post 
        postPage.goPost();
        // Then the post is updated
        cy.wait(1000);       
        takeCypressScreenshot("listPostCreated");  
        })      
})
