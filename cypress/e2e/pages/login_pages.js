
const timeOut = {timeout:100000}

export class CreateUser {

username_textbox = '#username'
password_textbox = '#password'
login_button = '#login'
user_button = '.users'


newUsername_textbox =':nth-child(2) > .recommended-input'
newPassword_textbox =':nth-child(3) > .recommended-input'

birthdate_dropdown ='[type="date"]'
email_textbox = '[data-bind="value: email"]'
contactNumber_textbox = '[data-bind="value: phone"]'

ok_button = '[data-bind="visible: !hideOkButton()"] > .second > .btn'

enterUsername(username){
    cy.get(this.username_textbox,timeOut).type(username)
}

enterPassword(password){
    cy.get(this.password_textbox,timeOut).type(password)
}

clickLogin(){
    cy.get(this.login_button).click()
    
}

getErrorMessage() {
    return cy.get('.lightbox')
  }


enternewUsername(newUsername){
    cy.get(this.newUsername_textbox,timeOut).type(newUsername)
}
enternewPassword(newPassword){
    cy.get(this.newPassword_textbox,timeOut).type(newPassword)
}
enterbirthdate(birthdate){
    cy.get(this.birthdate_dropdown,timeOut).type(birthdate)
}

enteremail(email){
    cy.get(this.email_textbox,timeOut).type(email)
}

entercontactNumber(contactNumber){
    cy.get(this.contactNumber_textbox,timeOut).type(contactNumber)
}
clickOk(){
    cy.get(this.ok_button).click()

}

}
