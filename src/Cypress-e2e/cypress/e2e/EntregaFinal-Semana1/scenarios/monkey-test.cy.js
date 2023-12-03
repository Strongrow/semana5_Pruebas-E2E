import { SignInPage } from "../pages/signinPage.cy";
import data from "../Apriori/login.json";
import { takeCypressScreenshot } from "../utils/takeScreenshot";
describe('monkeys ghost' , function() {


    it('monkeys ghost', function() {
        
        cy.visit('http://35.244.81.193/ghost/');
        let signinPage = new SignInPage();
        signinPage.login(data.scenario1.user, data.scenario1.password );    
        cy.wait(1000);
        randomClick(10);
    })

})



function randomClick(monkeysLeft) {

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    };

    var monkeysLeft = monkeysLeft;
    if(monkeysLeft > 0) {
        cy.get('a').then($links => {
            var randomLink = $links.get(getRandomInt(0, $links.length));
            if(!Cypress.dom.isHidden(randomLink)) {
                cy.wrap(randomLink).click({force: true});
                monkeysLeft = monkeysLeft - 1;
                takeCypressScreenshot(`monkey${monkeysLeft}`);  
            }
            cy.wait(1000);
            randomClick(monkeysLeft);
            
        });

    }   
}