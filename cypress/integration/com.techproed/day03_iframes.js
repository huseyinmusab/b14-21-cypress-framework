//import 'cypress-iframe';  //we import here at the top of the class step 2 =====> i put it in the command.js and it is visible from entire framework , we do not need to import over and over in a class


describe('iframes',()=>{

    it('handling iframes',()=>{

        /*iframes:
        frames are pages within a page
        there are multiple html tag in a single page

        1.install plugin : 
         LINK: https://www.npmjs.com/package/cypress-iframe
         RUN ON TERMINAL : npm install -D cypress-iframe  

         (package.json da otomatik olarak gozukur,in selenium we do it manually as we remember)


        2. IMPORT PACKAGE IN THE CLASS : import 'cypress-iframe';
        WE CAN USE import 'cypress-iframe'; INSIDE THE commands.js   ===> and it is visible from entire framework , we do not need to import over and over in a class

        3. cy.frameLoaded('CSS OF THE FRAME');

        4. Once we are inside the the frame, we need to use below sysntax to find element
        cy.iframe().find('CSS OF ELEMENT')

        */

        cy.visit('https://the-internet.herokuapp.com/iframe')

        //ASSERTING THE TEXT
        cy.get('h3').should('contain.text','Editor')



        cy.frameLoaded('#mce_0_ifr') //SWITCHING TO THE FRAME ELEMENT IN CYPRESS
                                     //driver.switchTo.frame(mce_0_ifr) IN SELENIUM
                                     //#mce_0_ifr css locator of the frame



        cy
        .iframe()  //We need to use iframe() when we are inside the iframes
        .find('p') //use find() to locate the element inside the frame
        .clear     //clearing the element



        //WORKING OUTSIDE THE FRAME
        //Cypress automatically handles the element outside of the frame
        cy
        .get('h3')
        .should('contain.text','Editor')

        cy.contains('Elemental Selenium').click()








    })

})
