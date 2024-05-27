/// <reference types="cypress"/>

it('Login DPGDP', function() {

  cy.visit('http://testing.edp.gov.bd/')
  //Change User Name
  cy.get('input[name="username"]').type('akanto009')
  //Change Password
  cy.get('input[name="password"]').type('Sqa@12345')
  cy.wait(200)
  cy.get('.MuiButton-contained').click()
  cy.wait(2000)
  cy.get('.css-1yu1vd9 > .MuiDrawer-root > .MuiPaper-root > .left-menu > .left-menu-list > [style="position: relative; overflow: hidden; width: 100%; height: 100%;"] > [style="position: absolute; inset: 0px; overflow: scroll; margin-right: -17px; margin-bottom: -17px;"] > .MuiList-root > :nth-child(2) > .MuiListItemText-root > .MuiTypography-root').click()
  cy.get('[href="/supplier/supplier-registration/main-application"] > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root').click()
  cy.wait(5000)
  cy.get('.MuiTabs-flexContainer > :nth-child(6)').click()
  cy.wait(200)
  cy.get(':nth-child(2) > .person-list-button-sec > :nth-child(2)').click()


  /* Image Upload */
  cy.get(':nth-child(1) > :nth-child(1) > .css-4boj8f > :nth-child(1) > .fileUploadBox > .fileNameContainer > .addFileBox > .uploadFileInput')
  .selectFile('cypress/fixtures/199353.jpg')
  cy.wait(2000)


  //২। পিতা/স্বামীর নাম ও ঠিকানা :
  //স্বামী
  //cy.get('.css-1vq3geb > .MuiBox-root > .MuiFormGroup-root > :nth-child(2) > .MuiButtonBase-root > .PrivateSwitchBase-input').click()
  //পিতা
  cy.get('.css-1vq3geb > .MuiBox-root > .MuiFormGroup-root > :nth-child(1) > .MuiButtonBase-root > .PrivateSwitchBase-input').click()
  //পিতার নাম:
  cy.get('input[name="supplierBiodataFatherHusbandParam.fullName"]').type('আকবর বাদশাহ')
  //ঠিকানা :
  //বিভাগঃ
  cy.get('#simple-tabpanel-bio-data > div > div > form > div > div.MuiBox-root.css-7ysju6 > div > div > div:nth-child(4) > div.MuiBox-root.css-1q7njkh > div.formRow.MuiBox-root.css-0 > div:nth-child(1) > div.MuiFormControl-root.MuiFormControl-fullWidth.css-1sbbja8 > div > div').click()
  cy.contains('li.MuiMenuItem-root', 'ঢাকা').click();
  //জেলাঃ
  cy.get('#simple-tabpanel-bio-data > div > div > form > div > div.MuiBox-root.css-7ysju6 > div > div > div:nth-child(4) > div.MuiBox-root.css-1q7njkh > div.formRow.MuiBox-root.css-0 > div:nth-child(2) > div.MuiFormControl-root.MuiFormControl-fullWidth.css-1sbbja8 > div > div').click()
  cy.contains('li.MuiMenuItem-root', 'ঢাকা').click();
  //থানাঃ
  cy.get('#simple-tabpanel-bio-data > div > div > form > div > div.MuiBox-root.css-7ysju6 > div > div > div:nth-child(4) > div.MuiBox-root.css-1q7njkh > div.formRow.MuiBox-root.css-1q7njkh > div.MuiBox-root.css-r85p5r > div.MuiFormControl-root.MuiFormControl-fullWidth.css-1sbbja8 > div > div').click()
  cy.contains('li.MuiMenuItem-root', 'সাভার').click();
  //ফোন নম্বর:
  cy.get('input[name="supplierBiodataFatherHusbandParam.phoneNo"]').type('01750671332')
  //বাড়ি/বাসা/হোল্ডিংঃ
  cy.get('input[name="supplierBiodataFatherHusbandParam.addressLine"]').type('বাড়ি/বাসা/হোল্ডিং')

  //৩। মাতার নাম:
  cy.get('input[name="motherName"]').type('মাতা')

  //৪। সশস্ত্র বাহিনীর অবসর প্রাপ্ত সদস্য হলে:
  cy.get(':nth-child(6) > .formRow > .css-16s43vg > .css-1isemmb > .MuiFormGroup-root > .MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input').click()
  //নম্বরঃ
  cy.get('input[name="retiredMilitaryNumber"]').type('AO258745')
  //পদবীঃ
  cy.get('#simple-tabpanel-bio-data > div > div > form > div > div.MuiBox-root.css-7ysju6 > div > div > div:nth-child(6) > div:nth-child(2) > div:nth-child(1) > div.MuiBox-root.css-r85p5r > div.MuiFormControl-root.MuiFormControl-fullWidth.css-1sbbja8 > div > div').click()
  cy.contains('li.MuiMenuItem-root', 'কর্নেল').click();
  //অবসরের তারিখঃ
  cy.get(':nth-child(2) > .css-r85p5r > .css-1ftvhls > .css-0 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root > [data-testid="CalendarIcon"]').click()
  cy.wait(200)
  cy.get('.MuiPickersCalendarHeader-switchViewButton').click()
  cy.wait(200)
  cy.get(':nth-child(123) > .PrivatePickersYear-yearButton').click()
  cy.wait(200)
  cy.get('.MuiMonthPicker-root > :nth-child(7)').click()
  cy.wait(200)
  cy.get('.MuiDayPicker-monthContainer > :nth-child(3) > :nth-child(2)').click()
  cy.wait(200)
  
  //এলপিআর এ থাকলে এলপিআর গ্রহণের তারিখঃ
  cy.get('.css-z8j4a > .css-17i6dfn > .css-1isemmb > .MuiFormGroup-root > .MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input').click()
  cy.wait(200)
  cy.get('.css-qbbete > .MuiBox-root > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root > [data-testid="CalendarIcon"]').click()
  cy.wait(200)
  cy.get('.MuiPickersCalendarHeader-switchViewButton').click()
  cy.wait(200)
  cy.get(':nth-child(113) > .PrivatePickersYear-yearButton').click()
  cy.wait(200)
  cy.get('.MuiMonthPicker-root > :nth-child(7)').click()
  cy.wait(200)
  cy.get('.MuiDayPicker-monthContainer > :nth-child(3) > :nth-child(2)').click()
  cy.wait(200)

  //৫। সশস্ত্র বাহিনীর কর্মরত/অবসরপ্রাপ্ত সদস্যের Spouse হলে স্বামী/স্ত্রীর
  cy.get(':nth-child(7) > .formRow > .css-16s43vg > .css-1isemmb > .MuiFormGroup-root > .MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input').click()

  //কর্মরত
  cy.get(':nth-child(1) > .css-1vq3geb > .MuiBox-root > .MuiFormGroup-root > :nth-child(1) > .MuiButtonBase-root > .PrivateSwitchBase-input').click()
  cy.wait(200)
  //অবসরপ্রাপ্ত
  //cy.get(':nth-child(1) > .css-1vq3geb > .MuiBox-root > .MuiFormGroup-root > :nth-child(2) > .MuiButtonBase-root > .PrivateSwitchBase-input').click()
  //নম্বরঃ
  cy.get('input[name="militarySpouseNumber"]').type('TO256348')
  //পদবীঃ
  cy.get('#simple-tabpanel-bio-data > div > div > form > div > div.MuiBox-root.css-7ysju6 > div > div > div:nth-child(7) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div > div.MuiFormControl-root.MuiFormControl-fullWidth.css-1sbbja8 > div > div').click()
  cy.contains('li.MuiMenuItem-root', 'মেজর').click();
  //সম্পর্কঃ

  //স্বামী
  /*cy.get(':nth-child(3) > .css-1vq3geb > .MuiBox-root > .MuiFormGroup-root > :nth-child(1) > .MuiButtonBase-root > .PrivateSwitchBase-input').click()
  cy.wait(200)*/
  //স্ত্রী
  cy.get(':nth-child(3) > .css-1vq3geb > .MuiBox-root > .MuiFormGroup-root > :nth-child(2) > .MuiButtonBase-root > .PrivateSwitchBase-input').click()
  cy.wait(200)

  //৬। জন্মস্থান:
  cy.get('input[name="birthPlace"]').type('গোপালগঞ্জে')
  //জন্মতারিখঃ
  cy.get(':nth-child(2) > .css-1ftvhls > .css-0 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root > [data-testid="CalendarIcon"]').click()
  cy.wait(200)
  cy.get('.MuiPickersCalendarHeader-switchViewButton').click()
  cy.wait(200)
  cy.get(':nth-child(123) > .PrivatePickersYear-yearButton').click()
  cy.wait(200)
  cy.get('.MuiMonthPicker-root > :nth-child(7)').click()
  cy.wait(200)
  cy.get('.MuiDayPicker-monthContainer > :nth-child(3) > :nth-child(2)').click()
  cy.wait(200)

  //৭। বাণিজ্য প্রতিষ্ঠানের নাম:

  //৮। 
  //স্বত্বাধিকারী
  //cy.get('.css-1ltrdnm > .css-8v90jo > .MuiFormGroup-root > :nth-child(1) > .MuiButtonBase-root > .PrivateSwitchBase-input').click()

  //ব্যবস্থাপনা পরিচালক
  cy.get('.css-1ltrdnm > .css-8v90jo > .MuiFormGroup-root > :nth-child(2) > .MuiButtonBase-root > .PrivateSwitchBase-input').click()

  //ব্যবস্থাপনা পরিচালকের মোবাইল নম্বর*
})