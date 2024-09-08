/// <reference types="cypress"/>

import SupplierCy from "../../../Pages/Supplier/Supplier.cy"

it('Group 4 & 10, Application for Enrollment).cy', function() {
  cy.visit('http://testing.edp.gov.bd/')
  //Change User Name
  SupplierCy.supplierUserforProprietorship2.supplierUserName()
  /*cy.get('input[name="username"]')
  .type('anisur002')*/

  //Change Password
  SupplierCy.supplierPass.supplierUserPass()
  /*cy.get('input[name="password"]')
  .type('Sqa@12345')*/
  cy.wait(200)
  cy.get('.MuiButton-contained')
  .click()
  cy.wait(3000)

  //সরবরাহকারী নিবন্ধন
  cy.get('.css-1yu1vd9 > .MuiDrawer-root > .MuiPaper-root > .left-menu > .left-menu-list > [style="position: relative; overflow: hidden; width: 100%; height: 100%;"] > [style="position: absolute; inset: 0px; overflow: scroll; margin-right: -17px; margin-bottom: -17px;"] > .MuiList-root > :nth-child(2)')
  .click()
  cy.wait(200)

  //এনলিস্টমেন্ট ফর্ম
  cy.get('[href="/supplier/supplier-registration/main-application"] > .MuiButtonBase-root')
  .click()
  cy.wait(2000)

  //পরবর্তী (নীতিমালা)
  cy.get('.css-19i8qlo > .MuiButtonBase-root')
  .click()
  cy.wait(200)

  //পরবর্তী (সংস্থা/সরবরাহকারীদের তালিকাভুক্তির আবেদনপত্র)
  cy.get(':nth-child(2) > .MuiButton-containedPrimary')
  .click()
  cy.wait(200)

  //পরবর্তী (মালিক/সরবরাহকারীর ব্যক্তিগত তথ্যাদি)
  cy.get(':nth-child(2) > .MuiButton-containedPrimary')
  .click()
  cy.wait(200)

  //পরবর্তী (তালিকা ভুক্তির নিমিত্তে নিরাপত্তা ছাড়পত্রের আবেদন)
  cy.get(':nth-child(2) > .MuiButton-containedPrimary')
  .click()
  cy.wait(200)

  //পরবর্তী (প্রতিনিধি যুক্ত করুন)
  cy.get('.formFooterRow > :nth-child(2) > .MuiButtonBase-root')
  .click()
  cy.wait(200)

  //পরবর্তী (জীবন বৃত্তান্ত)
  cy.get('.css-7ysju6 > .MuiBox-root > :nth-child(2)')
  .click()
  cy.wait(200)

  //পরবর্তী (অঙ্গীকারনামা)
  cy.get('.css-7ysju6 > .MuiBox-root > :nth-child(2)')
  .click()
  cy.wait(200)

  //পরবর্তী (মামলা/সাজা সংক্রান্ত প্রত্যয়ন পত্র)
  cy.get('.css-1ri47fg > .MuiButtonBase-root')
  .click()
  cy.wait(200)

  //পরবর্তী (তালিকাভুক্তির জন্য (গ্রুপ-৪ এবং গ্রুপ-১০) আবেদনের প্রয়োজনীয় নথিপত্র জমাকরণ)
  cy.get(':nth-child(2) > .MuiButton-containedPrimary')
  .click()
  cy.wait(200)

  cy.get('.MuiTabs-flexContainer > .Mui-selected')
  .click()
  cy.wait(200)

  //গ্রুপ ৪ এবং ১০ নিবন্ধন
  /*cy.get('.css-1yu1vd9 > .MuiDrawer-root > .MuiPaper-root > .left-menu > .left-menu-list > [style="position: relative; overflow: hidden; width: 100%; height: 100%;"] > [style="position: absolute; inset: 0px; overflow: scroll; margin-right: -17px; margin-bottom: -17px;"] > .MuiList-root > :nth-child(7) > .MuiListItemText-root > .MuiTypography-root')
  .click()
  cy.wait(200)

  //গ্রুপ ৪ এবং ১০ তালিকাভুক্তি
  cy.get('.MuiCollapse-wrapperInner > .MuiList-root > a > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
  .click()
  cy.wait(200)

  //পরবর্তী
  cy.get('.css-19i8qlo > .MuiButtonBase-root')
  .click()
  cy.wait(500)*/

  //সংযুক্ত করুন
  //১। আমদানি নিবন্ধন সনদঃ*
  cy.get(':nth-child(1) > :nth-child(1) > :nth-child(1) > :nth-child(1) > .css-1lilxs6 > :nth-child(2) > .fileUploadBox > .fileNameContainer > .addFileBox')
  .selectFile('cypress/fixtures/Import_Registration_Certificate.jpeg')
  cy.wait(200)

  //২। বিআইএএ মেম্বারশিপ / সিওসি মেম্বারশিপ সনদঃ
  cy.get(':nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(1) > .css-1lilxs6 > :nth-child(2) > .fileUploadBox > .fileNameContainer > .addFileBox')
  .selectFile('cypress/fixtures/biaa.jpg')
  cy.wait(200)

  //৩। এজেন্সী সনদঃ (প্রিসিপালে ম্যানুফ্যাকচারিং)
  cy.get(':nth-child(2) > :nth-child(1) > :nth-child(1) > :nth-child(1) > .css-1lilxs6 > :nth-child(2) > .fileUploadBox > .fileNameContainer > .addFileBox')
  .selectFile('cypress/fixtures/Agency_Certificate.jpg')
  cy.wait(200)

  //৪। স্বরাষ্ট্র মন্ত্রণালয়ের ছাড়পত্র / সনদঃ
  cy.get(':nth-child(2) > :nth-child(2) > :nth-child(1) > :nth-child(1) > .css-1lilxs6 > :nth-child(2) > .fileUploadBox > .fileNameContainer > .addFileBox')
  .selectFile('cypress/fixtures/Ministry_Clearance.jpg')
  cy.wait(200)

  //৫। ইন্ডেন্টিং সনদঃ
  cy.get(':nth-child(3) > :nth-child(1) > :nth-child(1) > :nth-child(1) > .css-1lilxs6 > :nth-child(2) > .fileUploadBox > .fileNameContainer > .addFileBox')
  .selectFile('cypress/fixtures/bank-statement.jpg')
  cy.wait(200)

  //৬। সর্বশেষ সম্পন্ন চুক্তিপত্র নম্বরঃ
  cy.get(':nth-child(3) > :nth-child(2) > :nth-child(1) > :nth-child(1) > .css-1lilxs6 > :nth-child(2) > .fileUploadBox > .fileNameContainer > .addFileBox')
  .selectFile('cypress/fixtures/citizenship_certificate.jpeg')
  cy.wait(200)

  //৭। সর্বশেষ চুক্তিপত্রঃ
  cy.get('input[name="latestContractNumber"]')
  .type('AB00254T8596')
  cy.wait(200)

  //৮। পূর্বের তালিকাভুক্তির তারিখঃ
  cy.get('[data-testid="CalendarIcon"]')
  .click()
  cy.wait(200)
  cy.get('.MuiPickersCalendarHeader-switchViewButton')
  .click()
  cy.wait(200)
  cy.get(':nth-child(102) > .PrivatePickersYear-yearButton')
  .click()
  cy.wait(200)
  cy.get('.MuiMonthPicker-root > :nth-child(7)')
  .click()
  cy.wait(200)
  cy.get('.MuiDayPicker-monthContainer > :nth-child(3) > :nth-child(2)')
  .click()
  cy.wait(200)

})