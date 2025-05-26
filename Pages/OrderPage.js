
class OrderPage
{
    constructor(page)
    {
        this.page = page;
        this.countryinput = this.page.locator("[placeholder='Select Country']");
        this.countryoutputs = this.page.locator(".ta-item.list-group-item.ng-star-inserted"); 
        this.placeorder = this.page.locator(".btnn.action__submit.ng-star-inserted");
    }

    async selectCountry()
    {
        await this.countryinput.pressSequentially("Russ");
        await this.page.waitForTimeout(2000);
        const countries = await this.countryoutputs.all();
        
        for (const country of countries)
        {
        const countryName = await country.textContent();
        if(countryName.includes("Russian"))
            {
            await country.click();
            break;
            }

        }

    }

    async placeOrder()
    {
        
        await this.placeorder.click();
    }
}
module.exports = {OrderPage};








