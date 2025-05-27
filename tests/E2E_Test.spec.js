import { test, expect } from '@playwright/test';
const {LoginPage1} = require("../Pages/LoginPage1");
const {DashboardPage} = require("../Pages/DashboardPage");
const {CartPage} = require("../Pages/CartPage");
const {OrderPage} = require("../Pages/OrderPage");

const testData = require("../Data/testData.json");

test('E2E test', async ({ page }) => {

  
const loginPage = new LoginPage1(page);

await loginPage.goTo(testData.url);
await loginPage.logIn(testData.username,testData.password);
await loginPage.validateNavigation(testData.landingPage);



const dashboardPage = new DashboardPage(page);

await dashboardPage.addToCard(testData.product);
await dashboardPage.openCart();



const cartPage = new CartPage(page);

await cartPage.checkTotal(testData.cena);
await cartPage.checkOut();


const orderPage = new OrderPage(page);

await orderPage.selectCountry();
await orderPage.placeOrder();

})
