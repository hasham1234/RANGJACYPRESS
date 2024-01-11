/// <reference types="cypress"/>
//import {ProdSeach} from "../../pages/ProductSearch.cy"
//import{Given,When,then} from "cypress-cucumber-preprocessor/steps"
import Loginuser from '../../fixtures/Loginuser.json'
//const selectitem= new ProdSeach()


describe("Test CASES",()=>{
   it("Login",()=>{
    cy.Login(Loginuser.email,Loginuser.password,"/account/login")
   })

   // it("Click the Winter button",()=>{
   //    selectitem.clickheaderSection();
   //    selectitem.clickheadersectionfirst();
   //    selectitem.CounttotalImg();
   //    selectitem.clickImGPage();
   //    selectitem.verifypayment();
   //    selectitem.AddToCardPay();
   //    selectitem.VerifyCardCount('(1)');
   // })
   

   // Given("Visit the Rangja website",()=>{
   //    cy.Login(Loginuser.email,Loginuser.password,"/account/login")
   // })
})



