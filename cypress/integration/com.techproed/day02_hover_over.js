describe('move over',()=>{

it('mover over',()=>{

    cy.visit('https://www.amazon.com/')


    cy
    .get('.icp-nav-link-inner') //getting the element
    .trigger('mouseover')//moving the mouse over ==>mouseover NOT mouse over
    
     cy.wait(5000)
    /*Test Case
        click on Change country/region
        select Canada from the dropdown
    */

    //click on Change country/region  

    cy
       .contains('Change country/region.')
       .click()  //===> pop up var dikkat et

    

    //select canada from dropdown
    cy
       .get('#icp-selected-country')
       .select('Canada',{ force: true }) //HERE WE ARE FORCING TO SLECT THIS ELEMENT(Canada),CYPRESS SUGGESTS IT,
                                         // sometimes hidden element can not load easily when we hoover over,thats why we use this
}) 

})