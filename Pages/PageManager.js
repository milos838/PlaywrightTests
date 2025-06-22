import { LoginPage1 } from "./LoginPage1";
import { DashboardPage } from "./DashboardPage";
import { CartPage } from "./CartPage";
import { OrderPage } from "./OrderPage";

export class PageManager {
    constructor(page)
    {
        this.page = page;
        this.loginPage = new LoginPage1(page);
        this.dashboardPage = new DashboardPage(page);
        this.cartPage = new CartPage(page);
        this.orderPage = new OrderPage(page);

    }
    getLoginPage()
    {
        return this.loginPage;
    }
    getDashboardPage()
    {
        return this.dashboardPage;
    }
    getCartPage()
    {
        return this.cartPage;
    }
    getOrderPage()
    {
        return this.orderPage;
    }
}