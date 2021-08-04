// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })








/*This import is to handle iframes
1.install plugin : 
LINK: https://www.npmjs.com/package/cypress-iframe
RUN ON TERMINAL : npm install -D cypress-iframe  

(package.json da otomatik olarak gozukur,in selenium we do it manually as we remember)

2. IMPORT PACKAGE IN THE CLASS : import 'cypress-iframe';
WE CAN USE import 'cypress-iframe'; INSIDE THE commands.js  ===>and it is visible from entire framework , we do not need to import over and over in a class
import 'cypress-iframe';

 3. cy.frameLoaded('CSS OF THE FRAME');
*/

import 'cypress-iframe';





/*DRAG AND DROP:
        1. RUN ON TERMINAL : npm install --save-dev @4tw/cypress-drag-drop
        2. import '@4tw/cypress-drag-drop on the top of the class
        (automatically it was added to package.json , like iframe) ===>and it is visible from entire framework , we do not need to import over and over in a class 
*/

import '@4tw/cypress-drag-drop'


//for file upload
import 'cypress-file-upload';





/*-Create a custom method 
-name : login
-parameters (email,password)
-functionality 
    -go to the link
	-click on the Sign in link
	-type email and password
	-click on the sign in button

*/
//***login ***

 Cypress.Commands.add('login',(email,password)=>{
    cy.visit('http://automationpractice.com/index.php')
    cy.get('.login').click()
    cy.get('#email').type(email)
    cy.get('#passwd').type(password)
    cy.get('#SubmitLogin > span').click()

 })



/*
Amazon Search custom method: amazonSearch
This method will accept one argument as a product name
Then search for that product
Then click on search button 
*/

 Cypress.Commands.add('amazonSearch',(productName) => {
    cy.visit('https://www.amazon.com/')
    cy.get('#twotabsearchtextbox').type(productName)
    cy.get('#nav-search-submit-button').click()

 })

 