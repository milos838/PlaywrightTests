import { test, expect } from '@playwright/test';
const {LoginPage1} = require("../Pages/LoginPage1");
const {DashboardPage} = require("../Pages/DashboardPage");
const {CartPage} = require("../Pages/CartPage");
const {OrderPage} = require("../Pages/OrderPage");

const testData = require("../Data/testData.json");

test('E2E application workflow test', async ({ page }) => {

//Step 1. Login to the application
const loginPage = new LoginPage1(page);
await loginPage.goTo(testData.url);
await loginPage.logIn(testData.username,testData.password);
await loginPage.validateNavigation(testData.landingPage);


//Step 2. Add a product to the cart
const dashboardPage = new DashboardPage(page);
await dashboardPage.addToCard(testData.product);
await dashboardPage.openCart();

//Step 3. Cart validation and checkout
const cartPage = new CartPage(page);
await cartPage.checkTotal(testData.cena);
await cartPage.checkOut();

//Step 4. Placing the order
const orderPage = new OrderPage(page);
await orderPage.selectCountry();
await orderPage.placeOrder();

})
