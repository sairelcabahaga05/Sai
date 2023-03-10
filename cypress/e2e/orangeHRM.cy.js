
const timeOut ={timeout:100000}

describe('OrangHRM Website', function(){
it ('passes', function(){
        
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',timeOut)
        cy.title().should('eq','OrangeHRM')


    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input',timeOut).should('be.visible').type('Admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input',timeOut).should('be.visible').type('admin123')
    cy.get('.oxd-button').click()



    cy.contains('Admin',timeOut).should('be.visible').click()
        cy.contains('Add',timeOut).should('be.visible').click() 
        cy.get('.oxd-autocomplete-text-input > input',timeOut).should('be.visible').type('Sairel Mae Cabahaga')
     
//cy.get('oxd-icon bi-caret-down-fill oxd-select-text--arrow',timeOut)
//.select('Admin')
//.should('have.value','Admin')


    cy.contains('Time',timeOut).should('be.visible').click()
        cy.get('.oxd-autocomplete-text-input > input').should('be.visible').type('Charlie Carter {Enter}')
      

    cy.contains('My Info',timeOut).should('be.visible').click()
        cy.get('.oxd-userdropdown-tab').should('be.visible').click()
        cy.get(':nth-child(3) > .oxd-userdropdown-link').should('be.visible').click()
    
        cy.get(':nth-child(1) > .oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible').type('admin123')
        cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible').type('S@irel123')
        cy.get('.user-password-row > .oxd-grid-2 > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should('be.visible').type('S@irel123')
        cy.contains('Save').should('be.visible').click()


    cy.contains('Buzz').should('be.visible').click()
        cy.get('.oxd-buzz-post-input').should('be.visible').type('Feeling Blessed <3')
        cy.contains('Post').should('be.visible').click()
        cy.get('.orangehrm-buzz-create-post-actions > :nth-child(1)').should('be.visible').click()


})
})