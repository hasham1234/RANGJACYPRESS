/// <reference types="cypress"/>
import { sameregisterUser } from "../../pages/SameUserReg.cy"
//import Register from "../../fixtures/Register.json"
import SameeReg from "../../fixtures/SameeReg.json"
const RegisterObj1 = new sameregisterUser()

describe("Register Flow Test Cases",()=>{
    
    it("Register User Login",()=>{
        RegisterObj1.OpenURL()
        RegisterObj1.EnterFirstName(SameeReg.FirstName)
        RegisterObj1.EnterLastName(SameeReg.LastName)
        RegisterObj1.EnterEmail(SameeReg.Email)
        RegisterObj1.EnterPassword(SameeReg.Password)
        RegisterObj1.ClickCheck()
        RegisterObj1.ClickContinue()
        RegisterObj1.verifySameEmailMessage()
       

        
        
    })
})