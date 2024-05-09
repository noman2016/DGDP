/// <reference types="cypress"/>

it('Login DPGDP', function() {

  cy.visit('http://testing.edp.gov.bd/')
  //Change User Name
  cy.get('input[name="username"]').type('basir')
  //Change Password
  cy.get('input[name="password"]').type('Sqa@12345')
  cy.get('.MuiButton-contained').click()
})
