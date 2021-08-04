describe('Search',()=>{

    it('amazonSearch',()=>{
        cy.amazonSearch('teapot')
        cy.get('.a-color-state').should('have.text','"teapot"')

        cy.title().should('include','teapot')

        //cy.screenshot()   ===> automatically a screenshot folder is created and yoyu can also see in framework or in a folder

        




    })

})