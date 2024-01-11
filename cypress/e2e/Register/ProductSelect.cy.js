/// <reference types="cypress"/>
import {ProdSeach} from "../../pages/ProductSearch.cy"
import Loginuser from '../../fixtures/Loginuser.json'
const selectitem= new ProdSeach()


describe("Test CASES",()=>{
   before("Login",()=>{
    cy.Login(Loginuser.email,Loginuser.password,"/account/login")
   })

   it("Click the Winter button",()=>{
      selectitem.clickheaderSection();
      selectitem.clickheadersectionfirst();
      selectitem.CounttotalImg();
      selectitem.clickImGPage();
      selectitem.verifypayment();
      selectitem.AddToCardPay();
      cy.wait(10000)
      selectitem.VerifyCardCount('(1)');
   })
   
})
