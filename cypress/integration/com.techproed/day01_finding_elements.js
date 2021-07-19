describe('Finding Elements',()=>{
    it('get method', ()=>{
      
        cy.visit('https://qa-environment.crystalkeyhotels.com/');

        cy.contains('Log in').click()

        //ASEERTING
        //1.Asserting if url includes Logon
        cy.url().should('include','Logon')

        //Assert if Log in is visible
        cy.get('.row > .mb-4').should('be.visible')
    })
})