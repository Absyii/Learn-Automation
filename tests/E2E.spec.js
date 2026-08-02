require('dotenv').config();
const { test, expect } = require('@playwright/test'); 
const { LoginPage } = require('../Pages/LoginPage');
const { ProductPage } = require('../Pages/ProductPage');
const { CartPage } = require('../Pages/CartPage');
const { CheckoutPage } = require('../Pages/CheckoutPage');




test.beforeEach(async({ page }) => {
 
  await page.goto('/')
})

test.use({ storageState: 'user.json' });

test('E2E Flow Order' , async({ page }) => {
  test.setTimeout(60000);
  const productPage = new ProductPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);
  const loginPage = new LoginPage(page);
  
  await expect(page).toHaveURL(process.env.BASE_URL);
  await loginPage.clickProfileIcon();
  await expect(page).toHaveURL(/.*sign-in/);
  await loginPage.login(process.env.STORE_EMAIL, process.env.STORE_PASSWORD);
  await loginPage.saveUserLogin();

  
  
  await page.goto('/')
  await page.waitForLoadState('networkidle');
 
  await productPage.selectBranchFlow();
  
  await productPage.selectProductFlow();
  
  await cartPage.continueToCheckout();

  await checkoutPage.loginCheckOut(); 
  
})

