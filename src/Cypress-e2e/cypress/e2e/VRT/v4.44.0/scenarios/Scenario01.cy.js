import { SignInPage } from "../pages/signinPage.cy";
import { PostPage } from "../pages/postPage.cy";
import { takeCypressScreenshot } from "./../utils/takeScreenshot";
import config from "./../assets/config.json";


describe("Scenario01 - Create new post", () => {
  it("Create a new post with and publish it", () => {
    
    let signinPage = new SignInPage();
    signinPage.login(config.user, config.password);
      
    let newPost = new PostPage ();
    newPost.createPost(config.new_title,config.new_content);
    cy.wait(1500);
    takeCypressScreenshot("PostCreate");  
    
    })      
    
  });
