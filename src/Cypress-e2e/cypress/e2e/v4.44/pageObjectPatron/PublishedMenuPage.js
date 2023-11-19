class PublishedMenuPage
{
    getMenuAdminPublished(){
        return cy.get('.gh-nav-top').find('a').contains('Published').click();
    }
    getContentFilterType(){
        return cy.get('.gh-contentfilter-type > .ember-view').click();
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
    getMenuAdminDashboard(){
        return cy.get('.gh-nav-top').find('a').contains('Dashboard').click();
    }
}
export default PublishedMenuPage;