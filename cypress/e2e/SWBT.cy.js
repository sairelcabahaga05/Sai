
const timeOut= {timeout:1000000}

describe('SWBT Assessment', ()=>{


it('Creat New User',()=>{

    //Visit the Website
    cy.visit('https://swbt-43857.alpha.reportheld-saas.com/admin/main.html',timeOut)
   
        
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

    

    cy.wait(150000) //waiting for the loading to be done before executing next step
    cy.get('.users',timeOut).click() //Click Create User Icon
       
    //Input User Username
    cy.get(':nth-child(2) > .recommended-input',timeOut)
        .should('be.visible')
        .type('Cyrilllllll Cabahaga')


    //Input User Password
    cy.get(':nth-child(3) > .recommended-input',timeOut)
        .should('be.visible')
        .type('12345678')


    //Input User Firstname
    cy.contains('First Name').parent().within(() => {
        cy.get('input', timeOut)
          .should('be.visible')
          .first()
          .type('Cyrillllll');
      });
      

    //Input User Lastname 
    cy.get('.recommended-input',timeOut)
        .should('be.visible')
        .eq(1) 
        .type('Cabahaga');
      

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
    cy.get('.recommended-input-primary-group > .btn-group > .btn > .filter-option',timeOut).should('be.visible').click()
    cy.get('.recommended-input-primary-group > .btn-group > .open > .dropdown-menu > [data-original-index="1"] > a > .text',timeOut).should('be.visible').click()
    

    //Choose User Configuration Preset
    cy.get(':nth-child(8) > .btn-group > .btn > .filter-option',timeOut).should('be.visible').click()
    cy.get(':nth-child(8) > .btn-group > .open > .dropdown-menu > .selected > a',timeOut).should('be.visible').click()
    
    //Choose Additional Group
    cy.get('.item-with-add-button > .btn-group > .btn',timeOut).should('be.visible').click()
    cy.get('.item-with-add-button > .btn-group > .open > .dropdown-menu > [data-original-index="2"] > a',timeOut).should('be.visible').click()
    cy.get('.item-with-add-button > .groupxs-btn',timeOut).should('be.visible').click()

    //To Save All Inputs
    cy.contains('Save',timeOut)
        .should('be.visible')
        .click()

    //To Confirm Inputs
    cy.get('.wrapper',timeOut)
        .should('be.visible')
        .and('contain','Are you sure you want to create new user?')

    //Click the OK button
    cy.get('[data-bind="visible: !hideOkButton()"] > .second > .btn',timeOut) .should('be.visible').click()

    cy.wait(10000)
    //Click Profile Icon
    cy.get('.scrollable > .profile',timeOut).click()
        .should('be.visible')

    //Click to Sign Out
    cy.contains('Sign Out',timeOut).click();
    cy.get('.address > span').should('be.visible')

    //Confirm Sign Out
    cy.get('.second > .btn',timeOut) .should('be.visible').click()
    
    //Return 
    cy.visit('https://swbt-43857.alpha.reportheld-saas.com/admin/main.html',timeOut)
})


})