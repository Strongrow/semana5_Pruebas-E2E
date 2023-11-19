class AdminMenuPage
{
    getMenuAdmin(){
        return cy.get('.gh-nav-top').find('a')
    }

    getMenuAdminScheduled(){
        return cy.get('.gh-nav-top').find('a').contains('Scheduled').click();
    }

    getMenuAdminDashboard(){
        return cy.get('.gh-nav-top').find('a').contains('Dashboard').click();
    }

    getContentFilterType(){
        return cy.get('.gh-contentfilter-type > .ember-view')
    }

    getAllPost(){
        return cy.get('.no-posts-box > .no-posts').find('a').contains('Show all posts').click();
    }

    getContentFilterAuthor(){
        return cy.get('.gh-contentfilter-author > .ember-view')
    }

    getContentFilterVisibility(){
        return  cy.get('.gh-contentfilter-visibility')
    }

    getContentFilterTag() {
        return cy.get('.gh-contentfilter-tag > .ember-view')
    }
    
}

export default AdminMenuPage;