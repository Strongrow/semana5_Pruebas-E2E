class LogoutPage{
    getSignOut(){
        return cy.get('li').contains('Sign out')
    }
   
    getSignOutMenu(){
        return cy.get('.w3')
    }

}

export default LogoutPage;