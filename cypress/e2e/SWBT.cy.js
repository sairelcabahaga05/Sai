
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

    

    cy.wait(200000) //waiting for the loading to be done
    cy.get('.users',timeOut).click() //to click user icon
       
    //Input User Username
    cy.get(':nth-child(2) > .recommended-input',timeOut)
        .should('be.visible')
        .type('Sairel Cabahaga')

    //Input User Password
    cy.get(':nth-child(3) > .recommended-input',timeOut)
        .should('be.visible')
        .type('12345678')

/*
    cy.get('//input[@data-bind="value: firstName"]',timeOut)
        .should('be.visible')
        .type('Sairel')

        
    cy.get('//input[@data-bind="value: lastName"]',timeOut)
        .should('be.visible')
        .type('Cabahaga')
*/

    //Input User Birthdate
    cy.get('[type="date"]',timeOut)
        .should('be.visible')
        .type('2001-07-12')
    
    //Input User Email Add
    cy.get('[data-bind="value: email"]',timeOut)
        .should('be.visible')
        .type('scabahaga@ssct.edu.ph')

    //Input User Contact Number
    cy.get('[data-bind="value: phone"]')
        .should('be.visible')
        .type('09505001514')

    //Choose User Primary Group
    cy.get('.recommended-input-primary-group > .btn-group > .btn > .filter-option',timeOut).click()
    cy.get('.recommended-input-primary-group > .btn-group > .open > .dropdown-menu > [data-original-index="1"] > a > .text').click()
    
    //Choose User Configuration Preset
    cy.get(':nth-child(8) > .btn-group > .btn > .filter-option',timeOut).click()
    cy.get(':nth-child(8) > .btn-group > .open > .dropdown-menu > .selected > a').click()
    
    //Choose Additional Group
    cy.get('.item-with-add-button > .btn-group > .btn').click()
    cy.get('.item-with-add-button > .btn-group > .open > .dropdown-menu > [data-original-index="2"] > a').click()
    cy.get('.item-with-add-button > .groupxs-btn').click()

    //To Save All Inputs
    cy.contains('Save')
        .should('be.visible')
        .click()
 
/*
    //To Confirm Inputs
    cy.get('.wrapper',timeOut)
        .should('be.visible')
        .and('contain','Are you sure you want to create new user?')

*/

})


})