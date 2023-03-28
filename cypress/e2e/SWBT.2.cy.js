const timeOut = {timeout: 1000000}

import { CreateUser } from "./pages/login_pages"

const createUser = new CreateUser()

beforeEach(function(){cy.visit('https://swbt-43857.alpha.reportheld-saas.com/admin/main.html',timeOut)})

describe('Swbt Assessments', function(){

it ('Login', function(){
   
    createUser.enterUsername('swbt-it-admin',timeOut)
    createUser.enterPassword('testOJT**123',timeOut)
    createUser.clickLogin()

    cy.wait(150000) 
    cy.get('.users',timeOut).click() 
       
    createUser.enternewUsername('Sasai Cabahaga',timeOut)
    createUser.enternewPassword('12345678',timeOut)
    createUser.clickLogin()

    cy.contains('First Name').parent().within(() => { cy.get('input',timeOut).first().type('Saiiirel');});
    cy.get('.recommended-input',timeOut).should('be.visible').eq(1) .type('Cabahaga');

    createUser.enterbirthdate('2001-07-12',timeOut)
    createUser.enteremail('scabahaga@ssct.edu.ph',timeOut)
    createUser.entercontactNumber('09505001514',timeOut)

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

    //Save All Inputs
    cy.contains('Save',timeOut).should('be.visible').click()
     cy.get('[data-bind="visible: !hideOkButton()"] > .second > .btn',timeOut) .should('be.visible').click()

    cy.wait(10000)
    cy.get('.scrollable > .profile',timeOut).click()
    cy.contains('Sign Out',timeOut).click();
    cy.get('.second > .btn',timeOut).click()
    

})
})