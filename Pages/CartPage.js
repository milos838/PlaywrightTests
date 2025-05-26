const { expect } = require('@playwright/test');

class CartPage
{
    constructor(page)
    {
        this.page = page;
        this.totalLocator = this.page.locator("li:nth-child(2) span:nth-child(2)");
        this.checkout = this.page.getByText("Checkout");
    }
    async checkTotal(cena)
    {
        var total = await this.totalLocator.textContent();
        expect(total).toEqual(cena);
    }
    async checkOut()
    {
        await this.checkout.click();
    }
}
module.exports = {CartPage};