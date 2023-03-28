const timeOut = {timeout: 1000000}

//beforeEach(function(){cy.visit('https://flender.beta.reportheld.com/office/main.html?lng=en#sites/false',timeOut)})

describe('Create Protocol', function(){

    it ('Login with Valid Credentials', function(){

        cy.visit('https://flender.beta.reportheld.com/office/main.html?lng=en#sites/false',timeOut)

        cy.get('#username',timeOut).should('be.visible').type('user3') //Inputing Valid Username 
        cy.get('#password',timeOut).should('be.visible').type('123') //Inputing Valid Password
        cy.get('#login').should('be.visible').click()

    })

    it ('Login with Invalid Credentials', function(){

        cy.visit('https://flender.beta.reportheld.com/office/main.html?lng=en#sites/false',timeOut)

        cy.get('#username',timeOut).should('be.visible').type('user123') //Inputing Invalid Username 
        cy.get('#password',timeOut).should('be.visible').type('00000') //Inputing Invalid Username 
        cy.get('#login').should('be.visible').click()
        cy.get('.toast-message').should('contain', 'Access denied') //Error Notification Should Exist

    })


    it.only('Create Protocol', function(){

        cy.visit('https://flender.beta.reportheld.com/office/main.html?lng=en#sites/false',timeOut)

        cy.get('#username',timeOut).should('be.visible').type('user3')
        cy.get('#password',timeOut).should('be.visible').type('123')
        cy.get('#login').should('be.visible').click()


        //cy.get('.wrapper > .inner').should('be.visible').should('contain', 'Please be patient')
        cy.wait(200000)
        cy.get('.scrollable > .protocols',timeOut).should('be.visible').click() // To click the protocol icon

        cy.contains('Create protocol',timeOut).should('be.visible').click() // To click the protocol icon

        //cy.get('.right > .btn-group > .open > .dropdown-menu > [data-original-index="1"] > a',timeOut).should('be.visible').click()
        //cy.contains('FLENDER',timeOut).should('be.visible').click()

        //cy.get('select-powerplant-popup > base-popup > [data-bind="visible: showPopup, closeOnClick: showPopup"] > .popup > .wrapper > .alternative-contacts > .container-fluid > :nth-child(1) > .right > .btn-group > .open > .dropdown-menu > [data-original-index="0"] > a',timeOut).should('be.visible').click()
        //cy.get('select-powerplant-popup > base-popup > [data-bind="visible: showPopup, closeOnClick: showPopup"] > .popup > .wrapper > .alternative-contacts > .container-fluid > :nth-child(1) > .right > .btn-group > .open > .dropdown-menu > .selected > a',timeOut).should('be.visible').click()

        cy.get('div[class="button-container left"] button[title="FLENDER"]',timeOut).should('be.visible').click()
        cy.get('button[title="Voerde"]',timeOut).should('be.visible').click()
        cy.contains('Ok',timeOut).should('be.visible').click()

        cy.get('div[class="inner clearfix"]',timeOut).should('contain',"Are you sure you want to create a new protocol briefcase?")
        cy.contains('Ok',timeOut).should('be.visible').click()

        
    })




})