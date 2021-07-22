describe('navigations',()=>{

    it('back,forward,refresh',()=>{

        cy.visit('https://qa-environment.crystalkeyhotels.com/');
        //hard wait
        cy.wait(3000)

        //clicking on the log in Button
        cy.contains('Log in').click();
        cy.wait(3000)

        //Going back to the previous page
        //cy.go('back') ==== cy.go(-1)
        //OR
        cy.go(-1)
        cy.wait(3000)


        //Going to the next page
        //cy.go('forward') ===== cy.go(1)
        cy.go(1)



        //Refresh the page by using reload()
        cy.reload()
    }) 


    it('chaining the navigations',()=>{

        //WE CAN CHAIN THE FUNCTIONS
        cy.visit('https://qa-environment.crystalkeyhotels.com/');


        //Chaining the methods
        cy
        .contains('Log in')
        .click()
        .go('back')
        .go('forward')
        .go('back');


        //Forcing to reload.Not ethat we do not need to force here
        //And verify the Log in link visible on the page

        cy
        .reload(true)         //true means force
        .contains('Log in')   //getting the Log in element
        .should('be.visible') //asserting if the element is visible
 
    })

    
   

})