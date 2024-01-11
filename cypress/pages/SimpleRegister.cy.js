export class registerUser {
    weblocators = {
        first_name: "#RegisterForm-FirstName",
        last_name: "#RegisterForm-LastName",
        Email: "#RegisterForm-email",
        password: "#RegisterForm-password",
        check_box: "label[for='accepts-marketing']",
        click_continue: ".button.button--primary",
        logoutIcon: ".header-mobile__item.header-mobile__item--customer",
        Logoutuser: "#halo-auth-sidebar > div.halo-sidebar-wrapper.custom-scrollbar > ul > li:nth-child(4) > a > span",
        

        

    }

    OpenURL() {
        cy.visit(Cypress.env('URL'))
    }

    EnterFirstName(FName) {
        cy.get(this.weblocators.first_name).type(FName)
    }
    EnterLastName(LName) {
        cy.get(this.weblocators.last_name).type(LName)
    }

    EnterEmail(EMaill) {
        cy.get(this.weblocators.Email).type(EMaill)
    }

    EnterPassword(EPassword) {
        cy.get(this.weblocators.password).type(EPassword)
    }
    ClickCheck() {
        cy.get(this.weblocators.check_box).click()
    }
    ClickContinue() {
        cy.get(this.weblocators.click_continue).click()
    }

    clickLogoutIcon() {
        cy.get(this.weblocators.logoutIcon).click()
    }

    clickLogoutUser() {
        cy.get(this.weblocators.Logoutuser).click()
    }

}















