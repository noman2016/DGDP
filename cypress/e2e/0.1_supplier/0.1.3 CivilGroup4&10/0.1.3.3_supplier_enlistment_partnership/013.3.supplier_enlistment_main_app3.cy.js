/// <reference types="cypress"/>

import 'cypress-mochawesome-reporter/register';
import SupplierCy, { supplierUser } from "../../../Pages/Supplier/Supplier.cy"

it('Supplier Enlistment - Proprietorship', function() {
  cy.visit('http://testing.edp.gov.bd/')
  //Change User Name
  /*cy.get('input[name="username"]')
  .type('alnoman001_single')*/
  SupplierCy.supplierUserforLimited2.supplierUserName()
  cy.wait(300)
  //Change Password
  /*cy.get('input[name="password"]')
  .type('Sqa@12345')*/
  SupplierCy.supplierPass.supplierUserPass()
  cy.wait(300)
  cy.get('.MuiButton-contained')
  .click()
  cy.wait(3000)

  cy.get('.css-1yu1vd9 > .MuiDrawer-root > .MuiPaper-root > .left-menu > .left-menu-list > [style="position: relative; overflow: hidden; width: 100%; height: 100%;"] > [style="position: absolute; inset: 0px; overflow: scroll; margin-right: -17px; margin-bottom: -17px;"] > .MuiList-root > :nth-child(2) > .MuiListItemText-root > .MuiTypography-root')
  .click()
  cy.get('[href="/supplier/supplier-registration/main-application"] > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
  .click()
  cy.wait(5000)
  cy.get('.MuiTabs-flexContainer > :nth-child(4)')
  .click()
  

  //১। প্রতিষ্ঠানের নাম*
  //২। তালিকা ভুক্তির জন্য আবেদিত সংস্থার নাম
  //ক। প্রতিষ্ঠানের ঠিকানা (অবশ্যই ট্রেড লাইসেন্স মোতাবেক প্রতিষ্ঠানের ঠিকানা হতে হবে)
  //খ। একাধিক শাখা থাকলে ঠিকানা:
  //৩। স্বত্বাধিকারী/ব্যবস্থাপনা পরিচালক/শেয়ার হোল্ডার/অংশীদার/বহুমুখী প্রতিষ্ঠানের তথ্য:
  //নামঃ

  //প্রতিষ্ঠানের নিয়োগঃ*
  cy.get('input[name="proprietorDirectorShareHolderPartnerInformationParams.0.designation"]')
  .type('প্রতিষ্ঠানের নিয়োগ')

  //বর্তমান ঠিকানা:
  //বিভাগঃ
  /*cy.get('#simple-tabpanel-security-clearance-for-enlistment > div > form > div > div.formColumn.centerAlignItems.MuiBox-root.css-0 > div.singleColumnRow.MuiBox-root.css-6gs9hh > div.MuiBox-root.css-0 > div > div.MuiBox-root.css-0 > div > div > div.subFormContainer.MuiBox-root.css-uewl2b > div > div:nth-child(4) > div.formRow.MuiBox-root.css-0 > div:nth-child(1) > div.MuiFormControl-root.MuiFormControl-fullWidth.css-1sbbja8 > div > div')
  .click()
  cy.wait(200)
  cy.contains('li.MuiMenuItem-root', 'ঢাকা')
  .click();

  //জেলাঃ
  cy.get('#simple-tabpanel-security-clearance-for-enlistment > div > form > div > div.formColumn.centerAlignItems.MuiBox-root.css-0 > div.singleColumnRow.MuiBox-root.css-6gs9hh > div.MuiBox-root.css-0 > div > div.MuiBox-root.css-0 > div > div > div.subFormContainer.MuiBox-root.css-uewl2b > div > div:nth-child(4) > div.formRow.MuiBox-root.css-0 > div:nth-child(2) > div.MuiFormControl-root.MuiFormControl-fullWidth.css-1sbbja8 > div > div')
  .click()
  cy.wait(200)
  cy.contains('li.MuiMenuItem-root', 'ঢাকা')
  .click();

  //থানাঃ
  cy.get('#simple-tabpanel-security-clearance-for-enlistment > div > form > div > div.formColumn.centerAlignItems.MuiBox-root.css-0 > div.singleColumnRow.MuiBox-root.css-6gs9hh > div.MuiBox-root.css-0 > div > div.MuiBox-root.css-0 > div > div > div.subFormContainer.MuiBox-root.css-uewl2b > div > div:nth-child(4) > div.formRow.MuiBox-root.css-tr0r3x > div.MuiBox-root.css-r85p5r > div.MuiFormControl-root.MuiFormControl-fullWidth.css-1sbbja8 > div > div')
  .click()
  cy.wait(200)
  cy.contains('li.MuiMenuItem-root', 'সাভার')
  .click();

  //বাড়ি /বাসা /হোল্ডিংঃ
  cy.get('input[name="proprietorDirectorShareHolderPartnerInformationParams.0.presentAddressLine"]')
  .type('বাড়ি/বাসা/হোল্ডিং');*/

  //৪। ফোন নম্বরঃ
  //মোবাইল নম্বর (মোবাইল নম্বর আবশ্যিক):*
  //৫। ই-মেইল ঠিকানা (আবশ্যিক) :*
  cy.get('input[name="email"]')
  .type('testemail@gmail.com')

  //৬।প্রতিষ্ঠার তারিখ : *
  cy.get('.css-r85p5r > .css-1ftvhls > .css-79elbk > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root')
  .click()
  cy.wait(200)
  cy.get('.MuiPickersCalendarHeader-switchViewButton')
  .click()
  cy.wait(200)
  cy.get(':nth-child(73) > .PrivatePickersYear-yearButton')
  .click()
  cy.wait(200)
  cy.get('.MuiMonthPicker-root > :nth-child(7)')
  .click()
  cy.wait(200)
  cy.get('.MuiDayPicker-monthContainer > :nth-child(3) > :nth-child(2)')
  .click()
  cy.wait(200)
  
  //প্রতিষ্ঠার স্থান:
  cy.get('input[name="establishmentPlace"]')
  .type('প্রতিষ্ঠার স্থান')

  //৭। ট্রেড লাইসেন্স নাম্বার:*
  //লাইসেন্স প্রাপ্তির বত্সরঃ *

  //মেয়াদকালঃ *
  cy.get('.css-1q7njkh > .css-1ftvhls > .css-79elbk > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root > [data-testid="CalendarIcon"]')
  .click()
  cy.wait(200)
  cy.get('.MuiPickersCalendarHeader-switchViewButton')
  .click()
  cy.wait(200)
  cy.get(':nth-child(73) > .PrivatePickersYear-yearButton')
  .click()
  cy.wait(200)
  cy.get('.MuiMonthPicker-root > :nth-child(7)')
  .click()
  cy.wait(200)
  cy.get('.MuiDayPicker-monthContainer > :nth-child(3) > :nth-child(2)')
  .click()
  cy.wait(200)

  //৮। ব্যাংকের হিসাব নাম্বার :*
  cy.get('input[name="bankAccountNo"]')
  .type('2015631584789')

  //ব্যাংকের নাম:*
  cy.get('#simple-tabpanel-security-clearance-for-enlistment > div > form > div > div.formColumn.centerAlignItems.MuiBox-root.css-0 > div.singleColumnRow.MuiBox-root.css-6gs9hh > div.MuiBox-root.css-0 > div > div:nth-child(10) > div.formRow.MuiBox-root.css-0 > div.MuiBox-root.css-1mew44o > div.MuiFormControl-root.MuiFormControl-fullWidth.css-1sbbja8 > div > div')
  .click()
  cy.contains('li.MuiMenuItem-root', 'গ্রীন ট্রেড')
  .click()

  //শাখার নাম :*
  cy.get('input[name="bankBranchName"]')
  .type('শাখা')
  
  //৯। অন্যান্য তথ্য (যদি থাকে):
  cy.get('input[name="otherInformation"]')
  .type('অন্যান্য তথ্য')

  //১০। আর্থিক লেনদেন :
  cy.get(':nth-child(12) > .subFormButtonContainer > .subFormIconContainer > .MuiButtonBase-root')
  .click()
  //ব্যবসার বৎসর*
  cy.get('#simple-tabpanel-security-clearance-for-enlistment > div > form > div > div.formColumn.centerAlignItems.MuiBox-root.css-0 > div.singleColumnRow.MuiBox-root.css-6gs9hh > div.MuiBox-root.css-0 > div > div:nth-child(12) > div.subFormContainer.MuiBox-root.css-uewl2b > div:nth-child(2) > div:nth-child(1) > div > div.MuiFormControl-root.MuiFormControl-fullWidth.css-1sbbja8 > div > div').click()
  cy.contains('li.MuiMenuItem-root', '২০২০-২০২১')
  .click();
  //আর্থিক প্রতিষ্ঠানের নাম:*
  cy.get('#simple-tabpanel-security-clearance-for-enlistment > div > form > div > div.formColumn.centerAlignItems.MuiBox-root.css-0 > div.singleColumnRow.MuiBox-root.css-6gs9hh > div.MuiBox-root.css-0 > div > div:nth-child(12) > div.subFormContainer.MuiBox-root.css-uewl2b > div:nth-child(2) > div:nth-child(2) > div.MuiFormControl-root.MuiFormControl-fullWidth.css-1sbbja8 > div > div').click()
  cy.contains('li.MuiMenuItem-root', 'কার সিলেকশন')
  .click();
  //হিসাব নাম্বার:
  cy.get('input[name="financialTransactionParams.0.accountNo"]')
  .type('20154879634587445')
  //নিজস্ব মূলধন:
  cy.get('input[name="financialTransactionParams.0.selfCapital"]')
  .type('2541635')
  //সম্পদের পরিমাণ:
  cy.get('input[name="financialTransactionParams.0.totalAssets"]')
  .type('25463178936')
  //ঋণের পরিমাণ:
  cy.get('input[name="financialTransactionParams.0.totalLoan"]')
  .type('256364')
  //লেনদেনের পরিমাণ:
  cy.get('input[name="financialTransactionParams.0.totalTransaction"]')
  .type('25896365471258')
  //লাভের পরিমাণ:
  cy.get('input[name="financialTransactionParams.0.totalProfit"]')
  .type('2541366')
  //মন্তব্য:
  cy.get('input[name="financialTransactionParams.0.remarks"]')
  .type('মন্তব্য মন্তব্য মন্তব্য মন্তব্য মন্তব্য')


  //১১। ব্যাংকের ঋণের বিবরণ :
  cy.get('.css-1h5kd1z > .subFormButtonContainer > .subFormIconContainer > .MuiButtonBase-root')
  .click()

  //ঋণ গ্রহণের তারিখ:
  cy.get('.css-1840zz > .css-79elbk > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root > [data-testid="CalendarIcon"]')
  .click()
  cy.wait(200)
  cy.get('.MuiPickersCalendarHeader-switchViewButton')
  .click()
  cy.wait(200)
  cy.get(':nth-child(123) > .PrivatePickersYear-yearButton')
  .click()
  cy.wait(200)
  cy.get('.MuiMonthPicker-root > :nth-child(7)')
  .click()
  cy.wait(200)
  cy.get('.MuiDayPicker-monthContainer > :nth-child(3) > :nth-child(2)')
  .click()
  cy.wait(200)

  //আর্থিক প্রতিষ্ঠানের নাম:*
  cy.get('#simple-tabpanel-security-clearance-for-enlistment > div > form > div > div.formColumn.centerAlignItems.MuiBox-root.css-0 > div.singleColumnRow.MuiBox-root.css-6gs9hh > div.MuiBox-root.css-0 > div > div.MuiBox-root.css-1h5kd1z > div.subFormContainer.MuiBox-root.css-uewl2b > div.formRow.MuiBox-root.css-0 > div.MuiBox-root.css-1mew44o > div.MuiFormControl-root.MuiFormControl-fullWidth.css-1sbbja8 > div > div')
  .click()
  cy.contains('li.MuiMenuItem-root', 'গীভ এন্ড টেক কর্পোরেশন')
  .click();
  cy.wait(200)

  //ঋণের পরিমাণ:
  cy.get('input[name="bankLoanParams.0.financialBondAmount"]')
  .type('256364')
  cy.wait(200)

  //ঋণের অবস্থা :
  cy.get('input[name="bankLoanParams.0.loanStatus"]')
  .type('বায়বীয়')
  cy.wait(200)

  //মন্তব্য:
  cy.get('input[name="bankLoanParams.0.remarks"]')
  .type('মন্তব্য মন্তব্য মন্তব্য মন্তব্য মন্তব্য')
  cy.wait(200)

  //১২। ভ্যাট দাখিলের বিবরণী:
  cy.get(':nth-child(14) > .subFormButtonContainer > .subFormIconContainer > .MuiButtonBase-root')
  .click()
  cy.wait(200)

  //আয়কর বৎসর:*
  cy.get('#simple-tabpanel-security-clearance-for-enlistment > div > form > div > div.formColumn.centerAlignItems.MuiBox-root.css-0 > div.singleColumnRow.MuiBox-root.css-6gs9hh > div.MuiBox-root.css-0 > div > div:nth-child(14) > div.subFormContainer.MuiBox-root.css-uewl2b > div.formRow.MuiBox-root.css-0 > div.MuiBox-root.css-r85p5r > div > div.MuiFormControl-root.MuiFormControl-fullWidth.css-1sbbja8 > div > div')
  .click()
  cy.contains('li.MuiMenuItem-root', '২০১৯-২০২০')
  .click();
  cy.wait(200)

  //ভ্যাট দাখিল:
  cy.get('input[name="vatReturnParams.0.vatReturnAmount"]')
  .type('2015364')
  cy.wait(200)

  //মোট অর্জিত আয়:
  cy.get('input[name="vatReturnParams.0.totalEarnIncome"]')
  .type('12345678998745')
  cy.wait(200)

  //মন্তব্য:
  cy.get('input[name="vatReturnParams.0.remarks"]')
  .type('মন্তব্য মন্তব্য মন্তব্য মন্তব্য মন্তব্য')
  cy.wait(200)

  //কর পরিশোধের রশিদ
  cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > .css-1lilxs6 > :nth-child(2) > .fileUploadBox > .fileNameContainer > .addFileBox')
  .selectFile('cypress/fixtures/Income_Tax_Certificate.jpg')
  cy.wait(200)

  //সনদপত্র
  cy.get(':nth-child(2) > :nth-child(1) > :nth-child(1) > .css-1lilxs6 > :nth-child(2) > .fileUploadBox > .fileNameContainer > .addFileBox')
  .selectFile('cypress/fixtures/Income_Tax_Receipt.jpg')
  cy.wait(200)

  //১৩। বিগত তিন বৎসরের আয়কর প্রদানের বিবরণী:
  cy.get(':nth-child(15) > .subFormButtonContainer > .subFormIconContainer > .MuiButtonBase-root')
  .click()
  cy.wait(200)

  //আয়কর নং
  cy.get('input[name="incomeTaxParams.0.tinNo"]')
  .type('9865743202')
  cy.wait(200)

  //অর্থ বৎসর*
  cy.get('#simple-tabpanel-security-clearance-for-enlistment > div > form > div > div.formColumn.centerAlignItems.MuiBox-root.css-0 > div.singleColumnRow.MuiBox-root.css-6gs9hh > div.MuiBox-root.css-0 > div > div:nth-child(15) > div:nth-child(2) > div.formRow.MuiBox-root.css-0 > div.MuiBox-root.css-r85p5r > div > div.MuiFormControl-root.MuiFormControl-fullWidth.css-1sbbja8 > div > div')
  .click()
  cy.contains('li.MuiMenuItem-root', '২০১৯-২০২০')
  .click();
  cy.wait(200)

  //ব্যক্তিগত কর পরিশোধের পরিমাণ (ট্রেড লাইসেন্সে যার নাম রয়েছে):
  cy.get('input[name="incomeTaxParams.0.personalTaxAmount"]')
  .type('2541635')
  cy.wait(200)

  //প্রতিষ্ঠানের কর পরিশোধের পরিমাণ:
  cy.get('input[name="incomeTaxParams.0.companyTaxAmount"]')
  .type('25896314')
  cy.wait(200)

  //সংযুক্তি
  cy.get(':nth-child(2) > .css-tr0r3x > .css-r85p5r > :nth-child(1) > :nth-child(1) > .css-1lilxs6 > :nth-child(2) > .fileUploadBox > .fileNameContainer > .addFileBox')
  .selectFile('cypress/fixtures/Income_Tax_Receipt.jpg')
  cy.wait(200)

  //মন্তব্য:
  cy.get('input[name="incomeTaxParams.0.remarks"]')
  .type('মন্তব্য মন্তব্য মন্তব্য')
  cy.wait(200)

  /*** 2 ***/
  //ব্যক্তিগত কর পরিশোধের পরিমাণ (ট্রেড লাইসেন্সে যার নাম রয়েছে):
  cy.get('input[name="incomeTaxParams.1.personalTaxAmount"]')
  .type('3641699')
  cy.wait(200)

  //প্রতিষ্ঠানের কর পরিশোধের পরিমাণ:
  cy.get('input[name="incomeTaxParams.1.companyTaxAmount"]')
  .type('36896314')
  cy.wait(200)

  //সংযুক্তি
  cy.get(':nth-child(3) > .css-tr0r3x > .css-r85p5r > :nth-child(1) > :nth-child(1) > .css-1lilxs6 > :nth-child(2) > .fileUploadBox > .fileNameContainer > .addFileBox')
  .selectFile('cypress/fixtures/Income_Tax_Receipt.jpg')
  cy.wait(200)

  //মন্তব্য:
  cy.get('input[name="incomeTaxParams.1.remarks"]')
  .type('মন্তব্য মন্তব্য মন্তব্য মন্তব্য')
  cy.wait(200)

  /*** 3 ***/
  //ব্যক্তিগত কর পরিশোধের পরিমাণ (ট্রেড লাইসেন্সে যার নাম রয়েছে):
  cy.get('input[name="incomeTaxParams.2.personalTaxAmount"]')
  .type('3641699')
  cy.wait(200)

  //প্রতিষ্ঠানের কর পরিশোধের পরিমাণ:
  cy.get('input[name="incomeTaxParams.2.companyTaxAmount"]')
  .type('36896314')
  cy.wait(200)

  //সংযুক্তি
  cy.get(':nth-child(4) > .css-tr0r3x > .css-r85p5r > :nth-child(1) > :nth-child(1) > .css-1lilxs6 > :nth-child(2) > .fileUploadBox > .fileNameContainer > .addFileBox')
  .selectFile('cypress/fixtures/Income_Tax_Receipt.jpg')
  cy.wait(200)

  //মন্তব্য:
  cy.get('input[name="incomeTaxParams.2.remarks"]')
  .type('মন্তব্য মন্তব্য মন্তব্য মন্তব্য মন্তব্য')
  cy.wait(200)

  //১৪। প্রতিষ্ঠানের মালিক/স্বত্বাধিকারী/ব্যবস্থাপনা পরিচালক/শেয়ারহোল্ডারদের পরিবারের সদস্যের নামে কোন প্রতিষ্ঠান সশস্ত্রবাহিনীর কোন সংস্থায় তালিকাভুক্ত থাকলে তার বিবরণ:
  cy.get('.css-6ex3lx > .css-1isemmb > .MuiFormGroup-root > .MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input')
  .click()
  cy.wait(200)

  //প্রতিষ্ঠানের নাম:
  cy.get('input[name="organizationEnlistedInDefenceByFamilyMembersNameParams.0.organizationName"]')
  .type('ঘুচিল')
  cy.wait(200)

  //মালিক/স্বত্বাধিকারীর নাম:
  cy.get('input[name="organizationEnlistedInDefenceByFamilyMembersNameParams.0.ownerName"]')
  .type('তরী')
  cy.wait(200)

  //কোন সংস্থায় তালিকাভুক্ত রয়েছে:
  cy.get('input[name="organizationEnlistedInDefenceByFamilyMembersNameParams.0.enlistedDefenseAgencyName"]')
  .type('রেডক্রস')
  cy.wait(200)

  //তালিকাভুক্তির তারিখ:*
  cy.get(':nth-child(4) > :nth-child(1) > .css-79elbk > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root > [data-testid="CalendarIcon"]')
  .click()
  cy.wait(200)
  cy.get('.MuiPickersCalendarHeader-switchViewButton')
  .click()
  cy.wait(200)
  cy.get(':nth-child(113) > .PrivatePickersYear-yearButton')
  .click()
  cy.wait(200)
  cy.get('.MuiMonthPicker-root > :nth-child(7)')
  .click()
  cy.wait(200)
  cy.get('.MuiDayPicker-monthContainer > :nth-child(3) > :nth-child(2)')
  .click()
  cy.wait(200)

  //মেয়াদকাল:
  cy.get(':nth-child(2) > .css-79elbk > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root > [data-testid="CalendarIcon"]')
  .click()
  cy.wait(200)
  cy.get('.MuiPickersCalendarHeader-switchViewButton')
  .click()
  cy.wait(200)
  cy.get(':nth-child(12) > .PrivatePickersYear-yearButton')
  .click()
  cy.wait(200)
  cy.get('.MuiMonthPicker-root > :nth-child(7)')
  .click()
  cy.wait(200)
  cy.get('.MuiDayPicker-monthContainer > :nth-child(3) > :nth-child(2)')
  .click()
  cy.wait(200)

  //সম্পর্ক:
  cy.get('input[name="organizationEnlistedInDefenceByFamilyMembersNameParams.0.relation"]')
  .type('আত্মীয়')
  cy.wait(200)

  //মন্তব্য:
  cy.get('input[name="organizationEnlistedInDefenceByFamilyMembersNameParams.0.remark"]')
  .type('মন্তব্য মন্তব্য মন্তব্য মন্তব্য মন্তব্য মন্তব্য:')
  cy.wait(200)

  //১৫ । প্রতিষ্ঠানটিতে ইতোপূর্বে সশস্ত্র বাহিনীর কোন সংস্থায় তালিকাভুক্ত ছিল কিনা/ আছে কিনা (থাকলে বিবরণ সহ):
  cy.get(':nth-child(17) > .subFormButtonContainer > .subFormIconContainer > .MuiButtonBase-root')
  .click()
  cy.wait(200)

  //প্রতিষ্ঠানের নাম:
  cy.get('input[name="previousOrCurrentlyEnlistedInDefenseBranchParams.0.organizationName"]')
  .type('শীলেরাসি')
  cy.wait(200)

  //মালিক/স্বত্বাধিকারীর নাম:
  cy.get('input[name="previousOrCurrentlyEnlistedInDefenseBranchParams.0.ownerName"]')
  .type('তরীন')
  cy.wait(200)

  //কোন সংস্থায় তালিকাভুক্ত রয়েছে:
  cy.get('input[name="previousOrCurrentlyEnlistedInDefenseBranchParams.0.enlistedDefenseAgencyName"]')
  .type('রেডক্রস')
  cy.wait(200)

  //তালিকাভুক্তির তারিখ:*
  cy.get(':nth-child(17) > .subFormContainer > :nth-child(4) > :nth-child(1) > .css-79elbk > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root > [data-testid="CalendarIcon"]')
  .click()
  cy.wait(200)
  cy.get('.MuiPickersCalendarHeader-switchViewButton')
  .click()
  cy.wait(200)
  cy.get(':nth-child(113) > .PrivatePickersYear-yearButton')
  .click()
  cy.wait(200)
  cy.get('.MuiMonthPicker-root > :nth-child(7)')
  .click()
  cy.wait(200)
  cy.get('.MuiDayPicker-monthContainer > :nth-child(3) > :nth-child(2)')
  .click()
  cy.wait(200)
  
  //মেয়াদকাল:
  cy.get(':nth-child(17) > .subFormContainer > :nth-child(4) > :nth-child(2) > .css-79elbk > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root > [data-testid="CalendarIcon"]')
  .click()
  cy.wait(200)
  cy.get('.MuiPickersCalendarHeader-switchViewButton')
  .click()
  cy.wait(200)
  cy.get(':nth-child(12) > .PrivatePickersYear-yearButton')
  .click()
  cy.wait(200)
  cy.get('.MuiMonthPicker-root > :nth-child(7)')
  .click()
  cy.wait(200)
  cy.get('.MuiDayPicker-monthContainer > :nth-child(3) > :nth-child(2)')
  .click()
  cy.wait(200)

  //মন্তব্য:
  cy.get('input[name="previousOrCurrentlyEnlistedInDefenseBranchParams.0.remark"]')
  .type('মন্তব্য মন্তব্য মন্তব্য মন্তব্য মন্তব্য মন্তব্য:')
  cy.wait(200)

  //১৬ । এজেন্সী এগ্রিমেন্ট থাকলে তার বিবরণ:
  cy.get(':nth-child(18) > .subFormButtonContainer > .subFormIconContainer > .MuiButtonBase-root')
  .click()
  cy.wait(200)

  //বিদেশী কোম্পানি/প্রতিষ্ঠানের নাম:
  cy.get('input[name="agencyAgreementParams.0.agencyCompanyName"]')
  .type('রয়াল কিং')
  cy.wait(200)

  //কর্মরত কর্মকর্তা/Contact Person এর Whatsapp/Viber/Social Media নম্বর/ঠিকানা:
  cy.get('input[name="agencyAgreementParams.0.agencyCompanyContractPersonSocialMediaInfo"]')
  .type('যোগাযোগের ব্যক্তি')
  cy.wait(200)

  //বিদেশী কোম্পানি/প্রতিষ্ঠানের পূর্ণাঙ্গ ঠিকানা:
  cy.get('input[name="agencyAgreementParams.0.agencyCompanyAddress"]')
  .type('আয়ারল্যান্ডের কোম্পানি')
  cy.wait(200)

  //বিদেশী কোম্পানি/প্রতিষ্ঠানের কর্মরত Contact Person 1 এর নাম:
  cy.get('input[name="agencyAgreementParams.0.agencyAgreementContactPersonParams.0.contactPersonName"]')
  .type('সুটুরেন্ট')
  cy.wait(200)

  //বিদেশী কোম্পানি/প্রতিষ্ঠানের কর্মরত Contact Person 2 এর নাম:
  cy.get('input[name="agencyAgreementParams.0.agencyAgreementContactPersonParams.1.contactPersonName"]')
  .type('মর্চেন')
  cy.wait(200)

  //বিদেশী কোম্পানি/প্রতিষ্ঠানের কর্মরত Contact Person 1 এর নম্বর:
  cy.get('input[name="agencyAgreementParams.0.agencyAgreementContactPersonParams.0.contactPersonPhone"]')
  .type('9822847569')
  cy.wait(200)

  //বিদেশী কোম্পানি/প্রতিষ্ঠানের কর্মরত Contact Person 2 এর নম্বর:
  cy.get('input[name="agencyAgreementParams.0.agencyAgreementContactPersonParams.1.contactPersonPhone"]')
  .type('9833758496')
  cy.wait(200)

  //বিদেশী কোম্পানি/প্রতিষ্ঠানের কর্মরত Contact Person 1 এর ইমেইল:
  cy.get('input[name="agencyAgreementParams.0.agencyAgreementContactPersonParams.0.contactPersonEmail"]')
  .type('suturent@gmail.com')
  cy.wait(200)

  //বিদেশী কোম্পানি/প্রতিষ্ঠানের কর্মরত Contact Person 2 এর ইমেইল:
  cy.get('input[name="agencyAgreementParams.0.agencyAgreementContactPersonParams.1.contactPersonEmail"]')
  .type('morchen@gmail.com')
  cy.wait(200)

  //চুক্তিবদ্ধ প্রতিষ্ঠানের ফ্যাক্স নম্বর:
  cy.get('input[name="agencyAgreementParams.0.contactPersonFax"]')
  .type('N/A')
  cy.wait(200)

  //চুক্তিবদ্ধ প্রতিষ্ঠানের সাথে চুক্তির তারিখ:
  cy.get(':nth-child(8) > :nth-child(1) > .css-79elbk > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root > [data-testid="CalendarIcon"]')
  .click()
  cy.wait(200)
  cy.get('.MuiPickersCalendarHeader-switchViewButton')
  .click()
  cy.wait(200)
  cy.get(':nth-child(113) > .PrivatePickersYear-yearButton')
  .click()
  cy.wait(200)
  cy.get('.MuiMonthPicker-root > :nth-child(7)')
  .click()
  cy.wait(200)
  cy.get('.MuiDayPicker-monthContainer > :nth-child(3) > :nth-child(2)')
  .click()
  cy.wait(200)

  //চুক্তির মেয়াদকাল:
  cy.get(':nth-child(8) > :nth-child(2) > .css-79elbk > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root > [data-testid="CalendarIcon"]')
  .click()
  cy.wait(200)
  cy.get('.MuiPickersCalendarHeader-switchViewButton')
  .click()
  cy.wait(200)
  cy.get(':nth-child(120) > .PrivatePickersYear-yearButton')
  .click()
  cy.wait(200)
  cy.get('.MuiMonthPicker-root > :nth-child(7)')
  .click()
  cy.wait(200)
  cy.get('.MuiDayPicker-monthContainer > :nth-child(3) > :nth-child(2)')
  .click()
  cy.wait(200)

  //এজেন্সী এগ্রিমেন্ট গ্রুপ ৪ ও ১০ এর অনুকূলে সরবরাহকৃত সরঞ্জামাদির নির্দিষ্টিভাবে বিবরণ:
  cy.get('input[name="agencyAgreementParams.0.agencyCompanyG410Description"]')
  .type('সরঞ্জাম')
  cy.wait(200)

  //প্রতিস্বাক্ষর
  //প্রতিস্বাক্ষরকারীর নামঃ*
  cy.get('input[name="refPersonName"]')
  .type('তওহীদ')
  cy.wait(200)

  //পদবীঃ*
  cy.get('input[name="refPersonRank"]')
  .type('মেজর জেনারেল')
  cy.wait(200)

  //স্বাক্ষরঃ*
  cy.get('.addFileBox')
  .selectFile('cypress/fixtures/Signature_of_applicant.png')
  cy.wait(200)

})