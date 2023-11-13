describe ("Funcionalidad de ingreso con login al admin de Ghost", () =>{
  
    
    beforeEach (()=>{
        cy.visit('http://localhost:2368/ghost/')
        cy.wait(500)
    })

    context("inicio y fin de sesion" , ()=>{
     it("Ingresar a la pagina principal del sitio web", ()=>{

        cy.fixture('example').then(example => {
           
            cy.get('#identification').type(example.email)
            cy.get('#password').type(example.password);
          })
        //cy.get('#identification').type(data.email);
        cy.wait(500)
        //cy.get('#identification').click();
        //cy.get('#password').type("Alcatel2010");
        cy.getByData('sign-in').click();
        
        
        cy.get('.gh-nav-top').find('a').contains('View site').click();
        cy.screenshot()
        cy.get('.gh-viewport')
        //cy.getBySus('portal-trigger-button').click();
        cy.screenshot() 
        cy.get('.w3').click();
        cy.get('.gh-viewport')
        cy.window('http://localhost:2368')
        cy.wait(500)
        //cy.visit('http://localhost:2368')
        //cy.visit('http://localhost:2368/ghost/')
        //cy.get('li').contains('Sign out').click(); 
        //cy.getByClip('ember33-trigger')
        //cy.url().should ('include','/ghost/signin');
    })

    it("Desloguear al usuario del administrador",()=>{ 
        cy.get('#identification').type("l.blandon@uniandes.edu.co");
        cy.get('#password').type("Alcatel2010");
        cy.screenshot()
        cy.getByData('sign-in').click();
        cy.get('.w3').click();
        cy.get('li').contains('Sign out').click(); 
    })
    })

    context("otro inicio y fin de sesion" , ()=>{
        it("Desloguear al usuario del administrador",()=>{ 
            cy.get('#identification').type("l.blandon@uniandes.edu.co");
            cy.get('#password').type("Alcatel2010");
            cy.screenshot()
            cy.getByData('sign-in').click();
            cy.get('.w3').click();
            cy.get('li').contains('Sign out').click(); 
        })
        })
    
    })