/// <reference types="cypress"/>

it('Supplier Enlistment', function() {
  cy.visit('http://testing.edp.gov.bd/')
  //Change User Name
  cy.get('input[name="username"]').type('basir')
  //Change Password
  cy.get('input[name="password"]').type('Sqa@12345')
  cy.wait(500)
  cy.get('.MuiButton-contained').click()
  cy.wait(500)
  cy.get('.css-1yu1vd9 > .MuiDrawer-root > .MuiPaper-root > .left-menu > .left-menu-list > [style="position: relative; overflow: hidden; width: 100%; height: 100%;"] > [style="position: absolute; inset: 0px; overflow: scroll; margin-right: -17px; margin-bottom: -17px;"] > .MuiList-root > :nth-child(2) > .MuiListItemText-root > .MuiTypography-root').click()
  cy.get('.MuiCollapse-wrapperInner > .MuiList-root > a > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root').click()
  cy.get('.css-19i8qlo > .MuiButtonBase-root').click()

  cy.wait(2000)

  // default select অন্যান্য
  // uncomment for select অবঃ সামরিক সদস্য
  //cy.get('.css-1kfhhld > .MuiBox-root > .MuiFormGroup-root > :nth-child(2) > .MuiButtonBase-root > .PrivateSwitchBase-input').click()
  
  

  //১৫। আয়কর সংক্রান্ত তথ্যাবলী বাৎসরিক ক্রমানুসারে (০৩ বৎসরের): *
  cy.get(':nth-child(14) > .singleColumnRow > .subFormButtonContainer > .subFormIconContainer > .MuiButtonBase-root').click()
  cy.wait(500)
  /*১ম বৎসর*/
  //ক। ই টি আই এনঃ *
  cy.get('input[name="incomeTaxInformationParams.0.tinNo"]').type('224188377547')
  cy.wait(500)
  //খ। ট্যাক্স বৎসরঃ *
  //cy.get('.MuiBox-root > .MuiInputBase-root > .MuiSelect-select > .MuiSvgIcon-root').click()
  //cy.get('.MuiSvgIcon-root').click()
  //cy.get('#mui-component-select-incomeTaxInformationParams\.0\.taxYear').click()
  //cy.get('svg.MuiSvgIcon-root').click();
  //cy.wait(500)
  //গ। ব্যক্তিগত কর পরিশোধের পরিমাণঃ *
  //ঘ। প্রতিষ্ঠানের কর পরিশোধের পরিমাণঃ *
  //আয়কর সনদ*
  //আয়কর রশিদ*


})