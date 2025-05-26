const { expect } = require('@playwright/test');

class DashboardPage
{
    constructor(page)
    {
        this.page = page;
        this.cartLink = this.page.locator("[routerlink='/dashboard/cart']");
    }
    async addToCard(product)
    {
        await this.page.waitForSelector(".card-body" , { state: 'visible' });
        //dodavaje proizvoda u cart koristeci for loop
        const products = this.page.locator(".card-body");
        const count = await products.count();
        for(let i=0; i < count; i++)
        {
            //provera uslova da li je izabran proizvod sa odgovarajucim imenom
            if(await products.nth(i).locator("b").textContent() === product)
            {
                //dodavanje u cart 
                await products.nth(i).locator("text= Add To Cart").click();
                //komanda koja zaustavlja niz kada je dodat zeljeni proizvod
                break;
            }
        }     
          
    }
    async openCart()
    {
        //klik na Cart link
        await this.cartLink.click();
    }
}
module.exports = {DashboardPage};