export class NegUser{
    weblocators={
        
        ErrorsMessageConfirm:"p.alertBox-message",
       
 }

 OpenURL(){
    cy.visit(Cypress.env('URL'))
}

verifyErrorMessage(){
    //cy.get(this.weblocators.ErrorMessage).invoke('text').as('expectedMessage')
    var message;
    cy.fixture('NegativeLogin').then((data)=> {
        message = data.ErrorMessage
        cy.log(`print the message: ${message}`)
    }).then(() => {
        cy.log(`Print the ErrorsMessageConfirm: ${this.weblocators.ErrorsMessageConfirm}`);
        cy.get(this.weblocators.ErrorsMessageConfirm).should('contain.text', message)
    })
}


}