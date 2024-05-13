/// <reference types="cypress"/>

it('Supplier Enlistment', function() {
  cy.visit('http://testing.edp.gov.bd/')
  //Change User Name
  cy.get('input[name="username"]').type('basir')
  //Change Password
  cy.get('input[name="password"]').type('Sqa@12345')
  cy.wait(500)
  cy.get('.MuiButton-contained').click()
  cy.wait(5000)
  cy.get('.css-1yu1vd9 > .MuiDrawer-root > .MuiPaper-root > .left-menu > .left-menu-list > [style="position: relative; overflow: hidden; width: 100%; height: 100%;"] > [style="position: absolute; inset: 0px; overflow: scroll; margin-right: -17px; margin-bottom: -17px;"] > .MuiList-root > :nth-child(2) > .MuiListItemText-root > .MuiTypography-root').click()
  cy.get('.MuiCollapse-wrapperInner > .MuiList-root > a > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root').click()
  cy.get('.css-19i8qlo > .MuiButtonBase-root').click()
  cy.wait(500)

  // default select অন্যান্য
  // uncomment for select অবঃ সামরিক সদস্য
  //cy.get('.css-1kfhhld > .MuiBox-root > .MuiFormGroup-root > :nth-child(2) > .MuiButtonBase-root > .PrivateSwitchBase-input').click()
  
  

  //১৫। আয়কর সংক্রান্ত তথ্যাবলী বাৎসরিক ক্রমানুসারে (০৩ বৎসরের): *
  //cy.get(':nth-child(14) > .singleColumnRow > .subFormButtonContainer > .subFormIconContainer > .MuiButtonBase-root').click()
  //cy.wait(500)
  /*১ম বৎসর*/
  //ক। ই টি আই এনঃ *
  //cy.get('input[name="incomeTaxInformationParams.0.tinNo"]').type('224188377547')
  //cy.wait(500)
  //খ। ট্যাক্স বৎসরঃ *
  //cy.get('.MuiBox-root > .MuiInputBase-root > .MuiSelect-select > .MuiSvgIcon-root').click()
  //cy.get('.MuiSvgIcon-root').click()
  //cy.get('#mui-component-select-incomeTaxInformationParams\.0\.taxYear').click()
  //cy.get('svg.MuiSvgIcon-root').click();
  //cy.get('.MuiSelect-select').select('2023')
  //cy.get('.MuiSelect-select').click().select('2023')
  //cy.wait(500)
  //cy.get('.MuiBackdrop-root').click()
  //cy.get('#mui-component-select-incomeTaxInformationParams.0.taxYear > .notranslate').click()
  //cy.get('.MuiInputBase-root').click()
  /*cy.get('#simple-tabpanel-bio-data-bn > div > div > form > div > div.MuiBox-root.css-7ysju6 > div > div > div:nth-child(14) > div.singleColumnRow.MuiBox-root.css-164r41r > div:nth-child(1) > div > div:nth-child(1) > div.MuiBox-root.css-r85p5r > div.MuiFormControl-root.MuiFormControl-fullWidth.css-1sbbja8 > div > div').click().each(($ele, index, list) => {
    cy.log($ele.text())
    if ($ele.text().includes('2019-2020')) {
      cy.wrap($ele).click()
    } else {
      cy.log("current value", $ele.text())
    }
  })*/
  

  //১৭। আবেদনকারী বিগত দশ বৎসর যে সকল প্রতিষ্ঠানে কর্মরত ছিলেন তার বিবরণঃ
  cy.get(':nth-child(16) > .singleColumnRow > .subFormButtonContainer > .subFormIconContainer > .MuiButtonBase-root').click()
  //১ ।  কর্মরত প্রতিষ্ঠানের বিবরণঃ
  //ক। প্রতিষ্ঠানের নামঃ *
  cy.get('input[name="tenYearsWorkTravelDescriptionParams.0.organizationName"]').type('প্রতিষ্ঠানের নাম')
    //খ । প্রতিষ্ঠানের বিবরণঃ
    cy.get('.singleColumnRow > :nth-child(2) > .css-79elbk > .MuiFormControl-root > .MuiInputBase-root').click() //.type('প্রতিষ্ঠানের বিবরণ')
    cy.get('.singleColumnRow > :nth-child(2) > .css-79elbk > .MuiFormControl-root > .MuiInputBase-root').type('প্রতিষ্ঠানের বিবরণ')
    cy.wait(500)
  //শুরুর তারিখঃ
  cy.get(':nth-child(16) > :nth-child(2) > .css-12oq5ku > .singleColumnRow > .formRow > :nth-child(1) > .css-1ftvhls > .css-0 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root').click()
  cy.wait(500)
  cy.get('.MuiPickersCalendarHeader-switchViewButton').click()
  cy.wait(500)
  cy.get(':nth-child(111) > .PrivatePickersYear-yearButton').click()
  cy.wait(500)
  cy.get('.MuiMonthPicker-root > :nth-child(7)').click()
  cy.wait(500)
  cy.get('.MuiDayPicker-monthContainer > :nth-child(3) > :nth-child(5)').click()
  cy.wait(500)

    //১৮ । আবেদনকারী বিগত দশ বৎসর যে সকল দেশ ভ্রমণ করেছেন তার বিবরণঃ
  //১ ।   ভ্রমণকৃত দেশের বিবরণঃ
  //ক। দেশের নামঃ *
  cy.get(':nth-child(17) > .singleColumnRow > .subFormButtonContainer > .subFormIconContainer > .MuiButtonBase-root').click()
  cy.get('#simple-tabpanel-bio-data-bn > div > div > form > div > div.MuiBox-root.css-7ysju6 > div > div > div:nth-child(17) > div.singleColumnRow.MuiBox-root.css-0 > div.MuiBox-root.css-12oq5ku > div.singleColumnRow.MuiBox-root.css-0 > div:nth-child(1) > div.MuiFormControl-root.MuiFormControl-fullWidth.css-1sbbja8 > div > div').click()
  cy.get('[data-value="8f66918a-8bb2-441e-a3d8-286106c44146"]').click()
  cy.wait(500)
  //খ । ভ্রমণের বিবরণঃ
  //cy.get('.css-12oq5ku > .singleColumnRow > .css-29kerx > .css-79elbk > .MuiFormControl-root > .MuiInputBase-root').click().type('ভ্রমণের বিবরণ ভ্রমণের বিবরণ ভ্রমণের বিবরণঃ')
  //শুরুর তারিখঃ
  cy.get('.css-12oq5ku > .singleColumnRow > .formRow > :nth-child(1) > .css-1ftvhls > .css-0 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root').click()
  cy.wait(500)
  cy.get('.MuiPickersCalendarHeader-switchViewButton').click()
  cy.wait(500)
  cy.get(':nth-child(111) > .PrivatePickersYear-yearButton').click()
  cy.wait(500)
  cy.get('.MuiMonthPicker-root > :nth-child(7)').click()
  cy.wait(500)
  cy.get('.MuiDayPicker-monthContainer > :nth-child(3) > :nth-child(5)').click()
  cy.wait(500)
})