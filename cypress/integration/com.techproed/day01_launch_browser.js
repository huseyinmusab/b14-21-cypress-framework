describe('Go to the application',()=>{

    it('Test Case 1 ',()=>{
        //visirt() => go to the url
        cy.visit('https://qa-environment.crystalkeyhotels.com/');

        //clicking on Log in
        //Finding the element whose text includes Log in 
        //Then clicking on it
        cy.contains('Log in').click()


        //Verifying if the user is on the Login Page
        //I will check if the new url contains /Account/Logon
        cy.url().should('include','/Account/Logon')

        

    })


})