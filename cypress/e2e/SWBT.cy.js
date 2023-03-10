
const timeOut= {timeout:1000000}

describe('Creating SWBT New User', ()=>{


it('Login',()=>{

    cy.visit('https://swbt-43857.alpha.reportheld-saas.com/admin/main.html',timeOut)
    //cy.get('.login-logo',timeOut).should('be.visible')
        
    //Enter Valid Username
    cy.get('#username',timeOut)
        .should('be.visible')
        .type('swbt-it-admin')

    //Enter Valid Password
    cy.get('#password',timeOut)
        .should('be.visible')
        .type('testOJT**123')

    //Click Login
    cy.get('#login',timeOut)
        .should('be.visible')
        .click()

    //Checking if its Loading
    cy.get('.wrapper > .inner',timeOut)
        .should('be.visible')
        .and('contain','Please be patient while data is loaded completely',timeOut)

    })



it('Go to Users',()=>{

    cy.get('.modalHost',timeOut)
        .should('be.visible')
        .click()

})

/*
it('Create a New User',()=>{

    cy.get('.modalHost',timeOut)
        .should('be.visible')
        .click()

})
*/


})