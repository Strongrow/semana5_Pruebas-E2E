import { SignInPage } from "../pages/signinPage.cy";
import config from "../assets/config.json";
import { takeCypressScreenshot } from "../utils/takeScreenshot";
import { PostPage } from "../pages/postPage.cy";

describe("Scenario-7 create a post without a image ", () => {

    it("Creacion de post", () => {
        // Ingrensando con usuario y clave correcta
        let signinPage = new SignInPage();
        signinPage.login(config.user,config.password);
        // Dirigirse a pagina de Post
        //cy.visit(config.host + "/ghost/#/posts");
        let postPage = new PostPage();
        postPage.createPost(config.new_title,config.new_content) 
        cy.visit(config.host + "ghost/#/posts");
        takeCypressScreenshot("createNewPost");  
        })      
    })


