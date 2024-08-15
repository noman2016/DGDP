/// <reference types="cypress"/>

import Indent_NameCy from "../../../Pages/Indent/Indent_Name.cy"
import Indent_UserCy from "../../../Pages/Indent/Indent_User.cy"
import Indent_SelectionCy from "../../../Pages/Indent/Indent_Selection.cy"

it('Indent', function() {

  cy.visit('http://training.edp.gov.bd/')
  // Change User Name
  Indent_UserCy.indentforArmy.indentUserName()
  // Change Password
  Indent_UserCy.indentPass.indentUserPass()
  
  cy.get('.MuiButton-contained')
  .click()
  cy.wait(3000)

  //cy.get('.inactive > .MuiChip-label')
  cy.get('.active > .MuiChip-label')
  .click()
  cy.wait(200)

  // ইন্ডেন্ট প্রক্রিয়া
  cy.get('.css-1yu1vd9 > .MuiDrawer-root > .MuiPaper-root > .left-menu > .left-menu-list > [style="position: relative; overflow: hidden; width: 100%; height: 100%;"] > [style="position: absolute; inset: 0px; overflow: scroll; margin-right: -17px; margin-bottom: -17px;"] > .MuiList-root > :nth-child(7) > .MuiListItemText-root > .MuiTypography-root')
  .click()
  cy.wait(250)

  // ইন্ডেন্ট
  cy.get('.css-1yu1vd9 > .MuiDrawer-root > .MuiPaper-root > .left-menu > .left-menu-list > [style="position: relative; overflow: hidden; width: 100%; height: 100%;"] > [style="position: absolute; inset: 0px; overflow: scroll; margin-right: -17px; margin-bottom: -17px;"] > .MuiList-padding > .MuiCollapse-root > .MuiCollapse-wrapper > .MuiCollapse-wrapperInner > .MuiList-root > [href="/admin/indent-process/indent"] > .MuiButtonBase-root > .MuiListItemText-root > .MuiTypography-root')
  .click()
  cy.wait(250)

  // Sidebar-Toggler
  cy.get('.css-1yu1vd9 > .MuiDrawer-root > .MuiPaper-root > .left-menu > .MuiToolbar-root > .css-12d2mry > .css-1mwz337 > .sidebar-toggler')
  .click()
  cy.wait(250)

  // Page
  /*cy.get('.css-iz101f > .MuiList-root > :nth-child(4)')
  .click() 
  cy.wait(3000)*/

  Indent_NameCy.element.indentName()
  cy.wait(250)

  // Search Indent Name
  /*
  cy.get('.css-z2naod > .MuiBox-root > .MuiFormControl-root > .MuiInputBase-root')
  .click()
  .type('ইন্ডেন্ট/অটোমেশন/০৭/০৭/২০২৪/০০১-0005')
  cy.wait(250)*/

  // Action
  Indent_SelectionCy.selectIndent.indentSelect()
  cy.wait(2500)
 
  // Main/Major Item
  cy.get('.MuiPaper-root > .MuiList-root > :nth-child(6)')
  .click()
  cy.wait(250)

  // MAIN/MAJOR ITEM

  // Part No
  cy.get('input[name="partsNo"]')
  .type('09455-21200')
  cy.wait(250)

  // Item
  cy.get('input[name="nomenclature"]')
  .type('BEARING INSTALLER')
  cy.wait(250)

  // Qty
  cy.get('input[name="quantity"]')
  .type('5')
  cy.wait(250)

  // A/U
  cy.get('input[name="accountUnit"]')
  .type('NO')
  cy.wait(250)

  // Description
  cy.get('#simple-tabpanel-61e166ad-0c64-4d92-a15f-e1d98d80f3b0 > div > div > div.MuiBox-root.css-1tx28v3 > div > div > div.MuiBox-root.css-12q511y > div > div > div:nth-child(3) > div > div.MuiBox-root.css-79elbk > div')
  .click()
  .type('---')
  cy.wait(250)

  // Remarks
  cy.get('#simple-tabpanel-61e166ad-0c64-4d92-a15f-e1d98d80f3b0 > div > div > div.MuiBox-root.css-1tx28v3 > div > div > div.MuiBox-root.css-12q511y > div > div > div:nth-child(4) > div > div.MuiBox-root.css-79elbk > div')
  .click()
  .type('---')
  cy.wait(250)

  //যোগ করুন
  cy.get('.css-1hsuwvg > .MuiButton-contained')
  .click()
  cy.wait(500)

  //আপনি কি ডাটা সাবমিট করতে নিশ্চিত?
  //হ্যাঁ
  cy.get('.swal2-confirm')
  .click()
  cy.wait(200)

})