class LoginPage{
    getVisit(){
        return  cy.fixture('version').then(version => {
            cy.visit(version.v4)
            })
    }

    getLoginIdBox()
    {
        return cy.getByName("identification")
    }

    getLoginPasswordBox()
    {
        return cy.getByName("password")
    }

    getEmailAndPassword()
    {
        return cy.fixture('users').then(users => {               
            this.getLoginIdBox().type(users.email)
            this.getLoginPasswordBox().type(users.password);
            this.getLoginSignIn().click()
        }) 
    }
    getLoginSignIn()
    {
        return cy.getByType('submit')
    }

}
export default LoginPage;