import { SignInPage } from "../pages/signinPage.cy";
import config from "../assets/config.json";
import { takeCypressScreenshot } from "../utils/takeScreenshot";
import {PostPage} from "../pages/postPage.cy";

describe("Scenario-9 Delete the post ", () => {

    it("Delete the post ", () => {
        // Given user is logged in
        let signinPage = new SignInPage();
        signinPage.login(config.user,config.password);
        // When user selects a post and deletes it 
        let postPage = new PostPage();
        postPage.deletePost()
        // Then post is delete
        takeCypressScreenshot("deletedPost"); 
        })      
})
