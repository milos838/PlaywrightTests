const { expect } = require('@playwright/test');

class LoginPage1
{
    constructor(page)
    {
        //deklarisi page 
        this.page = page;
        //deklarisi lokatore
        this.username = this.page.locator("#userEmail");
        this.password = this.page.locator("#userPassword");
        this.signIn = this.page.locator("#login");
    }

    //napravi funkcije
    async goTo(url)
    {
        await this.page.goto(url);
    }
    async logIn(username,password)
    {
        await this.username.fill(username);
        await this.password.fill(password);
        await this.signIn.click();
    } 
    async validateNavigation(landingPage)
    {
        await expect(this.page).toHaveURL(landingPage);
    }

}
module.exports = {LoginPage1};
