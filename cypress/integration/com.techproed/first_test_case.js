//STRUCTURE
//describe ('NAME OF THE FUNCTION',ANOTHER FUNCTION TO CREATE TEST CASES)
//it : used to create TEST CASES. it is like @Test annotation
//it('NAME OF THE TEST CASE',FUNCTION TO CREATE TEST CASE)


//FUNCTION WITH IN FUNCTION ACTUALLY
//COMPARING DESCRIBE==CLASS  ,IT=TESTCASE,NOT IN REAL THEY ARE FUNCTIONS


describe('My First Test', () => {
    it('URL Test', () => {

      //And verify the url contains google
      cy.visit('https://www.google.com/')
      cy.url().should('include','google')

    })

    //Create second test case
    it('Title Test', () => {
        //And title equals Google
        cy.visit('https://www.google.com/')
        cy.title().should('eq','Google')
  
      })



  })