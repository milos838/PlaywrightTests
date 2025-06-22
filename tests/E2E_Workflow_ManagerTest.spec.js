import { test, expect } from '@playwright/test';
import { PageManager } from '../Pages/PageManager';

const testData = require("../Data/testData.json");

test('E2E application workflow test', async ({ page }) => {

// Initialize Page Manager
const pageManager = new PageManager(page);
//Step 1. Login to the application
await pageManager.getLoginPage().goTo(testData.url);
await pageManager.getLoginPage().logIn(testData.username,testData.password);
await pageManager.getLoginPage().validateNavigation(testData.landingPage);
//Step 2. Add a product to the cart
await pageManager.getDashboardPage().addToCard(testData.product);
await pageManager.getDashboardPage().openCart();
//Step 3. Cart validation and checkout
await pageManager.getCartPage().checkTotal(testData.cena);
await pageManager.getCartPage().checkOut();
//Step 4. Placing the order
await pageManager.getOrderPage().selectCountry();
await pageManager.getOrderPage().placeOrder();

})
