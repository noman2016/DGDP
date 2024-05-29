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
  cy.get(':nth-child(6) > .formRow > .css-16s43vg > .css-1isemmb > .MuiFormGroup-root > .MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input')
  .click()
  //নম্বরঃ
  cy.get('input[name="retiredMilitaryNumber"]').type('AO258745')
  //পদবীঃ
  cy.get('#simple-tabpanel-bio-data > div > div > form > div > div.MuiBox-root.css-7ysju6 > div > div > div:nth-child(6) > div:nth-child(2) > div:nth-child(1) > div.MuiBox-root.css-r85p5r > div.MuiFormControl-root.MuiFormControl-fullWidth.css-1sbbja8 > div > div')
  .click()
  cy.contains('li.MuiMenuItem-root', 'কর্নেল').click();
  //অবসরের তারিখঃ
  cy.get(':nth-child(2) > .css-r85p5r > .css-1ftvhls > .css-79elbk > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root > [data-testid="CalendarIcon"]')
  .click()
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
  cy.get(':nth-child(2) > .css-1ftvhls > .css-79elbk > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root > [data-testid="CalendarIcon"]').click()
  cy.wait(200)
  cy.get('.MuiPickersCalendarHeader-switchViewButton').click()
  cy.wait(200)
  cy.get(':nth-child(23) > .PrivatePickersYear-yearButton').click()
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
  cy.get('input[name="companyMobileNo"]').type('01750974665')

  //৯। প্রতিনিধিগণের (যদি থাকে) মোবাইল নম্বর:
  cy.get('input[name="phoneNo"]').type('01798445566')

  //১০। প্রতিষ্ঠানের ই-মেইল এড্রেস:
  cy.get('input[name="companyEmail"]').type('company@gmail.com')

  //১১। টিআইএন নম্বর (ব্যক্তিগত):
  cy.get('input[name="tinNo"]').type('251436789')

  //১২। পাসপোর্ট নম্বর (যদি থাকে):
  cy.get(':nth-child(14) > .css-16s43vg > .css-1isemmb > .MuiFormGroup-root > .MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input')
  .click()
  //পাসপোর্ট নম্বর:
  cy.get('input[]').type('')

  //প্রদানকারী কর্তৃপক্ষ:
  cy.get('input[]').type('')

  //মেয়াদ (Passport Expiry Date)

  //পাসপোর্ট সংযুক্তি

  //১৩। জাতীয় পরিচয়পত্র নং :*
  cy.get('input[]').type('')

  //১৪। (ক) ফার্মের সহিত সম্পর্ক:
  cy.get('input[]').type('')

  //(খ) পদবী:

  //গ) বৈবাহিক অবস্থান:

  //(ঘ) উচ্চতা: (সে:মি:)
  cy.get('input[]').type('')

  //(ঙ) ওজন:
  cy.get('input[]').type('')

  //(চ) চোখের রং:
  cy.get('input[]').type('')

  //(ছ) গায়ের রং:
  cy.get('input[]').type('')

  //(জ) গঠন:
  cy.get('input[]').type('')

  //১৫। দৃষ্টি গোচর সনাক্তকরণ চিহ্ন :

  //১৬। ধর্ম:

  //১৭। সম্প্রদায়:

  //১৮। জাতীয়তা:

  //১৯। যদি দেশভুক্ত হইয়া থাকে তবে পূর্ববর্তী জাতীয়তা:

  //২০। শিক্ষাগত যোগ্যতা:

  //২১। স্থায়ী ঠিকানা
  //বিভাগঃ
  cy.get('').click()
  cy.wait(200)
  cy.contains('li.MuiMenuItem-root', 'ঢাকা').click();
  //জেলাঃ
  cy.get('').click()
  cy.wait(200)
  cy.contains('li.MuiMenuItem-root', 'ঢাকা').click();
  //থানাঃ
  cy.get('').click()
  cy.wait(200)
  cy.contains('li.MuiMenuItem-root', 'সাভার').click();
  //ফোন নম্বর:
  cy.get('input[]').type('')
  //বাড়ি /বাসা /হোল্ডিংঃ
  cy.get('input[]').type('বাড়ি/বাসা/হোল্ডিং');


  //২২। বর্তমান ঠিকানাঃ
  //স্থায়ী ঠিকানার অনুরূপ
  cy.get(':nth-child(24) > .css-17i6dfn > .css-1isemmb > .MuiFormGroup-root > .MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input').click()
  //বিভাগঃ
  /*cy.get('').click()
  cy.wait(200)
  cy.contains('li.MuiMenuItem-root', 'ঢাকা').click();
  //জেলাঃ
  cy.get('').click()
  cy.wait(200)
  cy.contains('li.MuiMenuItem-root', 'ঢাকা').click();
  //থানাঃ
  cy.get('').click()
  cy.wait(200)
  cy.contains('li.MuiMenuItem-root', 'সাভার').click();
  //ফোন নম্বর:
  cy.get('input[]').type('')
  //বাড়ি /বাসা /হোল্ডিংঃ
  cy.get('input[]').type('বাড়ি/বাসা/হোল্ডিং');*/

  //২৩। স্থায়ী ঠিকানা ঢাকায় হলে প্রকৃত ঠিকানা (গ্রামের) :
  cy.get(':nth-child(25) > .css-11ih3en > .css-1isemmb > .MuiFormGroup-root > .MuiFormControlLabel-root > .MuiButtonBase-root > .PrivateSwitchBase-input').click()
  //বিভাগঃ
  cy.get('').click()
  cy.wait(200)
  cy.contains('li.MuiMenuItem-root', 'ঢাকা').click();
  //জেলাঃ
  cy.get('').click()
  cy.wait(200)
  cy.contains('li.MuiMenuItem-root', 'ঢাকা').click();
  //থানাঃ
  cy.get('').click()
  cy.wait(200)
  cy.contains('li.MuiMenuItem-root', 'সাভার').click();
  //ফোন নম্বর:
  cy.get('input[]').type('')
  //বাড়ি /বাসা /হোল্ডিংঃ
  cy.get('input[]').type('বাড়ি/বাসা/হোল্ডিং');

  //২৪। যে ব্যাংকে টাকা লেনদেন করা হয় তাহার নাম ও ব্যাংক একাউন্ট নম্বর:
  //ব্যাংকের নাম:
  //একাউন্টের নাম:
  //ব্রাঞ্চের নাম :
  //একাউন্ট নম্বর:

  //ব্রাঞ্চের ঠিকানা :
  //বিভাগঃ
  cy.get('').click()
  cy.wait(200)
  cy.contains('li.MuiMenuItem-root', 'ঢাকা').click();
  //জেলাঃ
  cy.get('').click()
  cy.wait(200)
  cy.contains('li.MuiMenuItem-root', 'ঢাকা').click();
  //থানাঃ
  cy.get('').click()
  cy.wait(200)
  cy.contains('li.MuiMenuItem-root', 'সাভার').click();
  //বাড়ি /বাসা /হোল্ডিংঃ
  cy.get('input[]').type('বাড়ি/বাসা/হোল্ডিং');

  //২৫। সংঘ বা অন্য কোনো সামাজিক /সাহিত্যিক প্রতিষ্ঠানের সদস্য/ সদস্যা থাকিলে তাহার বিবরণ :

  //ক। প্রতিষ্ঠানের নামঃ

  //খ। যে শাখায় নিবন্ধিত তাহার নামঃ

  //গ। সদস্য/সদস্যা সংখ্যা যদি থাকেঃ

  //ঘ। যোগদানের তারিখঃ


  //২৬। অত্র বাণিজ্য প্রতিষ্ঠানে যোগদানের পূর্বে পেশা/চাকুরীর বিবরণ

  //২৭। চাকুরীতে যোগদানের তারিখঃ


  //২৮। সামরিক/বেসামরিক আদালতে বিচার হইয়া থাকিলে অথবা অভিযুক্ত হইলে তাহার বিবরণ:
  //কোর্ট টাইপ
  //ক। অপরাধঃ
  //খ। তারিখঃ
  //গ। অপরাধ সংগঠনের স্থানঃ
  //২৯। দোষী সাব্যস্ত হইয়া থাকিলে, শাস্তির বিবরণ:

  //৩০। সশস্ত্র বাহিনীতে কোন আত্মীয় নিয়োজিত থাকিলে তাহার বিবরণ:
  //ক। পদমর্যাদাঃ

  //খ। নামঃ

  //গ। সম্পর্কঃ

  //ঘ। কোর/রেজিমেন্ট ইত্যাদির নামঃ

  //ঙ। বর্তমান ঠিকানাঃ
  //বিভাগঃ
  cy.get('').click()
  cy.wait(200)
  cy.contains('li.MuiMenuItem-root', 'ঢাকা').click();
  //জেলাঃ
  cy.get('').click()
  cy.wait(200)
  cy.contains('li.MuiMenuItem-root', 'ঢাকা').click();
  //থানাঃ
  cy.get('').click()
  cy.wait(200)
  cy.contains('li.MuiMenuItem-root', 'সাভার').click();
  //ফোন নম্বর:
  cy.get('input[]').type('')
  //বাড়ি /বাসা /হোল্ডিংঃ
  cy.get('input[]').type('বাড়ি/বাসা/হোল্ডিং');

  //৩১। পুরুষ হইলে স্ত্রীর নাম এবং মহিলা হলে স্বামীর নাম:
  //.click()
  //পুরুষ

  //মহিলা


  //ক। পুরা নামঃ
  cy.get('input[]').type('')
  //খ। ডাক নামঃ
  cy.get('input[]').type('')
  //গ। জন্ম তারিখঃ

  // জন্মস্থানঃ
  cy.get('input[]').type('')

  //ঘ। জাতীয়তাঃ

  //ঙ। ধর্মঃ
  

  //চ। পেশাঃ
  cy.get('input[]').type('')
  //ছ। যে অফিসে চাকুরীরত তাহার নামঃ
  cy.get('input[]').type('')

  //৩২। শশুরের নাম ও ঠিকানাঃ

  //নামঃ
  cy.get('input[]').type('')
  //বিভাগঃ
  cy.get('').click()
  cy.wait(200)
  cy.contains('li.MuiMenuItem-root', 'ঢাকা').click();
  //জেলাঃ
  cy.get('').click()
  cy.wait(200)
  cy.contains('li.MuiMenuItem-root', 'ঢাকা').click();
  //থানাঃ
  cy.get('').click()
  cy.wait(200)
  cy.contains('li.MuiMenuItem-root', 'সাভার').click();
  //ফোন নম্বর:
  cy.get('input[]').type('')
  //বাড়ি /বাসা /হোল্ডিংঃ
  cy.get('input[]').type('বাড়ি/বাসা/হোল্ডিং');

  //আমি এই মর্মে শপথ করিতেছি যে, উপরে যে সমস্ত বিবরণ/তথ্য প্রদান করা হইল তাহা আমার জ্ঞান ও বিশ্বাস মতে সত্য। 
  //অধিকন্তু, ইহাও নিশ্চয়তা প্রদান করিতেছি যে, যদি এই সমস্ত বিবরন/তথ্যের কোনটি মিথ্যা প্রমানিত হয় অথবা কোন তথ্য 
  //পুরাপুরি সরবরাহ করা হয় নাই বলিয়া বিবেচিত হয়, তবে আইনতঃ দন্ডনীয় হইতে বাধ্য থাকিবে।


  //স্বাক্ষর

  //সীলমোহর

  //পুরা নাম:

})