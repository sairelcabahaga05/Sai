
const timeOut = {timeout:100000}

describe('SWBT Test', ()=>{

it('Valid Login', ()=>{

    cy.visit('https://swbt-43857.alpha.reportheld-saas.com/office/main.html',timeOut)

    cy.get('#username')
        .should('be.visible')
        .type('swbt-it-admin')

    cy.get('#password')
     .should('be.visible')
     .type('testOJT**123')

    cy.get('.login')
        .should('be.visible')
        .click()





})


/*
it('Login with invalid username', ()=>{

    cy.visit('https://swbt-43857.alpha.reportheld-saas.com/office/main.html',timeOut)


})


it('Login with invalid password', ()=>{

    cy.visit('https://swbt-43857.alpha.reportheld-saas.com/office/main.html',timeOut)


})

*/


})