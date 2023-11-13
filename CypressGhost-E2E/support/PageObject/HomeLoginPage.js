class HomeLoginPage
{
    getLoginIdBox()
    {
        return cy.getByFor("identification")
    }

    getLoginPasswordBox()
    {
        return cy.getByFor("password")
    }

    getLoginSignIn()
    {
        return cy.getByData('sign-in')
    }

    getSignOut(){
        return cy.get('li').contains('Sign out')
    }
   
    getSignOutMenu(){
        return cy.get('.w3')
    }

}

//export default new HomePage();

export default HomeLoginPage;