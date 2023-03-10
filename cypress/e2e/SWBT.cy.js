
const timeOut= {timeout:100000}

describe('SWBT Testing', ()=>{


it('Login with valid all',()=>{

    cy.visit('https://swbt-43857.alpha.reportheld-saas.com/admin/main.html',timeOut)
    cy.get('.login-logo',timeOut).should('be.visible')
        
    cy.get('#username',timeOut)
        .should('be.visible')
        .type('swbt-it-admin')


    cy.get('#password',timeOut)
        .should('be.visible')
        .type('testOJT**123')

    cy.get('#login',timeOut)
        .should('be.visible')
        .click()
    })

/*
it('Login with invalid pass',()=>{

    cy.visit('https://swbt-43857.alpha.reportheld-saas.com/admin/main.html')
    
    
    })

 it('Login with invalid pass',()=>{

     cy.visit('https://swbt-43857.alpha.reportheld-saas.com/admin/main.html')
        
        
     }) 
*/
})