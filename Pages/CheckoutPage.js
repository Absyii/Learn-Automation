class CheckoutPage{
/**
   * @param {import('@playwright/test').Page} page
   */
constructor(page){
    this.page = page;

    this.cashPaymentSelection = page.getByRole('radio').first()
    this.placeOrderBtn = page.getByRole('button', { name: 'Place Order' })
    this.viewOrderBtn = page.getByRole('button', { name: 'View Order Details' })

}

async loginCheckOut () {
    await this.cashPaymentSelection.check();
    await this.placeOrderBtn.click();
    await this.viewOrderBtn.click();
}

}
module.exports = { CheckoutPage };