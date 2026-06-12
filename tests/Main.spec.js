require('dotenv').config(); 
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('./LoginPage');
const { ComparePage } = require('./ComparePage');

test('Login test with POM', async ({ page }) => {

  const loginPage = new LoginPage(page);

  await loginPage.navigateToHome();
  await expect(page).toHaveURL('https://masterstoreiq.com/');

  await loginPage.clickProfileIcon();
  await expect(page).toHaveURL(/.*sign-in/);


  await loginPage.login(process.env.STORE_EMAIL, process.env.STORE_PASSWORD);

    await expect(page).toHaveURL('https://masterstoreiq.com/');
    console.log("Login Test Case is done !")

});

test('Compare test', async ({ page }) => {
  
  const comparePage = new ComparePage(page);

  await comparePage.navToHome()
  await expect(page).toHaveURL('https://masterstoreiq.com/');

  await comparePage.clickCompareBtn()
  await expect(page).toHaveURL('https://masterstoreiq.com/compare');

  await comparePage.clickAppleWatchCategory()
  await expect(page).toHaveURL('https://masterstoreiq.com/compare?category=watch');

  await comparePage.clickAppleWatchDropdown()

  await comparePage.clickAppleWatchProduct()

  console.log("Compare Test Case is done !")
  
});


