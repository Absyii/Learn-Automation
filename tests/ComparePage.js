class ComparePage {
/**
   * @param {import('@playwright/test').Page} page
   */
    constructor(page){
        this.page = page;
        
       this.compareBtn = page.getByRole('link', { name: 'Compare to other Models' })
       this.appleWatchCategory = page.locator('div').filter({ hasText: /^Apple Watch$/ }) 
       this.appleWatchDropdown = page.locator('.ant-select-selector').nth(0);
       this.appleWatchProduct = page.getByText('Apple Watch Ultra 2 GPS + Cellular, 49mm Titanium Alpine Loop (2024)')

    }

    async navToHome (){
     await this.page.goto('https://masterstoreiq.com/');
    }

    async clickCompareBtn (){
       await this.compareBtn.click()
    }

    async clickAppleWatchCategory (){
       await this.appleWatchCategory.nth(5).click()
    }

    async clickAppleWatchDropdown(){
       await this.appleWatchDropdown.click()
    }

    async clickAppleWatchProduct(){
       await this.appleWatchProduct.click()
    }

}
module.exports = { ComparePage };
