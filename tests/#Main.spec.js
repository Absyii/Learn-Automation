require('dotenv').config(); 
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('./LoginPage');
const { ComparePage } = require('./ComparePage');
const { ProductPage } = require('./ProductPage');
const { CartPage } = require('./CartPage');
const { CheckoutPage } = require('./CheckoutPage');

test('Login test with POM', async ({ page }) => {

  const loginPage = new LoginPage(page);

  await loginPage.navigateToHome();
  await expect(page).toHaveURL(process.env.BASE_URL);

  await loginPage.clickProfileIcon();
  await expect(page).toHaveURL(/.*sign-in/);


  await loginPage.login(process.env.STORE_EMAIL, process.env.STORE_PASSWORD);

  await loginPage.saveUserLogin();
  
  await expect(page).toHaveURL(process.env.BASE_URL);
    

});


test('Compare test', async ({ page }) => {
  
  const comparePage = new ComparePage(page);

  await comparePage.navToHome()
  await expect(page).toHaveURL(process.env.BASE_URL);

  await comparePage.clickCompareBtn()
  await expect(page).toHaveURL('https://staging.masterstoreiq.com/compare');

  await comparePage.clickAppleWatchCategory()
  await expect(page).toHaveURL('https://staging.masterstoreiq.com/compare?category=watch');

  await comparePage.clickAppleWatchDropdown()

  await comparePage.clickAppleWatchProduct()

  console.log("Compare Test Case is done !")
  
});


