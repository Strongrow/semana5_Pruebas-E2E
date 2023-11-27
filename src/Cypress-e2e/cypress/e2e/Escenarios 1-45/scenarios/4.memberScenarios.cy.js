import { SignInPage } from "../pages/signinPage.cy";
import config from "../assets/config.json";
import { faker } from "@faker-js/faker";
import { MembersPage } from "../pages/membersPage.cy";

describe("Members Scenarios", () => {

    it(" Scenario 38: Create member with invalid email ", () => {
        // Given user is logged in
        let signinPage = new SignInPage();
        signinPage.login(config.user, config.password);
        cy.wait(3000);
        // go to create a member

        cy.visit(config.host + "ghost/#/members");
        cy.wait(1000);

        //add invalid email 
        let memberPage = new MembersPage ();    
        memberPage.goCreateMember();
        let name = faker.person.fullName();
        let email = faker.person.firstName();
        let note = faker.lorem.sentences({min:4,max:10});
        memberPage.addNewMember(name, email,note);
        //message invalid email 
        memberPage.checkEmailError().should("contain", 'Invalid Email.');
    });

    it(" Scenario 39: Create member with invalid note ", () => {
        // Given user is logged in
        let signinPage = new SignInPage();
        signinPage.login(config.user, config.password);
        cy.wait(3000);
        // go to create a member

        cy.visit(config.host + "ghost/#/members");
        cy.wait(1000);

        //add invalid note
        let memberPage = new MembersPage ();    
        memberPage.goCreateMember();
        let name = faker.person.fullName();
        let email = faker.internet.email();
        let note = faker.lorem.sentences({min:4,max:40});
        memberPage.addNewMember(name, email,note);

        //message invalid note 
        memberPage.checkNoteError().should("contain", 'Note is too long.');
    });


    it(" Scenario 40: Create valid member", () => {
        // Given user is logged in
        let signinPage = new SignInPage();
        signinPage.login(config.user, config.password);
        cy.wait(3000);
        // go to create a member

        cy.visit(config.host + "ghost/#/members");
        cy.wait(1000);

        //add valid info to create a new member
        let memberPage = new MembersPage ();    
        memberPage.goCreateMember();
        let name = faker.person.fullName();
        let email = faker.internet.email();
        let note = faker.lorem.sentences({min:4,max:5});
        memberPage.addNewMember(name, email,note);
        //message creation new member
        memberPage.checkMemberSaved(name).should('exist');

    });

    it("Scenario 41: Edit valid member with invalid email", () => {
        
        // Given user is logged in
        let signinPage = new SignInPage();
        signinPage.login(config.user, config.password);
        cy.wait(3000);
        // go to create a member

        cy.visit(config.host + "ghost/#/members");
        cy.wait(1000);

        //select a member
        let memberPage = new MembersPage ();    
        cy.contains("Members").click();
        memberPage.selectRandomMember();

        //add invalid email 
        let email = faker.person.firstName();
        memberPage.editEmailMember(email);
        //message invalid email 
        memberPage.checkEmailError().should("contain", 'Invalid Email.');

    });

    it("Scenario 42: Edit valid member with invalid note", () => {
        // Given user is logged in
        let signinPage = new SignInPage();
        signinPage.login(config.user, config.password);
        cy.wait(3000);
        // go to create a member

        cy.visit(config.host + "ghost/#/members");
        cy.wait(1000);

        //select a member
        let memberPage = new MembersPage ();    
        cy.contains("Members").click();
        memberPage.selectRandomMember();

        //add invalid email 
        let note = faker.lorem.sentences({min:4,max:40});
        memberPage.editNoteMember(note);

        //message invalid note 
        memberPage.checkNoteError().should("contain", 'Note is too long.');
    });

    it("Scenario 43: Edit valid member with valid information", () => {
         // Given user is logged in
         let signinPage = new SignInPage();
         signinPage.login(config.user, config.password);
         cy.wait(3000);
         // go to create a member
 
         cy.visit(config.host + "ghost/#/members");
         cy.wait(1000);
 
         //select a member
         let memberPage = new MembersPage ();    
         cy.contains("Members").click();
         memberPage.selectRandomMember();
 
         //add invalid email 
        let name = faker.person.fullName();
        let email = faker.internet.email();
        let note = faker.lorem.sentences({min:4,max:5});
        memberPage.editInfoMember(name, email,note);
      

         //message edit member
        memberPage.checkMemberSaved(name).should('exist');

    });

    it("Scenario 44: Serch members invalid name", () => {
       // Given user is logged in
       let signinPage = new SignInPage();
       signinPage.login(config.user, config.password);
       cy.wait(3000);
       // go to create a member

       cy.visit(config.host + "ghost/#/members");
       cy.wait(1000);

       //select a member
       let memberPage = new MembersPage ();    
       cy.contains("Members").click();
       let name = faker.person.firstName();
       memberPage.search(name);

       memberPage.checkNoMembers().should("contain", 'No members match the current filter');
    });
 
})