const timeOut = {timeout:100000}

it('Assertion Demo', () =>{
cy.visit('https://example.cypress.io')

cy.contains('get').click()

cy.get('#query-btn')
  .should('contain','Button')
  .and('have.class', 'query-btn')
  .and('be.visible')
  .and('be.enabled')

})