//import '@4tw/cypress-drag-drop'  ====>i put it in the command.js and it is visible from entire framework , we do not need to import over and over in a class


describe('drag and drop',()=>{

    it('double click',()=>{

        cy.visit('https://www.testandquiz.com/selenium/testing.html')

        cy.get('#dblClkBtn').dblclick() //when double click manually i see the alert,but by using cypress i do not see alert.cypress aceepts it automatically
        //cy.get('#dblClkBtn').rightclick()



        cy.on('window:alert',(str)=>{ // this is switching to alert and get the text(str) of the alert
            expect(str)   //getting the text on the alert     
            .to.equal('hi, JavaTpoint Testing') //asserting the text equals "hi, JavaTpoint Testing"
        })

    })


    it.only('drag and drop',()=>{
        /*DRAG AND DROP:
        1. RUN ON TERMINAL : npm install --save-dev @4tw/cypress-drag-drop
        2. import '@4tw/cypress-drag-drop on the top of the class
        (automatically it was added to package.json , like iframe)
        */

        cy.visit('https://www.testandquiz.com/selenium/testing.html')

        //dragging #sourceImage over #targetDiv
        cy
        .get('#sourceImage') //source
        .drag('#targetDiv')  //target


    })


})