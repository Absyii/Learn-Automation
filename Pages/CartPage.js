class CartPage {
 /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page){
    this.page = page;

    this.continueBtn = page.getByRole('button', { name: 'Continue to checkout' })
    
  }

  async continueToCheckout (){
    await this.continueBtn.click();
  }

}
module.exports = { CartPage };