export class sameregisterUser{
    weblocators={
        first_name:"#RegisterForm-FirstName",
        last_name:"#RegisterForm-LastName",
        Email:"#RegisterForm-email",
        password:"#RegisterForm-password",
        check_box:"label[for='accepts-marketing']",
        click_continue:".button.button--primary",
        SameUserErrorMessage:"#create_customer > div.form-message > div > div > ul > li",
        

    }

    OpenURL(){
        cy.visit(Cypress.env('URL'))
    }

    EnterFirstName(FName){
        cy.get(this.weblocators.first_name).type(FName)
    }
    EnterLastName(LName){
        cy.get(this.weblocators.last_name).type(LName)
    }

    EnterEmail(EMaill){
        cy.get(this.weblocators.Email).type(EMaill)
    }

    EnterPassword(EPassword){
        cy.get(this.weblocators.password).type(EPassword)
    }
    ClickCheck(){
        cy.get(this.weblocators.check_box).click()
    }
    ClickContinue(){
        cy.get(this.weblocators.click_continue).click()
    }

   

    verifySameEmailMessage(){
        //cy.get(this.weblocators.ErrorMessage).invoke('text').as('expectedMessage')
        var message1;
        cy.fixture('SameeReg').then((data)=> {
            message1 = data.ErrorMessage
            cy.log(`print the message: ${message1}`)
        }).then(() => {
            cy.log(`Print the ErrorsMessageRegistration: ${this.weblocators.SameUserErrorMessage}`);
            cy.get(this.weblocators.SameUserErrorMessage).should('contain.text', message1)
        })
    }

    

}