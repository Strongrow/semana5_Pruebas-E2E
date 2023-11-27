import {faker} from '@faker-js/faker'
class OptionsOnPage
{
    getMenuAdminPage(){
        return cy.get('.gh-nav-top').find('a').contains('Pages').click();
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
    getCreateNewPage(){
        return cy.get('.view-actions').find('a').contains('New page').click();  
    }
    getTitleNewPage(){
        return cy.get('.gh-editor-title-container').click().type(faker.commerce.productName());  
    }
    getPublishButton(){
        return cy.getByData('publish-flow').click()
    }
    getPublishOptionsButton(){
        return cy.get('.settings-menu-toggle').click()
    }
    getContentPage(){
        return cy.getDataK('editor').click().type(faker.commerce.productDescription());
    }
    getContentButtonPage(){
        return cy.getDataK('editor').click()
    }
    getOptionsButtonPage(){
        return  cy.get('.absolute').find('button').click();
    }
    getContinueButton(){
        return cy.get('.gh-publish-cta').click()
    }    
    getConfirmPublishPage(){
        return cy.getByData('confirm-publish').click()
    }
    getViewPublishPage(){
        return cy.get('.gh-post-bookmark-container').click()
    }
}
export default OptionsOnPage;