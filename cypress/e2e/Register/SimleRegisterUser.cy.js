/// <reference types="cypress"/>
import { registerUser } from "../../pages/RegisterPage.cy"
import SimpleRegister from "../../fixtures/SimpleRegister.json"
const RegisterObj = new registerUser()

describe("Register Flow Test Cases",()=>{
    
    it("Register User Login",()=>{
        RegisterObj.OpenURL()
        RegisterObj.EnterFirstName(SimpleRegister.FirstName)
        RegisterObj.EnterLastName(SimpleRegister.LastName)
        RegisterObj.EnterEmail(SimpleRegister.Email)
        RegisterObj.EnterPassword(SimpleRegister.Password)
        RegisterObj.ClickCheck()
        RegisterObj.ClickContinue()
        RegisterObj.clickLogoutIcon()
        RegisterObj.clickLogoutUser()
       
       
       

        
        
    })
})