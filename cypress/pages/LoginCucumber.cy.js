 export class LoginCum{


    weblocators={
        Email:"#CustomerEmail",
        Password:"#CustomerPassword",
        Submit:"input[value='Sign in']"
    }

    EnterEmail(Emmail){
        cy.get(this.weblocators.Email).type(Emmail)
    }
    EnterPassword(pass){
        cy.get(this.weblocators.Password).type(pass)
    }
    ClickSubmit(){
        cy.get(this.weblocators.Submit).click()
    }
 }