describe('suggested elements',()=>{

    it.skip('suggested elements',()=>{

        //cy.get (".gLFyf").type('USA')
        cy.visit("https://www.google.com/")
        cy.get("input[name='q']").type('usa')
        cy.wait(3000)
        cy
        .get('li span b')//getting the list of bold items ==> why this IT IS MORE DYNAMIC ==> instead of einrise i can write other options corona,etc..
        .contains('corona')//choosing the one that contains map ==> teacher"s is map mine is einrise
        .click()//then clicking on it

        //selectable things suggests(teacher's searching,not mine)
          /*li span b :
        map
        a login
        jobs
        today
        a customer service
        */

    })

    it('automation practice . com',()=>{

        cy.visit("http://automationpractice.com/index.php")
        cy.get("input[id='search_query_top']").type('dress')
        cy.wait(5000)

        // METHOD 1 is locate the one of the suggested option (cypress)
        //Then click on it
        // cy
        // .get('.ac_results > ul > :nth-child(2)')
        // .click()


        //(there will be always a text)
        //METHOD 2 is to use contains()
        //and click on it
        cy
        .get('.ac_results')//Summer Dresses > Printed Summer,Evening Dresses > Printed ,Summer Dresses > Printed Summer ,..
        .contains('Blouse')//Click on the 1st element if there are multiple match like(Printed)
        .click()  
        cy.wait(5000)

         //Assertion
         cy
         .get("h1[itemprop='name']")
         .should('be.visible')

    })


})