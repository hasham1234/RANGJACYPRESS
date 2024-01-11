/// <reference types="cypress"/>
import { registerUser } from "../../pages/RegisterPage.cy"
import Register from "../../fixtures/Register.json"
const RegisterObj = new registerUser()

describe("Register Flow Test Cases",()=>{
    
    it("Register User Login",()=>{
        RegisterObj.OpenURL()
        RegisterObj.EnterFirstName(Register.Registration.FirstName)
        RegisterObj.EnterLastName(Register.Registration.LastName)
        RegisterObj.EnterEmail(Register.Registration.Email)
        RegisterObj.EnterPassword(Register.Registration.Password)
        RegisterObj.ClickCheck()
        RegisterObj.ClickContinue()
        RegisterObj.clickLogoutIcon()
        RegisterObj.clickLogoutUser()
        RegisterObj.clikLoginIcon()
        RegisterObj.EnterUserEmail(Register.UserLogin.Emaill)
        RegisterObj.EnterUserPassword(Register.UserLogin.passsword)
        RegisterObj.clikLoginuser()

        RegisterObj.clickheaderSection();
        RegisterObj.clickheadersectionfirst();
        RegisterObj.CounttotalImg();
        RegisterObj.clickImGPage();
        RegisterObj.verifypayment();
        RegisterObj.AddToCardPay();
        cy.wait(10000)
        RegisterObj.VerifyCardCount('1');

       

        
        
    })
})