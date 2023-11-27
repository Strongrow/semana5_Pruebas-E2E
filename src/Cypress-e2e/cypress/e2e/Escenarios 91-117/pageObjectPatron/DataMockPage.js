class DataMockPage{
    getOptionsCreateHtml()
    { 
        return cy.fixture('MOCK_DATA').then(mockData => {               
            cy.get('.cm-scroller').click().type(mockData.Html)  
        }) 
    }

    getOptionsCreateMarkdown()
    { 
        return cy.fixture('MOCK_DATA').then(mockData => {               
            cy.get('.markdown-editor').click().type(mockData.Markdown)  
        }) 
    }
    
    getOptionsCreateDivider()
    { 
        return cy.fixture('MOCK_DATA').then(mockData => {               
            cy.get('.kg-prose').click().type(mockData.Divider)  
        }) 
    }

    getOptionsCreateUpvideo()
    { 
        return cy.fixture('MOCK_DATA').then(mockData => {      
            cy.get('.not-kg-prose').find('button').click().selectFile(mockData.video, { action: 'drag-drop' })            
        }) 
    }

    getOptionsCreateUpfile()
    { 
        return cy.fixture('MOCK_DATA').then(mockData => {      
            cy.get('.kg-prose').find('button').click().selectFile(mockData.file, { action: 'drag-drop' })            
        }) 
    }

    getOptionsCreateUpaudio()
    { 
        return cy.fixture('MOCK_DATA').then(mockData => {      
            cy.get('.kg-prose').find('button').click().selectFile(mockData.audio, { action: 'drag-drop' })            
        }) 
    }

    getOptionsCreateUpimage()
    { 
        return cy.fixture('MOCK_DATA').then(mockData => {      
            cy.get('.not-kg-prose').find('button').click().selectFile(mockData.image, { action: 'drag-drop' })
        }) 
    }

    getOptionsCreateUpyoutube()
    { 
        return cy.fixture('MOCK_DATA').then(mockData => {      
            cy.get('.kg-prose').find('input').click().type(mockData.youtube)           

        }) 
    }

    getOptionsCreateUpXtwitter()
    { 
        return cy.fixture('MOCK_DATA').then(mockData => {      
            cy.get('.kg-prose').find('input').click().type(mockData.xtwitter)           

        }) 
    }

    getOptionsCreateVimeo()
    { 
        return cy.fixture('MOCK_DATA').then(mockData => {      
            cy.get('.kg-prose').find('input').click().type(mockData.vimeo)           

        }) 
    }

    getOptionsCreateCodePen()
    { 
        return cy.fixture('MOCK_DATA').then(mockData => {      
            cy.get('.kg-prose').find('input').click().type(mockData.codepen)           

        }) 
    }

    getOptionsCreateSpotify()
    { 
        return cy.fixture('MOCK_DATA').then(mockData => {      
            cy.get('.kg-prose').find('input').click().type(mockData.spotify)           

        }) 
    }
    getOptionsCreateSoundCloud()
    { 
        return cy.fixture('MOCK_DATA').then(mockData => {      
            cy.get('.kg-prose').find('input').click().type(mockData.soundcloud)           

        }) 
    }

    getOptionsCreateProduct()
    { 
        return cy.fixture('MOCK_DATA').then(mockData => { 
            cy.get('.not-kg-prose.group.relative.mb-4.w-full.rounded > div > div > button').find('g').click().selectFile(mockData.image, { action: 'drag-drop' })               
        }) 
    }

    getOptionsCreateUpLinkOther()
    { 
        return cy.fixture('MOCK_DATA').then(mockData => {      
            cy.get('.kg-prose').find('input').click().type(mockData.linkOther)           

        }) 
    }

    getOptionsPageDate()
    {
        return cy.fixture('MOCK_DATA').then(mockData => {   
            cy.get('.gh-date-time-picker-time').find('input').should('be.visible').click({force: true}).clear({force: true}).type(mockData.Date, {force: true})          
        })
    }

    getOptionsPageDateError()
    {
        return cy.fixture('MOCK_DATA').then(mockData => {   
            cy.get('.gh-date-time-picker-time').find('input').should('be.visible').click({force: true}).clear({force: true}).type(mockData.DateError, {force: true})          
        })
    }

}

export default DataMockPage;