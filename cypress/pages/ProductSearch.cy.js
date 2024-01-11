export class ProdSeach{

weblocators={
   // headersection:".list-menu.list-menu--inline.text-center",
    headersection:".header-mobile--icon.item__mobile--hamburger",
   // navOptions: 'nav[role="navigation"]',
    headersectionfirst:".list-menu.list-menu--inline.text-center",
    Counttotal:".collection.scroll-trigger.animate--slide-in",
    //clickImage:"li[class='product scroll-trigger animate--slide-in'] a[title='Maharani Angrakha (FR0814)']",
    clickImage:"",
    checkpayment:".productView-price.no-js-hidden.clearfix",
    addtocard:"#product-add-to-cart",
    //CardCount:"header-mobile__item header-mobile__item--cart"
    CardCount:"#shopify-section-sections--16826498547940__header-mobile > sticky-header-mobile > div > div > div.header-mobile__item.header-mobile__item--cart > div > a > svg"
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