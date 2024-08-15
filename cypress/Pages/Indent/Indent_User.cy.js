class IndentUser{
    indentforArmy = {
        indentUserName: () =>
            cy.get('input[name="username"]')
            .type('ba.ordtest.ad')
    }
    
    indentforAir = {
        indentUserName: () =>
            cy.get('input[name="username"]')
            .type('baf.supplytest.ad')
    }

    indentPass = {
        indentUserPass: () =>
            cy.get('input[name="password"]')
            .type('Sqa@12345')
    }
}

module.exports = new IndentUser