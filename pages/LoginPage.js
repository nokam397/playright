// pages/LoginPage.js
export class LoginPage {
  constructor(page) {
    this.page = page;                 // instance Playwright "page" injectée depuis le test
    this.usernameInput = '#user-name';// sélecteur du champ username
    this.passwordInput = '#password'; // sélecteur du champ password
    this.loginButton = '#login-button';// sélecteur du bouton login
  }

  // aller sur la page d'accueil (login)
  async goto() {
    await this.page.goto('https://www.saucedemo.com/');
  }

  // effectuer le login : remplir username, password, cliquer
  async login(username, password) {
    await this.page.fill(this.usernameInput, username); // remplir username
    await this.page.fill(this.passwordInput, password); // remplir password
    await this.page.click(this.loginButton);            // cliquer sur login
  }
}
