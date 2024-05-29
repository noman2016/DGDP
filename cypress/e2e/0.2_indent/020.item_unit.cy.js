/// <reference types="cypress"/>

it('Login DPGDP', function() {

  cy.visit('http://training.edp.gov.bd/')
  //Change User Name
  cy.get('input[name="username"]').type('ba.ordtest.ad')
  //Change Password
  cy.get('input[name="password"]').type('Sqa@12345')
  cy.get('.MuiButton-contained').click()
  cy.wait(300)

  cy.get('.inactive > .MuiChip-label').click()
  cy.wait(200)

  //প্রি-ইন্ডেন্ট প্রক্রিয়া
  cy.get('.css-1yu1vd9 > .MuiDrawer-root > .MuiPaper-root > .left-menu > .left-menu-list > [style="position: relative; overflow: hidden; width: 100%; height: 100%;"] > [style="position: absolute; inset: 0px; overflow: scroll; margin-right: -17px; margin-bottom: -17px;"] > .MuiList-root > :nth-child(6) > .MuiListItemText-root > .MuiTypography-root')
  .click()


  //আইটেম ইউনিট
  cy.get('[href="/admin/pre-indent-process/item-unit"] > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
  .click()
  //আইটেম ইউনিটের নাম (ইংরেজি)*
  //cy.get('input[name="name"]').click().type('test_KG')
  //আইটেম ইউনিটের নাম (বাংলা)*
  cy.get('input[name="nameBN"]').type('টেস্ট_কেজি ')

})
