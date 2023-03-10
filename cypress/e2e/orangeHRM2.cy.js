
const timeOut = {timeOut: 100000}

describe ('OrangeHRM Website Testing', function(){


    it('Verify Title', function(){
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.title().should('eq','OrangeHRM')
    })


    it('Verify Title (false)', function(){
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.title().should('eq','OrangeHRM123')
    })




})