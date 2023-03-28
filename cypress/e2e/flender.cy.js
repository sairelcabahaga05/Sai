const timeOut = {
    timeout: 1000000
}

//beforeEach(function(){cy.visit('https://flender.beta.reportheld.com/office/main.html?lng=en#sites/false',timeOut)})

describe('Create Protocol', function () {

    it('Login with Valid Credentials', function () {

        cy.visit('https://flender.beta.reportheld.com/office/main.html?lng=en#sites/false', timeOut)

        cy.get('#username', timeOut).should('be.visible').type('t-sairel') //Inputing Valid Username 
        cy.get('#password', timeOut).should('be.visible').type('asdfasdf') //Inputing Valid Password
        cy.get('#login').should('be.visible').click()

    })

    it('Login with Invalid Credentials', function () {

        cy.visit('https://flender.beta.reportheld.com/office/main.html?lng=en#sites/false', timeOut)

        cy.get('#username', timeOut).should('be.visible').type('user123') //Inputing Invalid Username 
        cy.get('#password', timeOut).should('be.visible').type('00000') //Inputing Invalid Username 
        cy.get('#login').should('be.visible').click()
        cy.get('.toast-message').should('contain', 'Access denied') //Error Notification Should Exist

    })


    it.only('Create Protocol', function () {

        cy.visit('https://flender.beta.reportheld.com/office/main.html?lng=en#sites/false', timeOut)

        cy.get('#username', timeOut).should('be.visible').type('t-sairel')
        cy.get('#password', timeOut).should('be.visible').type('asdfasdf')
        cy.get('#login').should('be.visible').click()
        // cy.get('.wrapper > .inner').should('be.visible').should('contain', 'Please be patient while data is loaded completely')


        cy.wait(80000)
        cy.get('.scrollable > .protocols', timeOut).should('be.visible').click() // To click the protocol icon
        cy.contains('Create protocol', timeOut).should('be.visible').click() // To click the protocol icon

        cy.wait(5000)
        cy.get('.button-container.left').first().within(() => {
            cy.get('button').click()
            cy.contains('FLENDER').click()
        })
        cy.wait(5000)
        cy.get('.button-container.right').first().within(() => {
            cy.get('button').click()
            cy.contains('Voerde').click()
        })
        cy.contains('Ok', timeOut).should('be.visible').click()

        cy.get('div[class="inner clearfix"]', timeOut).within(() => {
            cy.contains("Are you sure you want to create a new protocol briefcase?").should('be.visible') 
            cy.contains('Ok', timeOut).should('be.visible').click()
        })

        cy.get('div[class="inner clearfix"]', timeOut).within(() => {
            cy.contains("Briefcase name").should('be.visible') 
            cy.get('.black-text-input').should('be.visible').should('include.value', 'Befundbericht')
            cy.contains('Ok', timeOut).should('be.visible').click()
        })

    })




})