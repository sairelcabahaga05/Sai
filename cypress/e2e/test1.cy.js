
const timeOut = {timeout:10000}

it('Google Search', () =>{

cy.visit('https://google.com')

cy.get('.gLFyf').type('Automation Step by Step {Enter}')
cy.contains('Videos',timeOut).click()



})