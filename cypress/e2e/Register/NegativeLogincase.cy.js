/// <reference types ="cypress"/>
import { NegUser } from "../../pages/NegLoginUser.cy"
const negObj=new NegUser()
import NegativeLogin from "../../fixtures/NegativeLogin.json"

describe("TEST CASES",()=>{
    before("Negative Login Case",()=>{
        cy.Login(NegativeLogin.email,NegativeLogin.password,"/account/login")
        
    })

    it("verify negative message",()=>{
        negObj.verifyErrorMessage()
    })
    
})