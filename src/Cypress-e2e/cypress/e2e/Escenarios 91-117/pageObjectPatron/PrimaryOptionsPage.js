class PrimaryOptionsPage
{
    getOptionsMarkdownPage(){ 
        return  cy.get('.mb-0').find('button').contains('Markdown').click();
    }
    getOptionsImagePage(){ 
        return  cy.get('.mb-0').find('button').contains('Image').click();
    }
    getOptionsProductPage(){ 
        return  cy.get('.mb-0').find('button').contains('Product').click();
    }
    getOptionsHtmlPage(){ 
        return  cy.get('.mb-0').find('button').contains('HTML').click();
    }  
    getOptionsGalleryPage(){ 
        return  cy.get('.mb-0').find('button').contains('Gallery').click();
    }
    getOptionsDividerPage(){ 
        return  cy.get('.mb-0').find('button').contains('Divider').click();
    }
    getOptionsBookmarkPage(){ 
        return  cy.get('.mb-0').find('button').contains('Bookmark').click();
    }
    getOptionsCalloutPage(){ 
        return  cy.get('.mb-0').find('button').contains('Callout').click();
    }
    getOptionsVideoPage(){ 
        return  cy.get('.mb-0').find('button').contains('Video').click();
    }
    getOptionsFilePage(){ 
        return  cy.get('.mb-0').find('button').contains('File').click();
    }
    getOptionsAudioPage(){ 
        return  cy.get('.mb-0').find('button').contains('Audio').click();
    }
    getOptionsOtherPage(){ 
        return  cy.get('.mb-0').find('button').contains('Other..').click();
    }
    getOptionsYouTubePage(){ 
        return  cy.get('.mb-0').find('button').contains('YouTube').click();
    }
    getOptionsXPage(){ 
        return  cy.get('.mb-0').find('button').contains('X (formerly Twitter)').click();
    }
    getOptionsUnsplashPage(){ 
        return  cy.get('.mb-0').find('button').contains('Unsplash').click();
    }
    getOptionsVimeoPage(){ 
        return  cy.get('.mb-0').find('button').contains('Vimeo').click();
    }
    getOptionsCodePenPage(){ 
        return  cy.get('.mb-0').find('button').contains('CodePen').click();
    }
    getOptionsSpotifyPage(){ 
        return  cy.get('.mb-0').find('button').contains('Spotify').click();
    }
    getOptionsSoundCloudPage(){ 
        return  cy.get('.mb-0').find('button').contains('SoundCloud').click();
    } 
    getOptionsConfirm(){ 
        return cy.get('.kg-prose').find('input').click().type('{enter}')          
    }
    getOptionsChange(){ 
        return cy.get('.gh-post-settings').click()         
    }
    getOptionsUrlChange(){ 
        return cy.get('.gh-input-icon').find('input').should('be.visible').click({force: true}).clear({force: true}).type('Holaaa', {force: true})          
    }
    getOptionsPageDateChange(){ 
        return cy.get('.gh-date-time-picker-date').find('input').click().type('202130')          
    }
    getOptionsConfirmError(){ 
        return cy.get('.kg-prose').find('span').should('exist').contains('There was an error when parsing the URL.')          
    }
   
    
}

export default PrimaryOptionsPage