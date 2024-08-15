class IndentName {
    element = {
        //Search Indent Name
        indentName: () => 
        cy.get('.css-z2naod > .MuiBox-root > .MuiFormControl-root > .MuiInputBase-root')
        .click()
        .type('ইন্ডেন্ট/অটোমেশন/০৭/০৭/২০২৪/০০১-0005')
    }

    createIndentNameArmy = {
        IndentNameCreation: () => 
            cy.get('input[name="demandLetterNo"]')
            .type('ইন্ডেন্ট/অটোমেশন/০৭/০৭/২০২৪/০০১-Army-0001')

    }

    createIndentNameAir = {
        IndentNameCreation: () => 
            cy.get('input[name="demandLetterNo"]')
            .type('ইন্ডেন্ট/অটোমেশন/০৭/০৭/২০২৪/০০১-Air-0001')

    }
}

module.exports = new IndentName()