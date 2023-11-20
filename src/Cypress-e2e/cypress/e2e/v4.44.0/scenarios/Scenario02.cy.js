import { SignInPage } from "../pages/signinPage.cy";
import { PostPage } from "../pages/postPage.cy";
import { takeCypressScreenshot } from "./../utils/takeScreenshot";
import config from "./../assets/config.json";


describe("Scenario02", () => {

    it("Editar un post existente actualizando su título", () => {
        
        let signinPage = new SignInPage();
        signinPage.login(config.user, config.password);          
        let pagePost = new PostPage ();                     
        pagePost.editPost(config.editTittle,config.editContent,config.image_path2)
        cy.wait(1500);
        takeCypressScreenshot("editPost");
         
    })
})