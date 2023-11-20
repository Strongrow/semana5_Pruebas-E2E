import { SignInPage } from "../pages/signinPage.cy";
import config from "../assets/config.json";
import { takeCypressScreenshot } from "../utils/takeScreenshot";
import {PostPage} from "../pages/postPage.cy";

describe("Scenario-10 Edit a post ", () => {

    it("Edit post ", () => {
        // Given user is logged in
        let signinPage = new SignInPage();
        signinPage.login(config.user,config.password);
        // When user changes information in the post
        let postPage = new PostPage();
        postPage.editPost(config.editTittle,config.editContent,config.image_path2);
        cy.wait(1000);
        // Then Post is updated 
        takeCypressScreenshot("Edit post"); 
        })      
})
