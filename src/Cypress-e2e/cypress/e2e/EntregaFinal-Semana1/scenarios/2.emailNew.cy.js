import { SignInPage } from "../pages/signinPage.cy";
import data from "../Apriori/login.json";
import { faker } from '@faker-js/faker';
import { EmailNewSletter } from "../pages/email-newsletter.cy";

const sizes = ['iphone-6', 'ipad-2','macbook-16']

describe("Newsletters Scenarios", () => {

    sizes.forEach((size) => {
        it("Scenario 4: Create a new Newsletters invalid email Sender ", () => {        
            // Given user is logged in
            cy.viewport(size)
            let signinPage = new SignInPage();
            signinPage.login(data.scenario1.user, data.scenario1.password );
            cy.wait(2000);
            let emailNewseller = new EmailNewSletter();
            emailNewseller.goToEmailNewSletter();
            emailNewseller.selectRandomEmailNewSletter();
            let name = faker.name.findName()
            let description = faker.lorem.sentence({ min: 3, max: 5 })
            let emailSender = faker.name.findName()
            let nameSender = faker.name.findName()
            emailNewseller.editEmailSletter(name,description,emailSender,nameSender);
            emailNewseller.checkError().should('exist');
            })
      
    
        it("Scenario 5: Create a new Newsletters valid ", () => {
             // Given user is logged in
             cy.viewport(size)
            let signinPage = new SignInPage();
            signinPage.login(data.scenario1.user, data.scenario1.password );
            cy.wait(2000);
            let emailNewseller = new EmailNewSletter();
            emailNewseller.goToEmailNewSletter();
            emailNewseller.selectRandomEmailNewSletter();
            let name = faker.name.findName()
            let description = faker.lorem.sentence({ min: 3, max: 5 })
            let emailSender = faker.internet.email();
            let nameSender = faker.name.findName();
            emailNewseller.editEmailSletter(name,description,emailSender,nameSender);
            emailNewseller.checkError().should("not.exist");
        });
    
    
       it("Scenario 6: Create a new Newsletters invalid with too-longs fields", () => {
             // Given user is logged in
             cy.viewport(size)
            let signinPage = new SignInPage();
            signinPage.login(data.scenario1.user, data.scenario1.password );
            cy.wait(2000);
            let emailNewseller = new EmailNewSletter();
            emailNewseller.goToEmailNewSletter();
            emailNewseller.selectRandomEmailNewSletter();
            let name = faker.lorem.sentence({ min: 3, max: 4 })
            let description = faker.lorem.sentence({ min: 3, max: 5 })
            let emailSender = faker.internet.email();
            let nameSender = faker.lorem.sentence({ min: 3, max: 5 })
            emailNewseller.editEmailSletter(name,description,emailSender,nameSender);
            emailNewseller.checkError().should("not.exist");
        });

    })
  })