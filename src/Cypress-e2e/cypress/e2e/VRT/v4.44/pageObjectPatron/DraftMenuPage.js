class DraftMenuPage
{
    getMenuAdminDrafts(){
        return cy.get('.gh-nav-top').find('a').contains('Drafts').click();
    }
    getContentFilterType(){
        return cy.get('.gh-contentfilter-type > .ember-view').click();
    }
    getMenuAdminDashboard(){
        return cy.get('.gh-nav-top').find('a').contains('Dashboard').click();
    }
    getContentFilterAuthor(){
        return cy.get('.gh-contentfilter-author > .ember-view').click();
    }
    getContentFilterTag() {
        return cy.get('.gh-contentfilter-tag > .ember-view').click();
    }
    getContentFilterSort() {
        return cy.get('.gh-contentfilter-sort > .ember-view').click();
    }
    
}
export default DraftMenuPage;