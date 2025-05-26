import { test, expect } from '@playwright/test';
const {LoginPage1} = require("../Pages/LoginPage1");
const {DashboardPage} = require("../Pages/DashboardPage");
const {CartPage} = require("../Pages/CartPage");
const {OrderPage} = require("../Pages/OrderPage");

//importing json data file
const testData = require("../Data/testData.json");

test('E2E test', async ({ page }) => {

//deklarisanje stranice koja povlaci funkciju    
const loginPage = new LoginPage1(page);
//funkcije iz LoginPage1 
await loginPage.goTo(testData.url);
await loginPage.logIn(testData.username,testData.password);
await loginPage.validateNavigation(testData.landingPage);


//deklarisanje stranice Dashboard
const dashboardPage = new DashboardPage(page);
//funkcije iz dashboard-a
await dashboardPage.addToCard(testData.product);
await dashboardPage.openCart();


//deklarisanje stranice Cart
const cartPage = new CartPage(page);
//funkcije iz cart-a
await cartPage.checkTotal(testData.cena);
await cartPage.checkOut();

//deklarisanje order stranice
const orderPage = new OrderPage(page);
//funkcije iz ordera
await orderPage.selectCountry();
await orderPage.placeOrder();

})
