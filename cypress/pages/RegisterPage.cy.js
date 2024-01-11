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
        LoginIcon: ".header-mobile__item.header-mobile__item--customer",
        LoginEmail: "#customer_email",
        Loginpassword: "#customer_password",
        Loginuser: "#halo-auth-sidebar > div.halo-sidebar-wrapper.custom-scrollbar > form > div.form-actions.auth-actions.text-center > input",

        // headersection:".list-menu.list-menu--inline.text-center",
        headersection: ".header-mobile--icon.item__mobile--hamburger",
        // navOptions: 'nav[role="navigation"]',
        headersectionfirst: ".list-menu.list-menu--inline.text-center",
        Counttotal: ".collection.scroll-trigger.animate--slide-in",
        clickImage: "li[class='product scroll-trigger animate--slide-in'] a[title='Maharani Angrakha (FR0814)']",
        checkpayment: ".productView-price.no-js-hidden.clearfix",
        addtocard: "#product-add-to-cart",
        //CardCount:"header-mobile__item header-mobile__item--cart"
        CardCount: "#shopify-section-sections--16826498547940__header-mobile > sticky-header-mobile > div > div > div.header-mobile__item.header-mobile__item--cart > div > a > div > span.text"


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

    clikLoginIcon() {
        cy.get(this.weblocators.LoginIcon).click()
    }

    EnterUserEmail(LogEmail) {
        cy.get(this.weblocators.LoginEmail).type(LogEmail)
    }

    EnterUserPassword(LogPass) {
        cy.get(this.weblocators.Loginpassword).type(LogPass)
    }

    clikLoginuser() {
        cy.get(this.weblocators.Loginuser).click()
    }

    clickheaderSection(){
        cy.get(this.weblocators.headersection).click()
        
    }
    
    clickheadersectionfirst(){
        cy.get(this.weblocators.headersectionfirst).eq(1).within(()=>{
            cy.get('li').first().click()
        })
    }
    
    CounttotalImg(){
        cy.get(this.weblocators.Counttotal).within(()=>{
            cy.get('li').then((items)=>{
                let length= items.length;
                //expect(length).to.be.eq(4)
                cy.log(`total number of Image in page: ${length}`)
                expect(length).to.be.greaterThan(0);
            })
        })
    }
    
    // CounttotalImg(){
    //     cy.get(this.weblocators.Counttotal).should('have.length',0).then((count)=>{
    //           cy.log(`total number of images on page: ${count}`)
    //     })
    // }
    
    clickImGPage(){
        cy.get(this.weblocators.clickImage).click()
    }
    
    verifypayment(){
        cy.get(this.weblocators.checkpayment).invoke('text').as('expectedPrice')
        
        
    }
    
    AddToCardPay(){
        cy.get(this.weblocators.addtocard).click()
    }
    
    
    VerifyCardCount(values1){
        cy.log(`total number of Image in page: ${values1}`)
        cy.get(this.weblocators.CardCount).should('contain.text', values1)
    }

}















