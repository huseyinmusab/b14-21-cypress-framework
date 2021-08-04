
describe('multiple windows',()=>{

    it('handeling multiple windows by removing target',()=>{

        cy
        .visit('https://the-internet.herokuapp.com/windows')

        //Remove target attribute to open on the same window
        //.invoke('removeAttr','ATTRIBUTE NAME'): removes the attribit from the element 

        //WHY WE NEED TO REMOVE,BECAUSE WHEN WE CLICK IT IS OPENING ON A NEW WINDOW AND ON THIS WINDOW CYPRESS DOESNT WORK.CYPRESS WORKS THE CURRENT WINDOW 
        //THAT WE ARE WORKING ON

        //cy
        //.get('.example > a')
        //.click()    ===> TRY THIS BEFORE REMOVING TARGET , YOU ARE GONNA SEE YOU CANT USE CYPRESS

        cy
        .get('.example > a')         //Click Here Element
        .invoke('removeAttr','target') //remove target attribute
        .click()

        //ASSERTING THE NEW WINDOW IS OPENED AND CYPRESS CAN WORK IN THAT WINDOW

        cy
        .get('h3')
        .should('have.text','New Window')

    })

    
    it.only('opening a new url',()=>{
        /*
        We will get the value of href and store in a variable
        then open the value in the same window
        prop() to get value of the attribute
        prop() is a jquery method
        
        
        */

         cy
         .visit('https://the-internet.herokuapp.com/windows')
         cy.wait(5000)


         cy
         .get('.example > a')//Click Here element
         .then((element)=>{     
             const newURL =  element.prop('href')//getting the value of href attribute                
             cy.visit(newURL)//opening the URL in the same window  
         })



         //Assertion
        cy
        .get('h3')
        .should('have.text','New Window') 

         
        

    })




})    