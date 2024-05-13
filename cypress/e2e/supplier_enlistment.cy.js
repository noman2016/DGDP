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
  

  /* Image Upload */
  cy.get(':nth-child(1) > .fileUploadBox > .fileNameContainer > .addFileBox > .uploadFileInput')
  .selectFile('cypress\\fixtures\\199353.jpg',{force:true})
  cy.wait(2000)
  
  //১। পুরা নাম (বাংলায়): *
  cy.get('input[name="preApplicantNameBn"]').type('মোল্লা বছির উদ্দিন')
  cy.wait(500)
  // পিতা
  cy.get('.css-1vq3geb > .MuiBox-root > .MuiFormGroup-root > :nth-child(1) > .MuiButtonBase-root > .PrivateSwitchBase-input').click()
  cy.wait(500)

  //স্বামী
  /*cy.get('.css-1vq3geb > .MuiBox-root > .MuiFormGroup-root > :nth-child(2) > .MuiButtonBase-root > .PrivateSwitchBase-input').click()

  //২। স্বামীর নামঃ *
  cy.get('input[name="husbandNameBn"]').type('স্বামী')*/

  //২। পিতার নামঃ *
  cy.get('input[name="fathersNameBn"]').type('মোল্লা কাসির উদ্দিন')
  
  //পিতার ঠিকানাঃ
  //বিভাগঃ*
  cy.get('#mui-component-select-guardianDivisionId').click()
  cy.wait(500)
  cy.get('[data-value="0653ffbc-61a1-470f-a83c-6b77f6730b79"]').click()
  //জেলাঃ*
  cy.get('#mui-component-select-guardianDistrictId').click()
  cy.wait(500)
  cy.get('[data-value="29d12c61-8771-4a4d-9fcd-72969b7f69c0"]').click()
  //থানাঃ*
  cy.get('#mui-component-select-guardianPoliceStationId').click()
  cy.wait(500)
  cy.get('[data-value="9f3ae5e2-2e8b-4995-95ce-b237d234294c"]').click()
  //ফোন নম্বরঃ*
  cy.get('input[name="guardianPhoneNo"]').type('01750671332')
  cy.wait(500)
  //বাড়ি/বাসা/হোল্ডিংঃ*
  cy.get('input[name="guardianAddressLine"]').type('বাড়ি/বাসা/হোল্ডিং');

  //৩। বাণিজ্য প্রতিষ্ঠানের নাম (বাংলায়): *
  cy.get('input[name="businessInstitutionNameBn"]').type('বাণিজ্য প্রতিষ্ঠান')

  //ক। ব্যবসা প্রতিষ্ঠানের ধরণ (ট্রেড লাইসেন্স মোতাবেকঃ) *
  cy.get('#mui-component-select-tradeLicenseType > .notranslate').click()
  cy.get('[data-value="PROPRIETORSHIP"]').click()
  cy.wait(500)
  /*cy.get('[data-value="LIMITED"]').click()
  cy.get('[data-value="PARTNERSHIP"]').click()*/

  //ট্রেড লাইসেন্স নম্বরঃ*
  cy.get('input[name="tradeLicenseNo"]').type('0530014')
  cy.wait(500)

  //ট্রেড লাইসেন্স এর ফটোকপি*
  cy.get(':nth-child(3) > .css-r85p5r > :nth-child(1) > :nth-child(1) > .css-1lilxs6 > :nth-child(2) > .fileUploadBox > .fileNameContainer > .addFileBox')
  .selectFile('cypress\\fixtures\\Trade-License.jpg',{force:true})
  cy.wait(500)

  //মালিকের নাম (ট্রেড লাইসেন্স অনুযায়ী) *
  cy.get('input[name="ownerNameAccordingToTradeLicense"]').type('মোল্লা কাসির উদ্দিন')
  cy.wait(500)

  //লাইসেন্স প্রাপ্তির বত্সরঃ *
  cy.get('#mui-component-select-tradeLicenseYear > .notranslate').click()
  cy.wait(500)
  cy.get('[data-value="2021-2022"]').click()

  //সর্বশেষ হালনাগাদের বত্সরঃ
  cy.get('#mui-component-select-lastUpdatedTradeLicenseYear > .notranslate').click()
  cy.wait(500)
  cy.get('[data-value="2023-2024"]').click()

  //খ । ব্যবসায়িক অভিজ্ঞতা (ইতোপূর্বে যে সকল দেশী/বিদেশী সংস্থা/কোম্পানীর সাথে কাজ করা হয়েছে তার বিবরণঃ)
  cy.get(':nth-child(6) > .css-19w5vep > .css-79elbk > .MuiFormControl-root > .MuiInputBase-root').type('ব্যবসায়িক অভিজ্ঞতা ব্যবসায়িক অভিজ্ঞতা')

  //৪ । ব্যবসা শুরু করিবার তারিখ ( লাইসেন্স প্রাপ্তির পূর্বের তারিখ অগ্রহণযোগ্য ) :*
  cy.get(':nth-child(5) > .css-r85p5r > .css-1ftvhls > .css-0 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root > [data-testid="CalendarIcon"]')
  .click()
  //cy.get('[data-testid="CalendarIcon"]').click()
  cy.wait(500)
  cy.get('.MuiPickersCalendarHeader-switchViewButton').click()
  cy.wait(500)
  cy.get(':nth-child(1) > .PrivatePickersYear-yearButton').click()
  cy.wait(500)
  cy.get('.MuiMonthPicker-root > :nth-child(7)').click()
  cy.wait(500)
  cy.get('.MuiDayPicker-monthContainer > :nth-child(3) > :nth-child(2)').click()
  cy.wait(500)

  //৫ । স্বত্ত্বাধিকারী/ব্যবস্থাপনা পরিচালকের মোবাইল নম্বরঃ *
  cy.get('input[name="businessOwnerMobileNo"]').type('01750671332')

  //৬। জন্মস্থানঃ *
  cy.get('input[name="birthPlace"]').type('ঢাকা')

  //জন্ম তারিখঃ *
  cy.get(':nth-child(6) > .css-r85p5r > .css-1ftvhls > .css-0 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root > [data-testid="CalendarIcon"]').click()
  cy.wait(500)
  cy.get('.MuiPickersCalendarHeader-switchViewButton').click()
  cy.wait(500)
  cy.get(':nth-child(83) > .PrivatePickersYear-yearButton').click()
  cy.wait(500)
  cy.get('.MuiMonthPicker-root > :nth-child(7)').click()
  cy.wait(500)
  cy.get('.MuiDayPicker-monthContainer > :nth-child(3) > :nth-child(2)').click()
  cy.wait(500)

  //৭। বর্তমান পেশাঃ
  cy.get('input[name="presentOccupationBn"]').type('ব্যবসা')

  //৮। ক) ফার্মের সহিত সম্পর্কঃ
  cy.get('input[name="relationWithFirmBn"]').type('ব্যবসা')

  //৮। খ) পদবী (বাংলায়):
  cy.get('input[name="presentDesignationBn"]').type('চেয়ারম্যান')

  //৮। গ) বৈবাহিক সম্পর্কঃ *
  cy.get('#mui-component-select-maritalStatus').click()
  cy.wait(500)
  cy.get('[data-value="MARRIED"]').click()
  cy.wait(500)

  //৯। জাতীয় পরিচয় পত্র নংঃ*
  cy.get('input[name="nid"]').type('0123456789')

  //১০। জাতীয়তাঃ*
  cy.get('#mui-component-select-nationalityTypeId').click()
  cy.wait(500)
  cy.get('[data-value="add2320c-8435-475b-ab1f-5814efa6c4cb"]').click()

  //১১। শিক্ষাগত যোগ্যতাঃ

  //১২। স্থায়ী ঠিকানাঃ

  //বিভাগঃ*
  cy.get('#mui-component-select-permanentDivisionId').click()
  cy.wait(500)
  cy.get('[data-value="0653ffbc-61a1-470f-a83c-6b77f6730b79"]').click()
  //জেলাঃ*
  cy.get('#mui-component-select-permanentDistrictId').click()
  cy.wait(500)
  cy.get('[data-value="29d12c61-8771-4a4d-9fcd-72969b7f69c0"]').click()
  //থানাঃ*
  cy.get('#mui-component-select-permanentPoliceStationId').click()
  cy.wait(500)
  cy.get('[data-value="9f3ae5e2-2e8b-4995-95ce-b237d234294c"]').click()
  //ফোন নম্বরঃ*
  cy.get('input[name="permanentPhoneNo"]').type('01750671332')
  cy.wait(500)
  //বাড়ি/বাসা/হোল্ডিংঃ*
  cy.get('input[name="permanentAddressLine"]').type('বাড়ি/বাসা/হোল্ডিং');

  //১৩। বর্তমান ঠিকানাঃ
  cy.get(':nth-child(1) > .css-11ih3en > .css-1isemmb > .MuiFormGroup-root > .MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input').click()
  cy.wait(500)
  //বিভাগঃ*
  //জেলাঃ*
  //থানাঃ*
  //ফোন নম্বরঃ
  //বাড়ি/বাসা/হোল্ডিংঃ *

  //১৪। কোম্পানীর অনুকূলে ব্যাংক সলভেন্সি সনদসহ ০৬ মাসের ব্যাংক স্টেটমেন্ট ০২ পাতার মধ্যে (সংযুক্ত করতে হবে):*
  cy.get('.css-r85p5r > :nth-child(1) > :nth-child(1) > .css-1lilxs6 > :nth-child(2) > .fileUploadBox > .fileNameContainer > .addFileBox')
  .selectFile('cypress\\fixtures\\bank-statement.jpg',{force:true})
  cy.wait(2000)

  //শুরুর তারিখঃ *
  cy.get(':nth-child(2) > :nth-child(1) > .css-1ftvhls > .css-0 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root').click()
  cy.wait(500)
  cy.get('.MuiPickersCalendarHeader-switchViewButton').click()
  cy.wait(500)
  cy.get(':nth-child(122) > .PrivatePickersYear-yearButton').click()
  cy.wait(500)
  cy.get('.MuiMonthPicker-root > :nth-child(7)').click()
  cy.wait(500)
  cy.get('.MuiDayPicker-monthContainer > :nth-child(3) > :nth-child(2)').click()
  cy.wait(500)

  //শেষ তারিখঃ *
  cy.get(':nth-child(2) > :nth-child(2) > .css-1ftvhls > .css-0 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root > [data-testid="CalendarIcon"]').click()
  cy.wait(500)
  cy.get('.MuiPickersCalendarHeader-switchViewButton').click()
  cy.wait(500)
  cy.get(':nth-child(3) > .PrivatePickersYear-yearButton').click()
  cy.wait(500)
  cy.get('.MuiMonthPicker-root > :nth-child(7)').click()
  cy.wait(500)
  cy.get('.MuiDayPicker-monthContainer > :nth-child(3) > :nth-child(2)').click()
  cy.wait(500)

  //১৫। আয়কর সংক্রান্ত তথ্যাবলী বাৎসরিক ক্রমানুসারে (০৩ বৎসরের): *
  cy.get(':nth-child(14) > .singleColumnRow > .subFormButtonContainer > .subFormIconContainer > .MuiButtonBase-root').click()
  cy.wait(500)
  /*১ম বৎসর*/
  //ক। ই টি আই এনঃ *
  cy.get('input[name="incomeTaxInformationParams.0.tinNo"]').type('224188377547')
  cy.wait(500)
  //খ। ট্যাক্স বৎসরঃ *
  cy.get('#mui-component-select-incomeTaxInformationParams\.0\.taxYear').click()
  cy.wait(500)
  //গ। ব্যক্তিগত কর পরিশোধের পরিমাণঃ *
  //ঘ। প্রতিষ্ঠানের কর পরিশোধের পরিমাণঃ *
  //আয়কর সনদ*
  //আয়কর রশিদ*

  //১৯। সমিতি, সামাজিক/রাজনৈতিক/ক্লাব/সংস্থার সদস্য হইলেঃ
  cy.get(':nth-child(18) > .css-11ih3en > .css-1isemmb > .MuiFormGroup-root > .MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input').click()
  //ক। সংস্থা/প্রতিষ্ঠানের নামঃ *
  cy.get('input[name="associationWithSocialPoliticalClubOrgParams.0.name"]').type('সামাজিক প্রতিষ্ঠান')
  //খ। রেজিস্ট্রেশন নংঃ
  cy.get('input[name="associationWithSocialPoliticalClubOrgParams.0.registrationNo"]').type('0125478')
  //গ। সংস্থাটির কার্যক্রমঃ
  cy.get(':nth-child(3) > .css-79elbk > .MuiFormControl-root > .MuiInputBase-root').click().type('সংস্থাটির কার্যক্রমঃ')
  //ঘ। সংস্থাটিতে পদ (যদি থাকে)
  cy.get('input[name="associationWithSocialPoliticalClubOrgParams.0.designation"]').type('0125478')
  //ঙ । যোগদানের তারিখঃ
  cy.get('.css-1840zz > .css-0 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root > [data-testid="CalendarIcon"]').click()
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