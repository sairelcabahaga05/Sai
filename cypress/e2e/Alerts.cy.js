describe('Alerts Test',function(){

    //1
    it('Normal Alert',function(){

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
         cy.get("button[onclick='jsAlert()']").click()

         cy.on('window: alert', (t)=>{
            expect(t).to.contains('Iam a JS Alert') 

         })
          
         cy.get('#result').should('have.text', ('You successfully clicked an alert sadasdasdasd'))

    })


    //2
    it('Comfirm Alert',function(){

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
         cy.get("button[onclick='jsConfirm()']").click()

         cy.on('window: confirm', (t)=>{
            expect(t).to.contains('I am a JS Confirm') 

         })
          
         cy.get('#result').should('have.text', ('You clicked: Ok'))

    })


      //3 check if may na type
      it('Prompt Alert',function(){

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
         
        cy.window().then((win)=>{
            cy.stub(win,'prompt').returns('welcome')

        })
        
        cy.get("button[onclick='jsPrompt()']").click()

        //cy.on('window:prompt', ()=>false)
          
         cy.get('#result').should('have.text', 'You entered: welcome')

    })

//4
it.only('Authenticated Alert',function(){

//mano-mano log in
    cy.visit('https://the-internet.herokuapp.com/basic_auth',{auth:
                                                                {
                                                                    username:'admin',
                                                                    password:'admin'
                                                                }
                                                            })
     
    cy.get("div[class='example'] p").should('have.contain', 'Congratulations!')


//ilargo log in

cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth')
cy.get("div[class='example'] p").should('have.contain', 'Congratulations!')

})

})