describe('move over',()=>{

it('mover over',()=>{

    cy.visit('https://www.amazon.com/')
    cy
    .get('.icp-nav-link-inner') //getting the element
    .trigger('mouse over')//moving the mouse over
    
     cy.wait(5000)
    /*Test Case
        click on Change country/region
        select Canada from the dropdown
    */

    //click on Change country/region  

    cy
       .contains('Change country/region.')  //===> pop up var problem olusturuyor
       .click()

    

    //select canada from dropdown
    cy
       .get('#icp-selected-country')
       .select('Canada',{ force: true })
}) 

})