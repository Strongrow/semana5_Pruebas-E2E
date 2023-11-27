import {faker} from '@faker-js/faker'
class DataFakerPage{
    getOptionsCreateBookmark()
    { 
        return cy.fixture('MOCK_DATA').then(mockData => {               
            cy.get('.kg-prose').find('input').click().type(faker.internet.url())  
        }) 
    }

    getOptionsCreateCallout()
    { 
        return cy.fixture('MOCK_DATA').then(mockData => {    
            cy.get('[data-testid="callout-bg-blue"]').click().type(faker.lorem.lines(1))               
        }) 
    }

    getOptionsCreateVideoOther()
    { 
        return cy.fixture('MOCK_DATA').then(mockData => {               
            cy.get('.kg-prose').find('input').click().type(faker.internet.url())  
        }) 
    }
   
    getOptionsCreateProductName()
    { 
        return cy.fixture('MOCK_DATA').then(mockData => {               
            cy.get('.kg-prose').find('p').click().type(faker.commerce.productName())  
        }) 
    }
}

export default DataFakerPage;