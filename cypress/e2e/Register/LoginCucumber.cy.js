/// <reference types="cypress"/>
import{Given, When,then} from "cypress-cucumber-preprocessor/steps"
import { LoginCum } from "../../pages/LoginCucumber.cy"
import Loginuser from "../../fixtures/Loginuser.json"
const loginobj=new LoginCum()


describe("Login TEST CAES",()=>{
    Given("Visit the Rangja website",()=>{
        cy.visit("https://myrangja.com")
    })

    When("User provide valid email",()=>{
       // cy.get("#CustomerEmail").type(email)
       loginobj.EnterPassword(Loginuser.email)
    })

    When("User provide valid password",()=>{
        //cy.get("#CustomerPassword").type(password)
        loginobj.EnterPassword(Loginuser.password)
    })

    then("Click the submit button to Login the application",()=>{
        //cy.get('input[value="Sign in"]').click()
        loginobj.ClickSubmit(Loginuser.ClickSubmit)
    })
})