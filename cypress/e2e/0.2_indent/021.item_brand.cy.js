/// <reference types="cypress"/>

it('Login DPGDP', function() {

  cy.visit('http://training.edp.gov.bd/')
  //Change User Name
  cy.get('input[name="username"]')
  .type('ba.ordtest.ad')
  //Change Password
  cy.get('input[name="password"]')
  .type('Sqa@12345')
  cy.get('.MuiButton-contained')
  .click()
  cy.wait(5000)

  cy.get('.inactive > .MuiChip-label')
  .click()
  cy.wait(200)

  //প্রি-ইন্ডেন্ট প্রক্রিয়া
  cy.get('.css-1yu1vd9 > .MuiDrawer-root > .MuiPaper-root > .left-menu > .left-menu-list > [style="position: relative; overflow: hidden; width: 100%; height: 100%;"] > [style="position: absolute; inset: 0px; overflow: scroll; margin-right: -17px; margin-bottom: -17px;"] > .MuiList-root > :nth-child(6) > .MuiListItemText-root > .MuiTypography-root')
  .click()
  cy.wait(250)


  //আইটেম ব্র্যান্ড
  cy.get('[href="/admin/pre-indent-process/item-brand"] > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
  .click()
  //আইটেমের ব্র্যান্ডের নাম (ইংরেজি)*
  cy.get('#simple-tabpanel-0 > div > div > div.MuiBox-root.css-t52if6 > div > div.MuiBox-root.css-0 > div > form > div > div:nth-child(1) > div:nth-child(1) > div.MuiBox-root.css-79elbk > div > div')
  .click()
  .type('xiaomi')
  cy.wait(250)

  //আইটেমের ব্র্যান্ডের নাম (বাংলা)*
  cy.get('#simple-tabpanel-0 > div > div > div.MuiBox-root.css-t52if6 > div > div.MuiBox-root.css-0 > div > form > div > div:nth-child(1) > div:nth-child(2) > div.MuiBox-root.css-79elbk > div > div')
  .click()
  //.type('টেস্ট কেজি')
  .type('শাওমি ')
  cy.wait(250)

  //Add Button
  cy.get('.MuiButton-contained')
  .click()
  cy.wait(200)

  //Are You Sure to Submit Data?
  cy.get('.swal2-confirm')
  .click()

})
