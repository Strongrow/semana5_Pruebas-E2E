class AdminMenuPage
{
    getMenuAdmin(){
        return cy.get('.gh-nav-top').find('a')
    }

    getContentFilterType(){
        return cy.get('.gh-contentfilter-type > .ember-view')
    }

    getAllPost(){
        return cy.get('.no-posts-box > .no-posts').find('a')
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