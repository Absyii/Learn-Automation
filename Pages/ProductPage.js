const { expect } = require('@playwright/test')

class ProductPage {
 /**
   * @param {import('@playwright/test').Page} page
   */
constructor(page){
    this.page = page

    this.selectMethod = page.getByRole('button', { name: 'Select a delivery method' })
    this.pickupRadio = page.getByRole('radio', { name: 'Pick up' })
    this.selectBranch  = page.locator('#rc_select_0')
    this.basraBranch   = page.getByText('Basra / Master Store Basra', { exact: true })
    this.ContinueBtn   = page.getByRole('button', { name: 'Continue to shipping' })

    this.navToIphone   = page.getByRole('navigation').locator('a[aria-describedby="transition-popper-iPhone"]');
    this.SelectIphone17= page.locator('[class*="product_productName"]' , { hasText : 'iPhone 17' } )
    this.Storage1TB    = page.getByText('1TBIQD1,234,577')
    this.addToCartBtn  = page.getByRole('button', { name: 'Add to cart'})
    this.waitPopup     = page.getByRole('dialog').getByText('Related Accessories')
    this.popupAddToCartBtn  = page.getByRole('button', { name: 'Add to cart', exact: true })
}

async selectBranchFlow () {
    await this.selectMethod.click();
    await this.pickupRadio.check();
    await this.selectBranch.click();
    await this.basraBranch.click();
    await this.page.waitForTimeout(2000)
    await this.ContinueBtn.click();
    await this.waitForReload();
} 

async selectProductFlow () {
    await this.page.waitForLoadState('domcontentloaded');
    await this.navToIphone.click();
    await this.waitForReload();
    
    await this.page.getByText('All iPhone products').click();
    await this.SelectIphone17.waitFor({state : 'attached'})
    await this.SelectIphone17.scrollIntoViewIfNeeded();
    // await this.page.waitForTimeout(5000)
    await this.SelectIphone17.click();

    // await this.page.waitForTimeout(5000)
    await this.Storage1TB.waitFor({ state: 'visible', timeout: 10000 });
    await this.Storage1TB.click();
    // await this.page.waitForTimeout(1000)
    await this.addToCartBtn.click();
    await expect(this.waitPopup).toBeVisible();
    await this.popupAddToCartBtn.click();
}

async waitForReload (){
    return this.page.locator('.loading-spinner, [class*="loading"], .MuiBackdrop-root').waitFor({ state: 'detached', timeout: 15000 }).catch(() => {});
}

}

module.exports = { ProductPage };