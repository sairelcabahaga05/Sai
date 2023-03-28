
const timeOut = {timeout: 100000}


import { LoginPage } from "./pages/login_pages"

const loginPage = new LoginPage


beforeEach(function(){
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',timeOut)

})


describe('All Login Tests', function(){

it ('Login Test 1', function(){
   
    loginPage.enterUsername('Admin')
    loginPage.enterPassword('admin123')
    loginPage.clickLogin()

})

it ('Login Test 2', function(){
   
    
    loginPage.enterUsername('Admin123')
    loginPage.enterPassword('admin123')
    loginPage.clickLogin()
    loginPage.getErrorMessage()
    
})
})

