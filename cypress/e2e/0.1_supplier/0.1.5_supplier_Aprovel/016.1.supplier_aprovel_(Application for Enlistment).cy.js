/// <reference types="cypress"/>

import SupplierCy from "../../../Pages/Supplier/Supplier.cy"

it('', function() {
  cy.visit('http://testing.edp.gov.bd/')
  //Change User Name
  cy.get('input[name="username"]')
  .type('oth.dgdp.ddreg')
  //Change Password
  cy.get('input[name="password"]')
  .type('Sqa@12345')
  cy.wait(200)
  cy.get('.MuiButton-contained')
  .click()
  cy.wait(3000)

  //সরবরাহকারী ব্যবস্থাপনা
  cy.get('#__next > div > nav > div > div > div > ul > div > div:nth-child(1) > ul > a:nth-child(4) > div')
  .click()
  cy.wait(250)

  //তালিকাভুক্তির জন্য আবেদন
  cy.get(':nth-child(1) > .menu-card-body > :nth-child(1) > a')
  .click()
  cy.wait(250)

  //আবেদনকারীর নাম (User Search)
  SupplierCy.searchSupplierUserforAprovel1.supplierApprovalforEnlistment()
  cy.wait(2500)

  //বিস্তারিত
  cy.get(':nth-child(2) > .css-1rp1wqy > a > .MuiButtonBase-root')
  .click()
  cy.wait(250)

  //তালিকাভুক্তির জন্য আবেদন
  cy.get('.uiCardHeader')
  .click()
  cy.wait(250)

  //আবেদনপত্র
  cy.get('.MuiListItem-root > .MuiButtonBase-root')
  .click({ force: true })
  cy.wait(2500)

  //Close
  cy.get('body > div.MuiDialog-root.MuiModal-root.css-16fhjmw > div.MuiDialog-container.MuiDialog-scrollPaper.css-ekeie0 > div > div.MuiBox-root.css-1iqmk07 > div.MuiBox-root.css-70qvj9 > div.MuiBox-root.css-1nb95ps > svg')
  .click({ force: true })
  cy.wait(250)
  
  //ট্রেড লাইসেন্স এর ফটোকপি
  cy.get('.css-1m4q5om > :nth-child(1) > .uiCard > .uiCardHeader > .css-0 > .MuiBox-root')
  .click({ force: true })
  cy.wait(250)

  //ব্যাঙ্ক সলভেন্সি
  cy.get(':nth-child(2) > .uiCard > .uiCardHeader')
  .click()
  cy.wait(250)

  //আয়কর সংক্রান্ত তথ্যাবলী বাৎসরিক ক্রমানুসারে (০৩ বৎসরের)
  cy.get(':nth-child(3) > .uiCard > .uiCardHeader > .css-0 > .MuiBox-root')
  .click()
  cy.wait(250)

  //পেমেন্ট স্ট্যাটাস
  cy.get(':nth-child(4) > .uiCard > .uiCardHeader')
  .click()
  cy.wait(250)

  //পূর্ববর্তী
  cy.get('.css-qd3ol1 > .MuiButtonBase-root')
  .click()
  cy.wait(250)

  //আবেদনকারীর নাম (User Search)
  SupplierCy.searchSupplierUserforAprovel1.supplierApprovalforEnlistment()
  cy.wait(250)

  //https://github.com/cypress-io/cypress/issues/5471
  //Sharing Context with an object is undefined upon 2nd usage

  //Action
  cy.get('[data-testid="MoreHorizIcon"] > path')
  .click()
  cy.wait(250)

  //অনুমোদন
  cy.get('.MuiPaper-root > .MuiList-root > .MuiButtonBase-root')
  .click()
  cy.wait(250)

  //Yes
  cy.get('.swal2-confirm')
  .click()
  cy.wait(250)

})