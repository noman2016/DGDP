/// <reference types="cypress"/>

it('Signup DPGDP', function() {

  cy.visit('http://testing.edp.gov.bd/')
  cy.get('.MuiButton-outlined').click()
  cy.get('input[name="fullName"]').type('Naser Uddin')
  cy.get('input[name="username"]').type('nasir')
  cy.get('input[name="email"]').type('nasir@gmail.com')
  cy.get('input[name="phone"]').type('01750671332')
  cy.get('input[name="password"]').type('Sqa@12345')
  cy.get('.MuiButton-contained').click()
  cy.get('#mui-component-select-identityType').click()
  cy.get('[data-value="NATIONAL_ID"]').click();
  cy.get('input[name="identityNumber"]').type('0123456789')
  cy.get('[data-testid="CalendarIcon"]').click();


})

/*it('Signin DPGDP', function() {

  cy.visit('http://testing.edp.gov.bd/')
  //cy.get('.MuiButton-outlined').click()
  cy.get('input[name="username"]').type('nasir')
  cy.get('input[name="password"]').type('Sqa@12345')
  cy.get('.MuiButton-contained').click()


})*/
