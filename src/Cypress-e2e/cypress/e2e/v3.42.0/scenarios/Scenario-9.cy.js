import { SignInPage } from "../pages/signinPage.cy";
import config from "../assets/config.json";
import { takeCypressScreenshot } from "../utils/takeScreenshot";
import {PostPage} from "../pages/postPage.cy";

describe("Scenario-9 Delete a post ", () => {

    it("Creacion de post ", () => {
        // Ingrensando con usuario y clave correcta
        let signinPage = new SignInPage();
        signinPage.login(config.user,config.password);
        let postPage = new PostPage();
        postPage.deletePost()
        takeCypressScreenshot("deletedPost"); 
        })      
})
