/// <reference types="cypress"/>

it('Supplier Enlistment', function() {
  cy.visit('http://testing.edp.gov.bd/')
  //Change User Name
  cy.get('input[name="username"]').type('basir')
  //Change Password
  cy.get('input[name="password"]').type('Sqa@12345')
  cy.get('.MuiButton-contained').click()
  cy.get('.css-1yu1vd9 > .MuiDrawer-root > .MuiPaper-root > .left-menu > .left-menu-list > [style="position: relative; overflow: hidden; width: 100%; height: 100%;"] > [style="position: absolute; inset: 0px; overflow: scroll; margin-right: -17px; margin-bottom: -17px;"] > .MuiList-root > :nth-child(2) > .MuiListItemText-root > .MuiTypography-root').click()
  cy.get('.MuiCollapse-wrapperInner > .MuiList-root > a > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root').click()
  cy.get('.css-19i8qlo > .MuiButtonBase-root').click()
  // default select অন্যান্য
  // uncomment for select অবঃ সামরিক সদস্য
  //cy.get('.css-1kfhhld > .MuiBox-root > .MuiFormGroup-root > :nth-child(2) > .MuiButtonBase-root > .PrivateSwitchBase-input').click()
  
  //cy.get('[data-testid="CameraAltIcon"]').click()
  //cy.get('input[name="supplierImagePath"]').click()
  //cy.get('.MuiSvgIcon-root.MuiSvgIcon-fontSizeMedium.css-1ylescl').click()
  cy.get('#simple-tabpanel-bio-data-bn > div > div > form > div > div.MuiBox-root.css-7ysju6 > div > div > div.MuiBox-root.css-tn0uso > div > div.MuiBox-root.css-8atqhb > div > div > div > div > div.fileNameContainer.MuiBox-root.css-8atqhb > label > input').click()

})