class LoginPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    
    
    this.profileIcon = page.getByRole('img', { name: 'Profile' });
    this.emailInput = page.getByPlaceholder('Email address');
    this.passwordInput = page.getByPlaceholder('Password');
    this.loginButton = page.getByRole('button', { name: 'Log in' });
  }

 
  async navigateToHome() {
    await this.page.goto('https://masterstoreiq.com/');
  }

  
  async clickProfileIcon() {
    await this.profileIcon.click();
  }

  
  async login(email, password) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}


module.exports = { LoginPage };